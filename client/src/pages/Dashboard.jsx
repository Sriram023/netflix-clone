import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  const movies = [
    "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  ];

  return (
    <div className="bg-black min-h-screen text-white">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-4 bg-black fixed w-full z-50">
        <h1 className="text-red-600 text-3xl font-bold tracking-widest drop-shadow-[0_0_10px_red]">
          NETFLIX
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[80vh] flex items-end p-10 pt-24">

        <img
          src="https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"
          className="absolute w-full h-full object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Stranger Things</h1>

          <p className="mb-4 text-gray-300">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments.
          </p>

          <div className="flex gap-3">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:scale-105 transition">
              ▶ Play
            </button>

            <button className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* MOVIE ROW */}
      <div className="px-10 mt-6">
        <h2 className="text-2xl mb-4">Popular on Netflix</h2>

        <div className="flex gap-4 overflow-x-scroll pb-4">

          {movies.map((movie, index) => (
            <div key={index} className="min-w-[200px] group relative">

              <img
                src={movie}
                className="rounded transition duration-300 group-hover:scale-110 cursor-pointer"
              />

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <p className="text-white font-semibold">▶ Play</p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Dashboard;