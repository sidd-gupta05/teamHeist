import { useState } from "react";
import {
  Shield,
  Flame,
  Droplets,
  Wind,
  Mountain,
  Crown,
  Ghost,
  Home,
  Swords,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { houses } from "../data/houses";

export default function Houses() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const houseFounders = ["Godric", "Helga", "Salazar", "Rowena"];

  const selected = houses.find((h) => h.name === selectedHouse);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <Shield size={20} className="text-amber-400" strokeWidth={1.5} />
          </div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-amber-600/60"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            The Four Houses
          </p>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold gold-text mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Hogwarts Houses
        </h1>
        <div className="glow-divider w-32 mb-4" />
        <p className="text-amber-50/40 max-w-lg">
          Each of the four great houses of Hogwarts represents a different set
          of values and virtues.
        </p>
      </div>

      {/* House Cards Grid */}
      <div className="grid grid-cols-0 md:grid-cols-2 gap-6 mb-8">
        {houses.map((house) => {
          const ElementIcon = house.elementIcon;
          const isSelected = selectedHouse === house.name;
          return (
            <div
              key={house.name}
              className={`house-card ${house.cardClass} p-7 cursor-pointer`}
              onClick={() => setSelectedHouse(isSelected ? null : house.name)}
              style={{
                outline: isSelected ? `2px solid ${house.accent}60` : "none",
                outlineOffset: "2px",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />

              <div className="relative z-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="text-4xl mb-2">{house.emoji}</div>
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {house.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      Founded by {house.founder}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1">
                      <ElementIcon
                        size={12}
                        className="text-white/70"
                        strokeWidth={1.5}
                      />
                      <span className="text-white/70 text-xs">
                        {house.element}
                      </span>
                    </div>
                    {isSelected ? (
                      <ChevronUp
                        size={18}
                        className="text-white/50"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <ChevronDown
                        size={18}
                        className="text-white/50"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                </div>

                {/* Color pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {house.colors.map((color) => (
                    <span
                      key={1}
                      className="px-3 py-1 rounded-full text-xs text-white/80 backdrop-blur-sm"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {color}
                    </span>
                  ))}
                </div>

                {/* Traits */}
                <div className="flex flex-wrap gap-2">
                  {house.traits.map((trait) => (
                    <span
                      key={trait}
                      className="text-xs text-white/60 flex items-center gap-1"
                    >
                      <Star
                        size={8}
                        fill="currentColor"
                        className="opacity-50"
                      />
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected House Details Panel */}
      {selected && (
        <div
          className="animate-fadeIn rounded-2xl border overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${selected.accentLight}, rgba(0,0,0,0.3))`,
            borderColor: selected.border,
            boxShadow: `0 0 40px ${selected.accentLight}`,
          }}
        >
          {/* Panel header */}
          <div
            className="px-8 py-5 border-b flex items-center gap-4"
            style={{ borderColor: selected.border }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: selected.accentLight,
                border: `1px solid ${selected.border}`,
              }}
            >
              <Shield
                size={18}
                style={{ color: selected.accent }}
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: selected.accent,
                }}
              >
                {selected.name}
              </h3>
              <p className="text-amber-50/40 text-xs tracking-wider">
                House Details
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Info list */}
              <div className="space-y-4">
                {[
                  { icon: Crown, label: "Founder", value: selected.founder },
                  { icon: Swords, label: "Head", value: selected.head },
                  { icon: Ghost, label: "Ghost", value: selected.ghost },
                  {
                    icon: Home,
                    label: "Common Room",
                    value: selected.commonRoom,
                  },
                  {
                    icon: selected.elementIcon,
                    label: "Element",
                    value: selected.element,
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: selected.accentLight,
                        border: `1px solid ${selected.border}`,
                      }}
                    >
                      <Icon
                        size={14}
                        style={{ color: selected.accent }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-amber-50/40 text-xs uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-amber-50/80 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Traits & description */}
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{
                    color: selected.accent,
                    fontFamily: "'Cinzel', serif",
                  }}
                >
                  House Traits
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium"
                      style={{
                        background: selected.accentLight,
                        border: `1px solid ${selected.border}`,
                        color: selected.traitColor,
                        fontFamily: "'Cinzel', serif",
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: `1px solid ${selected.border}`,
                  }}
                >
                  <p className="text-amber-50/60 text-sm leading-relaxed italic">
                    "{selected.description}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
