import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, User, Sword, Calendar, Flag, Users } from "lucide-react";

interface Player {
  id: number;
  name: string;
  shortName: string;
  batStyle: string;
  bowlStyle: string;
  imageUrl: { src: string };
  age?: number;
  nationality?: string;
  role?: string;
  teams?: string[];
  debut?: string;
}

interface DetailItemProps {
  icon: LucideIcon;
  label: string;
  value: string | number | string[];
}

const DetailItem = ({ icon: Icon, label, value }: DetailItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-muted-foreground" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">
          {Array.isArray(value) ? value.join(", ") : value}
        </p>
      </div>
    </div>
  );
};

export default function PlayerHeader({ player }: { player: Player }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
            <img
              src={player.imageUrl.src}
              alt={player.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{player.name}</h1>
            <p className="text-lg text-muted-foreground">{player.shortName}</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <DetailItem icon={User} label="Batting" value={player.batStyle} />
              <DetailItem
                icon={Sword}
                label="Bowling"
                value={player.bowlStyle}
              />
              {player.age && (
                <DetailItem icon={User} label="Age" value={player.age} />
              )}
              {player.nationality && (
                <DetailItem
                  icon={Flag}
                  label="Nationality"
                  value={player.nationality}
                />
              )}
              {player.role && (
                <DetailItem icon={User} label="Role" value={player.role} />
              )}
              {player.teams && (
                <DetailItem icon={Users} label="Teams" value={player.teams} />
              )}
              {player.debut && (
                <DetailItem
                  icon={Calendar}
                  label="Debut"
                  value={player.debut}
                />
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
