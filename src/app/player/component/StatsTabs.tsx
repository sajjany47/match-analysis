import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function BattingStats({ stats }: { stats: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Batting Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Matches</TableCell>
              <TableCell>{stats.matches}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Innings</TableCell>
              <TableCell>{stats.innings}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Runs</TableCell>
              <TableCell>{stats.runs}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Highest</TableCell>
              <TableCell>{stats.highest}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Average</TableCell>
              <TableCell>{stats.average}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Strike Rate</TableCell>
              <TableCell>{stats.strikeRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Centuries</TableCell>
              <TableCell>{stats.centuries}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Fifties</TableCell>
              <TableCell>{stats.fifties}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Fours</TableCell>
              <TableCell>{stats.fours}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Sixes</TableCell>
              <TableCell>{stats.sixes}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function BowlingStats({ stats }: { stats: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bowling Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Matches</TableCell>
              <TableCell>{stats.matches}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Innings</TableCell>
              <TableCell>{stats.innings}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Wickets</TableCell>
              <TableCell>{stats.wickets}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Best</TableCell>
              <TableCell>{stats.best}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Average</TableCell>
              <TableCell>{stats.average}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Economy</TableCell>
              <TableCell>{stats.economy}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Strike Rate</TableCell>
              <TableCell>{stats.strikeRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5 Wickets</TableCell>
              <TableCell>{stats.fiveWickets}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
