import { useState, useEffect } from "react";
import {
  Users,
  LayoutGrid,
  GraduationCap,
  BookOpen,
  Loader2,
  Search,
} from "lucide-react";
import CharacterCard from "../components/CharacterCard";

const filters = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "students", label: "Students", icon: GraduationCap },
  { key: "staff", label: "Staff", icon: BookOpen },
];

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.slice(0, 24));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching characters:", err);
        setLoading(false);
      });
  }, []);

  const filteredCharacters = characters.filter((char) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "students" && char.hogwartsStudent) ||
      (filter === "staff" && char.hogwartsStaff);

    const matchesSearch = char.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-5">
        <Loader2
          size={42}
          className="text-amber-500 animate-spin"
          strokeWidth={1.5}
        />
        <p
          className="text-amber-400/70 text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Summoning the Wizards...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Users size={20} className="text-amber-400" strokeWidth={1.5} />
            </div>
            <p
              className="text-xs uppercase tracking-[0.25em] text-amber-600/60"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Wizarding Registry
            </p>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold gold-text mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Magical Characters
          </h1>
          <div className="glow-divider w-32 mb-4" />
          <p className="text-amber-50/40 max-w-lg">
            Browse the complete registry of witches, wizards, and magical beings
            from the wizarding world.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500/40"
            size={18}
          />
          <input
            type="text"
            placeholder="Search characters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-amber-50 focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-amber-50/20 text-sm"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`filter-btn flex items-center gap-2 ${filter === key ? "active" : ""}`}
          >
            <Icon size={14} strokeWidth={1.5} />
            {label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2 text-xs text-amber-50/30">
          <span style={{ fontFamily: "'Cinzel', serif" }}>
            {filteredCharacters.length} entries
          </span>
        </div>
      </div>

      {/* Characters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredCharacters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="text-center py-20">
          <Users
            size={36}
            className="text-amber-500/20 mx-auto mb-4"
            strokeWidth={1}
          />
          <p
            className="text-amber-50/30"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            No characters found
          </p>
        </div>
      )}
    </div>
  );
}
