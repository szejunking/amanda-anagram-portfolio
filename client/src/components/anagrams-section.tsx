import { motion } from "framer-motion";
import { Lightbulb, Heart, Compass, Sprout, Users, Sparkles } from "lucide-react";

export default function AnagramsSection() {
  const anagrams = [
    {
      title: "A Mad Ana",
      description: "The creative genius within - sometimes the best ideas come from a touch of beautiful madness. Ana represents the analytical side that brings method to the creativity.",
      icon: Lightbulb,
      color: "amanda-primary",
      tags: ["Creative", "Analytical"],
    },
    {
      title: "Am And A",
      description: "The connector, the bridge-builder. 'Am And A' represents the part of me that brings people together, finding common ground and shared experiences in diversity.",
      icon: Heart,
      color: "amanda-secondary",
      tags: ["Connector", "Empathetic"],
    },
    {
      title: "An Mad A",
      description: "The adventurous spirit that dares to be different. 'An Mad A' embodies the courage to stand out, to challenge conventions and explore uncharted territories of thought.",
      icon: Compass,
      color: "amanda-accent",
      tags: ["Adventurous", "Bold"],
    },
    {
      title: "Dam Ana",
      description: "The strong foundation that holds everything together. Like a dam that channels powerful forces, this aspect represents resilience, strength, and the ability to direct energy purposefully.",
      icon: Sprout,
      color: "purple-500",
      tags: ["Strong", "Resilient"],
    },
    {
      title: "Man Ada",
      description: "The leader who guides with wisdom. 'Man Ada' represents the mentor within, someone who takes charge when needed and helps others discover their own potential.",
      icon: Users,
      color: "green-500",
      tags: ["Leader", "Mentor"],
    },
    {
      title: "And A Ma",
      description: "The nurturing spirit that cares for others. 'And A Ma' embodies the maternal instinct, the protective and caring nature that looks after family, friends, and community.",
      icon: Sparkles,
      color: "pink-500",
      tags: ["Nurturing", "Caring"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="anagrams" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amanda-secondary/10 text-amanda-secondary rounded-full text-sm font-medium mb-4">
            Word Magic
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-amanda-dark mb-6">
            The Many Faces of{" "}
            <span className="text-amanda-primary">Amanda</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the creative possibilities hidden within my name. Each
            anagram tells a different story, reveals a different facet of
            personality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {anagrams.map((anagram, index) => {
            const IconComponent = anagram.icon;
            return (
              <motion.div
                key={anagram.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group bg-gradient-to-br from-${anagram.color}/5 to-${anagram.color}/10 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-16 h-16 bg-${anagram.color} text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent size={24} />
                  </motion.div>
                  <h3 className={`font-playfair text-2xl font-bold text-${anagram.color} mb-4`}>
                    {anagram.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {anagram.description}
                  </p>
                  <div className="flex justify-center space-x-2 text-sm font-medium">
                    {anagram.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`bg-${anagram.color}/10 text-${anagram.color} px-3 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
