import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TournamentDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Placeholder data; in real scenario this would come from an API using the `id`
  const tournament = {
    name: "Championship 2024",
    organizer: {
      name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    },
    startDate: "2024-07-10",
    participants: 32,
    venue: "Paris, France",
    history:
      "The Championship 2024 brings together the best teams from around the world to compete for the ultimate glory. Since its inception, it has been a stage for memorable moments and outstanding performances.",
    images: [
      "https://images.unsplash.com/photo-1546519638-68f08e0a0a98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80",
    ],
  };

  const [current, setCurrent] = useState(0);
  const total = tournament.images.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 py-8 px-4 lg:py-16">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
        {tournament.name}
      </h1>

      {/* Organizer */}
      <div className="flex items-center gap-4">
        <img
          src={tournament.organizer.photo}
          alt={tournament.organizer.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-gray-700">
            Organized by {tournament.organizer.name}
          </p>
          <p className="text-sm text-gray-500">
            Starts on {new Date(tournament.startDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-gray-500">Participants</p>
          <p className="text-xl font-semibold text-gray-800">
            {tournament.participants}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Venue</p>
          <p className="text-xl font-semibold text-gray-800">
            {tournament.venue}
          </p>
        </div>
      </div>

      {/* History / Description */}
      <div>
        <h2 className="mb-2 text-2xl font-bold">History & Details</h2>
        <p className="text-gray-700">{tournament.history}</p>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={tournament.images[current]}
          alt={`Tournament slide ${current + 1}`}
          className="h-64 w-full object-cover sm:h-80 md:h-96"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 backdrop-blur hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 backdrop-blur hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
          {tournament.images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
