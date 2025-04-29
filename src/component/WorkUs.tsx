import {
  BrainCircuit,
  ShieldCheck,
  Trophy,
  LineChart,
  ActivitySquare,
  Bot,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface WorkUs {
  heading?: string;
  reasons?: Reason[];
}

const WorkUs = ({
  heading = "Why Work With Us?",
  reasons = [
    {
      title: "AI Match Predictions",
      description:
        "Get highly accurate match predictions powered by advanced AI models trained on thousands of historical datasets across Cricket, Football, and Tennis.",
      icon: <BrainCircuit className="size-6" />,
    },
    {
      title: "Expert Insights",
      description:
        "Our panel of professional sports analysts and AI experts deliver deep insights to give you the competitive edge in every match.",
      icon: <ShieldCheck className="size-6" />,
    },
    {
      title: "Winning Strategies",
      description:
        "Access strategic predictions including player form, pitch reports, weather conditions, and live team updates for better forecasting.",
      icon: <Trophy className="size-6" />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Track live match data, win probability, score projections, and betting odds in real time — all powered by cutting-edge AI algorithms.",
      icon: <LineChart className="size-6" />,
    },
    {
      title: "AI Chat Support",
      description:
        "Get instant answers to your sports queries with our intelligent AI chat assistant, available 24/7 to support your prediction needs.",
      icon: <Bot className="size-6" />,
    },
    {
      title: "Performance Tracking",
      description:
        "Analyze your past predictions, accuracy rates, and success metrics to continuously improve your prediction game over time.",
      icon: <ActivitySquare className="size-6" />,
    },
  ],
}: WorkUs) => {
  return (
    <section className="p-10">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { WorkUs };
