import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { players } from "@/data/players";

export default function TournamentLanding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 py-6 lg:py-12">
      {/* Hero Section */}
      <section className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 p-6 text-center text-white shadow-lg">
        <h1 className="z-10 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Grand Masters Championship 2024
        </h1>
        {/* Decorative background image */}
        <img
          src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80"
          alt="Trophy"
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 ease-out hover:scale-110"
        />
      </section>

      {/* Ranking Section */}
      <section className="mx-auto w-full max-w-4xl px-4">
        <h2 className="mb-4 text-2xl font-bold text-center lg:text-left">Current Rankings</h2>
        <div className="space-y-3">
          {players.map((player, index) => (
            <Card
              key={player.id}
              className="cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => navigate(`/player/${player.id}`)}
            >
              <CardContent className="flex items-center gap-4 p-4 sm:p-6">
                <span className="text-xl font-semibold w-6 text-center">{index + 1}</span>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={player.photo} alt={player.name} />
                  <AvatarFallback>
                    {player.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-lg">{player.name}</p>
                </div>
                <p className="font-semibold text-purple-700 dark:text-purple-400">
                  {player.points} pts
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
