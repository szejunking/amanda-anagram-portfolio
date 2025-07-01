import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="font-playfair font-bold text-xl text-white mb-4 md:mb-0">
            Amanda
          </div>
          <div className="text-sm text-center md:text-right">
            © 2024 Amanda. Crafted with creativity and wordplay. All anagrams original.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
