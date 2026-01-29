import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github className="w-5 h-5" />,
            url: '#'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            url: '#'
        }
    ];

    return (
        <footer className="bg-gray-900 text-white section-padding !py-12">
            <div className="container-custom">
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-2">Jaspinder Singh</h3>
                        <p className="text-green-400 font-semibold text-lg">Code that Counts. Solutions that Scale.</p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-4"
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-6 border-t border-white/10 w-full"
                    >
                        <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                            © {currentYear} Jaspinder Singh. Made with
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
