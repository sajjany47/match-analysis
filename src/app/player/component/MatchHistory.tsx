import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Match {
  date: string;
  match: string;
  opponent: string;
  format: string;
  batting: {
    runs: number;
    balls: number;
    fours: number;
    sixes: number;
    out: boolean;
  };
  bowling?: {
    overs: string;
    maidens: number;
    runs: number;
    wickets: number;
    economy: string;
  };
  result: string;
}

export default function MatchHistory({ matches }: { matches: Match[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Last {matches.length} matches</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Match</TableHead>
              <TableHead>Bat</TableHead>
              <TableHead>Bowl</TableHead>
              <TableHead>Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.map((match, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{match.date}</TableCell>
                <TableCell>
                  <div className="font-medium">{match.opponent}</div>
                  <div className="text-sm text-muted-foreground">
                    {match.format}
                  </div>
                </TableCell>
                <TableCell>
                  {match.batting.runs}
                  {!match.batting.out && "*"}
                  <div className="text-xs text-muted-foreground">
                    {match.batting.balls}b, {match.batting.fours}x4,{" "}
                    {match.batting.sixes}x6
                  </div>
                </TableCell>
                <TableCell>
                  {match.bowling ? (
                    <>
                      {match.bowling.wickets}/{match.bowling.runs}
                      <div className="text-xs text-muted-foreground">
                        {match.bowling.overs}ov, ER: {match.bowling.economy}
                      </div>
                    </>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      match.result === "Won"
                        ? "bg-green-100 text-green-800"
                        : match.result === "Lost"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {match.result}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
