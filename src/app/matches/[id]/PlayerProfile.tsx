/* eslint-disable @next/next/no-img-element */
import { Sword as Bat, Target, CheckCircle2 } from "lucide-react";

const PlayerProfile = ({
  name,
  imageUrl,
  batStyle,
  bowlStyle,
  type,
  isPlaying = false,
}: {
  name: string;
  imageUrl: { src: string };
  batStyle: string;
  bowlStyle: string;
  type: string;
  isPlaying?: boolean;
}) => {
  return (
    <div
      className={`relative border rounded-xl p-4 flex flex-col gap-3 items-center bg-background hover:shadow-md transition-all duration-300 group ${
        isPlaying ? "border-green-200" : "border-muted/50"
      }`}
    >
      {isPlaying && (
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
          <CheckCircle2 className="w-3 h-3 text-white" />
        </div>
      )}

      <div className="relative">
        <img
          src={imageUrl.src}
          alt={name}
          className="w-16 h-16 rounded-full shadow-lg object-cover border-2 border-muted/30 group-hover:border-primary/30 transition-colors"
        />
        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
          {type.charAt(0)}
        </span>
      </div>

      <p className="font-semibold text-primary text-center group-hover:text-primary/80 transition-colors">
        {name}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <div className="flex items-center text-xs text-muted-foreground gap-1 px-2 py-1 bg-muted/30 rounded-full">
          <Bat className="w-3 h-3 text-accent-foreground" />
          <span>{batStyle || "N/A"}</span>
        </div>
        <div className="flex items-center text-xs text-muted-foreground gap-1 px-2 py-1 bg-muted/30 rounded-full">
          <Target className="w-3 h-3 text-accent-foreground" />
          <span>{bowlStyle || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};
export default PlayerProfile;
