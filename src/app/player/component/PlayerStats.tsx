import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BattingStats, BowlingStats } from "./StatsTabs";
import StatCard from "./StatCard";

interface CareerStats {
  batting: {
    test: any;
    odi: any;
    t20: any;
    ipl: any;
  };
  bowling: {
    test: any;
    odi: any;
    t20: any;
    ipl: any;
  };
  fielding: {
    catches: number;
    stumpings: number;
  };
}

export default function PlayerStats({ stats }: { stats: CareerStats }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Career Statistics</h2>

        <Tabs defaultValue="batting" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="batting">Batting</TabsTrigger>
            <TabsTrigger value="bowling">Bowling</TabsTrigger>
            <TabsTrigger value="fielding">Fielding</TabsTrigger>
          </TabsList>

          <TabsContent value="batting">
            <div className="mt-4">
              <Tabs defaultValue="test" className="w-full">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="test">Test</TabsTrigger>
                  <TabsTrigger value="odi">ODI</TabsTrigger>
                  <TabsTrigger value="t20">T20</TabsTrigger>
                  <TabsTrigger value="ipl">IPL</TabsTrigger>
                </TabsList>

                <TabsContent value="test">
                  <BattingStats stats={stats.batting.test} />
                </TabsContent>
                <TabsContent value="odi">
                  <BattingStats stats={stats.batting.odi} />
                </TabsContent>
                <TabsContent value="t20">
                  <BattingStats stats={stats.batting.t20} />
                </TabsContent>
                <TabsContent value="ipl">
                  <BattingStats stats={stats.batting.ipl} />
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>

          <TabsContent value="bowling">
            <div className="mt-4">
              <Tabs defaultValue="test" className="w-full">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="test">Test</TabsTrigger>
                  <TabsTrigger value="odi">ODI</TabsTrigger>
                  <TabsTrigger value="t20">T20</TabsTrigger>
                  <TabsTrigger value="ipl">IPL</TabsTrigger>
                </TabsList>

                <TabsContent value="test">
                  <BowlingStats stats={stats.bowling.test} />
                </TabsContent>
                <TabsContent value="odi">
                  <BowlingStats stats={stats.bowling.odi} />
                </TabsContent>
                <TabsContent value="t20">
                  <BowlingStats stats={stats.bowling.t20} />
                </TabsContent>
                <TabsContent value="ipl">
                  <BowlingStats stats={stats.bowling.ipl} />
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>

          <TabsContent value="fielding">
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard
                title="Catches"
                value={stats.fielding.catches}
                icon="Catch"
                description="Total catches in career"
              />
              <StatCard
                title="Stumpings"
                value={stats.fielding.stumpings}
                icon="Stumping"
                description="Total stumpings in career"
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
