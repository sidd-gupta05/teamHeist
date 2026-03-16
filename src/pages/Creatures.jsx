import { useState } from "react";
import { PawPrint, Search, SlidersHorizontal, Info } from "lucide-react";
import { creaturesData } from "../data/creaturesData";

export default function Creatures() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCreatures = creaturesData.filter(
    (creature) =>
      creature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creature.habitat.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs tracking-widest uppercase">
            <PawPrint size={14} />
            <span>Magizoology Department</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black gold-text mb-6">
            Magical Creatures
          </h1>
          <p
            className="text-amber-50/50 max-w-2xl mx-auto italic text-lg"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            "Fascinating creatures, aren't they? If you know how to handle
            them."
          </p>
        </div>

        {/* Search and Filter */}
        <div
          className="flex flex-col md:flex-row gap-4 mb-12 animate-fadeIn"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500/40"
              size={18}
            />
            <input
              type="text"
              placeholder="Search creatures by name or habitat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-amber-50 focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-amber-50/20"
            />
          </div>
          <button className="filter-btn">
            <SlidersHorizontal size={18} />
            Filter by Ministry Class
          </button>
        </div>

        {/* Creatures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreatures.map((creature, index) => (
            <div
              key={creature.id}
              className="glass-card-hover group animate-fadeIn overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
            >
              {/* <div className={`h-3 bg-linear-to-r ${creature.color}`} /> */}
              <div className="relative h-72 overflow-hidden group/img">
                <img
                  src={creature.image}
                  alt={creature.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#020b0d] to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col h-1/3">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {creature.name}
                  </h3>
                </div>

                <p className="text-amber-50/70 text-base leading-relaxed mb-8 flex-1">
                  {creature.description}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-amber-50/40 uppercase tracking-wider">
                    <Info size={14} className="text-amber-500/50" />
                    {creature.habitat}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
