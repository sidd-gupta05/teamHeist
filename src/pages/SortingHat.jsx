import { useState } from "react";
import { Shield, Sparkles, Wand2, Star, RefreshCw } from "lucide-react";

const questions = [
  {
    question: "Which quality do you value most?",
    options: [
      { text: "Bravery", house: "Gryffindor" },
      { text: "Ambition", house: "Slytherin" },
      { text: "Intelligence", house: "Ravenclaw" },
      { text: "Loyalty", house: "Hufflepuff" },
    ],
  },
  {
    question: "Which magical item would you choose?",
    options: [
      { text: "The Invisibility Cloak", house: "Gryffindor" },
      { text: "The Elder Wand", house: "Slytherin" },
      { text: "The Resurrection Stone", house: "Ravenclaw" },
      { text: "A bottomless bag of Galleons", house: "Hufflepuff" },
    ],
  },
  {
    question: "How would you like to be remembered?",
    options: [
      { text: "As a Hero", house: "Gryffindor" },
      { text: "As Great", house: "Slytherin" },
      { text: "As Wise", house: "Ravenclaw" },
      { text: "As Kind", house: "Hufflepuff" },
    ],
  },
];

const houseDetails = {
  Gryffindor: {
    color: "from-red-600 to-amber-600",
    description:
      "Where dwell the brave at heart. Their daring, nerve, and chivalry set Gryffindors apart.",
    icon: Shield,
    accent: "#fbbf24",
  },
  Slytherin: {
    color: "from-emerald-700 to-slate-900",
    description:
      "Those cunning folks use any means to achieve their ends. Ambition and resourcefulness are their traits.",
    icon: Shield,
    accent: "#34d399",
  },
  Ravenclaw: {
    color: "from-blue-700 to-indigo-900",
    description:
      "Where those of wit and learning, will always find their kind. Individualism and wisdom are cherished here.",
    icon: Shield,
    accent: "#60a5fa",
  },
  Hufflepuff: {
    color: "from-yellow-400 to-amber-700",
    description:
      "Where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil.",
    icon: Shield,
    accent: "#fbbf24",
  },
};

export default function SortingHat() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
  });
  const [result, setResult] = useState(null);
  const [isSorting, setIsSorting] = useState(false);

  const handleOptionClick = (house) => {
    const newScores = { ...scores, [house]: scores[house] + 1 };
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    setIsSorting(true);
    setTimeout(() => {
      let maxScore = -1;
      let winningHouse = "";
      for (const house in finalScores) {
        if (finalScores[house] > maxScore) {
          maxScore = finalScores[house];
          winningHouse = house;
        }
      }
      setResult(winningHouse);
      setIsSorting(false);
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({ Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 });
    setResult(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-[#020b0d]/80 backdrop-blur-xl border border-amber-900/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />

        {!result && !isSorting ? (
          <div className="animate-fadeIn">
            <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                <Wand2 size={32} className="text-amber-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black gold-text text-center mb-2">
                The Sorting Hat
              </h1>
              <p className="text-amber-50/40 uppercase tracking-[0.3em] text-xs">
                A Hogwarts Tradition
              </p>
            </div>

            <div className="mb-12">
              <div className="text-xs text-amber-500/60 mb-2 uppercase tracking-widest font-bold">
                Question {currentStep + 1} of {questions.length}
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-amber-500 transition-all duration-500"
                  style={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {questions[currentStep].question}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option.house)}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300 text-left overflow-hidden"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-lg text-amber-50/80 group-hover:text-white transition-colors">
                      {option.text}
                    </span>
                    <Sparkles
                      size={16}
                      className="text-amber-500/0 group-hover:text-amber-500/40 transition-all"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500/0 to-amber-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              ))}
            </div>
          </div>
        ) : isSorting ? (
          <div className="py-20 flex flex-col items-center justify-center animate-pulse">
            <RefreshCw
              size={64}
              className="text-amber-500 animate-spin mb-8"
              strokeWidth={1}
            />
            <h2 className="text-3xl font-bold gold-text animate-bounce">
              Hmm... I see...
            </h2>
            <p className="text-amber-50/40 mt-4 italic">
              Peering into your mind...
            </p>
          </div>
        ) : (
          <div className="animate-fadeIn text-center">
            <div className="mb-8">
              <Star
                size={48}
                className="text-amber-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              />
              <p className="text-amber-50/40 uppercase tracking-[0.4em] text-sm mb-2">
                You belong in...
              </p>
              <h1 className="text-6xl md:text-8xl font-black gold-text mb-6 tracking-tighter">
                {result}
              </h1>
            </div>

            <div
              className={`p-8 rounded-3xl bg-linear-to-br ${houseDetails[result].color} border border-white/10 shadow-2xl mb-10 relative overflow-hidden group`}
            >
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Shield size={240} />
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic relative z-10">
                "{houseDetails[result].description}"
              </p>
            </div>

            <button
              onClick={resetQuiz}
              className="px-8 py-4 rounded-2xl border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <RefreshCw size={18} />
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
