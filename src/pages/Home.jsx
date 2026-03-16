import { Link } from "react-router-dom";
import {
  Users,
  Sparkles,
  Shield,
  ArrowRight,
  Star,
  BookOpen,
  Wand2,
  Beaker,
  PawPrint,
} from "lucide-react";
import features from "../data/features";

const stats = [
  { value: "200+", label: "Characters", icon: Users },
  { value: "200+", label: "Spells", icon: Wand2 },
  { value: "4", label: "Houses", icon: Shield },
  { value: "7", label: "Books", icon: BookOpen },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Daily Prophet News Ticker */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 py-2 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite] hover:pause">
          {[
            "BREAKING: Gringotts announces new anti-Thievery measures",
            "THE DAILY PROPHET: Quidditch World Cup tickets on sale now",
            "WEATHER: Sudden rain of frogs expected in Ottery St. Catchpole",
            "WITCH WEEKLY: Gilderoy Lockhart releases new autobiography 'Who Am I?'",
            "WIZARDING NEWS: Floo Network maintenance scheduled for Sunday",
          ].map((news, i) => (
            <div key={i} className="flex items-center gap-4 mx-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">
                Notice
              </span>
              <span
                className="text-sm text-amber-50/60 font-medium italic"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                {news}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-600/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

        {/* Top badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400/80 text-sm backdrop-blur-sm">
          <Star size={12} fill="currentColor" />
          <span
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.15em" }}
          >
            The Wizarding World Archive
          </span>
          <Star size={12} fill="currentColor" />
        </div>

        {/* Main heading */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          <span className="gold-text">Hogwarts</span>
        </h1>

        <div className="glow-divider w-48 mx-auto mb-6" />

        <p
          className="text-lg md:text-2xl mb-4 text-amber-200/80 max-w-xl tracking-wider uppercase"
          style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.3em" }}
        >
          School of Witchcraft
        </p>

        <p
          className="text-base md:text-lg text-amber-50/50 max-w-2xl mb-12 leading-relaxed"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          Step beyond the veil and into the enchanted world of Harry Potter.
          Explore hundreds of characters, master powerful spells, and discover
          the legendary houses that shaped wizarding history.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            to="/characters"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #d97706, #f59e0b, #d97706)",
              boxShadow:
                "0 0 30px rgba(217,119,6,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.08em",
            }}
          >
            <Wand2 size={18} strokeWidth={1.5} />
            Explore Now
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
          <Link
            to="/houses"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400/50"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.08em" }}
          >
            <Shield size={18} strokeWidth={1.5} />
            Find Your House
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Icon
                  size={14}
                  className="text-amber-500/60"
                  strokeWidth={1.5}
                />
                <span
                  className="text-2xl font-bold gold-text"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {value}
                </span>
              </div>
              <span className="text-xs text-amber-50/40 tracking-widest uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="glow-divider max-w-4xl mx-auto mb-20" />

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold gold-text mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Explore the Archive
          </h2>
          <p className="text-amber-50/50 text-lg max-w-xl mx-auto">
            Every spell, every character, every secret of Hogwarts — catalogued
            and waiting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link to={feature.path} className="group block">
                <div
                  className="relative h-full rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradient.split(" ")[1]} 0%, transparent 100%)`,
                    boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 40px ${feature.glow}`;
                    e.currentTarget.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 24px rgba(0,0,0,0.3)`;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-60`}
                  />

                  <div className="relative z-10 p-8 flex flex-col h-full min-h-[280px]">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `rgba(255,255,255,0.06)`,
                        border: `1px solid ${feature.accent}30`,
                        boxShadow: `0 0 20px ${feature.glow}`,
                      }}
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.5}
                        style={{ color: feature.accent }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p
                        className="text-xs uppercase tracking-[0.25em] mb-1 opacity-60"
                        style={{ color: feature.accent }}
                      >
                        {feature.subtitle}
                      </p>
                      <h3
                        className="text-2xl font-bold text-white mb-3"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className="flex items-center gap-2 mt-6 text-sm font-medium"
                      style={{ color: feature.accent }}
                    >
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Explore
                      </span>
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div
          className="relative p-10 rounded-3xl border border-amber-700/20 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(120,70,0,0.1), rgba(0,20,30,0.4))",
            boxShadow: "0 0 60px rgba(120,70,0,0.08)",
          }}
        >
          <div
            className="absolute top-4 left-8 text-amber-600/20 text-8xl"
            style={{ fontFamily: "serif" }}
          >
            "
          </div>
          <div
            className="absolute bottom-4 right-8 text-amber-600/20 text-8xl"
            style={{ fontFamily: "serif" }}
          >
            "
          </div>
          <Sparkles
            size={24}
            className="text-amber-500/40 mx-auto mb-6"
            strokeWidth={1.5}
          />
          <p
            className="text-xl md:text-2xl text-amber-200/80 italic leading-relaxed mb-6"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Happiness can be found even in the darkest of times,
            <br />
            if one only remembers to turn on the light.
          </p>
          <div className="glow-divider w-24 mx-auto mb-4" />
          <p
            className="text-amber-600/70 text-sm tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            — Albus Dumbledore
          </p>
        </div>
      </section>
    </div>
  );
}
