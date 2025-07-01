import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "amanda@example.com",
      href: "mailto:amanda@example.com",
      primary: true,
    },
    {
      icon: Phone,
      label: "+1 (234) 567-8900",
      href: "tel:+1234567890",
      primary: false,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 bg-amanda-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-amanda-primary/20 text-amanda-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-6">
            Let's Create Something{" "}
            <span className="text-amanda-primary">Amazing</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're interested in wordplay, creative projects, or just
            want to say hello, I'd love to hear from you. Let's rearrange some
            letters and see what magic we can create together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-8 py-4 rounded-lg transition-all font-medium ${
                  method.primary
                    ? "bg-amanda-primary hover:bg-amanda-primary/90 text-white"
                    : "border border-gray-600 hover:border-amanda-primary hover:text-amanda-primary"
                }`}
              >
                <IconComponent size={20} />
                <span>{method.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="w-12 h-12 bg-gray-800 hover:bg-amanda-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                title={social.label}
              >
                <IconComponent size={20} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
