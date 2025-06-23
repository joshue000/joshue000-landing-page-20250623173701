import { useParams, Link } from "react-router-dom";
import { players } from "@/data/players";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PlayerDetail() {
  const { id } = useParams<{ id: string }>();
  const player = players.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <p className="text-lg font-medium">Player not found.</p>
        <Link to="/" className="text-indigo-600 hover:underline">
          Back to Rankings
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6 py-10 px-4">
      <Link to="/" className="text-indigo-600 hover:underline">
        ← Back to Rankings
      </Link>

      <Card>
        <CardHeader className="flex flex-col items-center gap-4 py-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={player.photo} alt={player.name} />
            <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-center">
            {player.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pb-6">
          <div className="flex justify-between">
            <span className="font-medium">Points:</span>
            <span>{player.points}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date of Birth:</span>
            <span>{player.dob}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Height:</span>
            <span>{player.height}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Weight:</span>
            <span>{player.weight}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {player.details}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
