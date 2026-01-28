import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
    const details = [
        {
            icon: <MapPin className="w-6 h-6" />,
            label: 'Location',
            value: 'Punjab, India'
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            label: 'Education',
            value: 'BCA (8.5 CGPA), MCA (Pursuing)'
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            label: 'Freelance Status',
            value: 'Available'
        }
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I am <span className="font-semibold text-primary">Jaspinder Singh</span> from Sri Muktsar Sahib, Punjab.
                            I am a BCA graduate with a CGPA of 8.5 and currently pursuing my MCA degree.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I work as a <span className="font-semibold text-primary">Software Developer</span> and also handle
                            ERP-based accounting systems. My expertise spans across modern web development and enterprise
                            resource planning solutions.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I have hands-on experience in <span className="font-semibold text-primary">MERN stack</span>, PHP,
                            MySQL, Java, and accounting software. I'm passionate about creating efficient, scalable solutions
                            that solve real-world problems.
                        </p>
                    </motion.div>

                    {/* Details Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        {details.map((detail, index) => (
                            <motion.div
                                key={detail.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="card flex items-center gap-4"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    {detail.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">{detail.label}</p>
                                    <p className="text-lg font-semibold text-gray-900">{detail.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
