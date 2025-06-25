import { useNavigate } from "react-router-dom";

export default function TournamentLanding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 py-6 lg:py-12">
      {/* Hero Section */}
      <section
        onClick={() => navigate("/tournament/1")}
        className="relative flex h-72 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600"
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Championship 2024
        </h1>
      </section>

      {/* More landing content here (unchanged) */}
    </div>
  );
}
