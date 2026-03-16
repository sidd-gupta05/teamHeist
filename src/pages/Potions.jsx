import { useState } from "react";
import { Beaker } from "lucide-react";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { potionsData } from "../data/potions/potionsData";

export default function Potions() {
  const [searchQuery, setSearchQuery] = useState("");
  const potionMaster = "Snape";

  const filteredPotions = potionsData.filter(
    (potion) =>
      potion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      potion.effect.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs tracking-widest uppercase">
            <Beaker size={14} />
            <span>Potion Master's Archive</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black gold-text mb-6">
            Potions & Elixirs
          </h1>
          <p
            className="text-amber-50/50 max-w-2xl mx-auto italic text-lg"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            "I can teach you how to bottle fame, brew glory, even stopper death
            — if you aren't as big a bunch of dunderheads as I usually have to
            teach."
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
              placeholder="Search potions by name or effect..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-amber-50 focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-amber-50/20"
            />
          </div>
          <button className="filter-btn">
            <SlidersHorizontal size={18} />
            Filter by Difficulty
          </button>
        </div>

        {/* Potions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPotions.map((potion, index) => (
            <div
              key={1}
              className="glass-card-hover p-6 group animate-fadeIn"
              style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${potion.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <Beaker size={26} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-amber-500/60 font-semibold border border-amber-500/20 px-2 py-1 rounded-lg">
                  {potion.difficulty}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {potion.name}
              </h3>
              <p className="text-amber-50/60 text-sm italic mb-6 leading-relaxed">
                "{potion.effect}"
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-amber-500/40 font-bold">
                  <Sparkles size={12} />
                  Ingredients
                </div>
                <div className="flex flex-wrap gap-2">
                  {potion.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-amber-50/70"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
