import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { number: "50+", label: "Anagrams Created" },
    { number: "100+", label: "Projects Completed" },
  ];

  const skills = [
    { name: "Creative Writing", color: "amanda-primary" },
    { name: "Design", color: "amanda-secondary" },
    { name: "Wordplay", color: "amanda-accent" },
    { name: "Problem Solving", color: "green-500" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-amanda-primary/10 text-amanda-primary rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-amanda-dark mb-6">
              More Than Just{" "}
              <span className="text-amanda-primary">Letters</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                My fascination with anagrams began in childhood when I discovered
                that rearranging letters could create entirely new meanings. This
                love for wordplay evolved into a deeper appreciation for
                creativity, pattern recognition, and the hidden connections that
                exist all around us.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                As a creative professional, I bring this same perspective to
                everything I do - finding innovative solutions by looking at
                problems from different angles, much like rearranging letters to
                form new words with fresh meanings.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Whether I'm working on design projects, writing content, or
                solving complex challenges, I approach each task with curiosity
                and the belief that there's always another way to arrange the
                pieces for a better outcome.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 grid grid-cols-2 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.2, type: "spring" }}
                    className={`text-3xl font-bold ${
                      index === 0 ? "text-amanda-primary" : "text-amanda-secondary"
                    } mb-2`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Creative workspace placeholder */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl shadow-2xl w-full h-96 bg-gradient-to-br from-amanda-primary/20 to-amanda-secondary/20 flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <div className="text-6xl font-playfair font-bold mb-4">A</div>
                  <p className="text-lg">Creative Workspace</p>
                </div>
              </motion.div>

              {/* Skills overlay */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs"
              >
                <h4 className="font-semibold text-amanda-dark mb-3">
                  Skills & Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`bg-${skill.color}/10 text-${skill.color} px-3 py-1 rounded-full text-sm`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
