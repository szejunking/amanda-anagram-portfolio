import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingLetters = [
    { letter: "A", delay: 0, color: "bg-amanda-primary" },
    { letter: "M", delay: 0.5, color: "bg-amanda-secondary" },
    { letter: "D", delay: 1, color: "bg-amanda-accent" },
  ];

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-amanda-primary/10 via-amanda-secondary/5 to-amanda-accent/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-amanda-primary/10 text-amanda-primary rounded-full text-sm font-medium mb-4">
                Welcome to my world
              </span>
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-amanda-dark mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-amanda-primary to-amanda-secondary bg-clip-text text-transparent">
                  Amanda
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A creative soul who finds magic in words, patterns, and the
                beautiful art of anagrams. Discover how my name transforms into
                countless possibilities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("anagrams")}
                className="px-8 py-4 bg-amanda-primary text-white rounded-lg hover:bg-amanda-primary/90 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                Explore Anagrams
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border-2 border-amanda-primary text-amanda-primary rounded-lg hover:bg-amanda-primary hover:text-white transition-all font-medium"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Creative profile image placeholder with geometric design */}
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 6 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-gradient-to-br from-amanda-primary/20 to-amanda-secondary/20 rounded-3xl"
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -6 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-amanda-secondary/20 to-amanda-accent/20 rounded-3xl"
              />
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-amanda-primary/30 to-amanda-secondary/30 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-8xl font-playfair font-bold">A</div>
              </div>
            </div>

            {/* Floating anagram letters */}
            {floatingLetters.map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { delay: item.delay },
                  scale: { delay: item.delay },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: item.delay,
                  },
                }}
                className={`absolute w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg ${
                  index === 0 ? "-top-4 -left-4" :
                  index === 1 ? "-bottom-4 -right-4" :
                  "top-1/2 -right-8 w-12 h-12"
                }`}
              >
                {item.letter}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("anagrams")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-amanda-primary hover:text-amanda-secondary transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
