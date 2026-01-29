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
            value: 'MCA (Candidate) | BCA (High Honors)'
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
                    <h2 className="section-title">Professional Profile</h2>
                    <p className="section-subtitle">The intersection of Code & Commerce</p>
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
                            I am <span className="font-semibold text-primary">Jaspinder Singh</span>, a seasoned Full Stack Developer and ERP Specialist based in Punjab, India.
                            With a strong academic foundation (BCA, 8.5 CGPA) and advanced studies (MCA), I combine technical precision with business acumen.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Unlike typical developers, I possess deep domain expertise in <span className="font-semibold text-primary">Accounting & ERP Software</span>.
                            This allows me to build applications that are not just visually stunning but also functionally robust for complex financial workflows.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            My stack includes the <span className="font-semibold text-primary">MERN ecosystem (React, Node, MongoDB)</span>, PHP, and SQL.
                            I specialize in translating intricate requirements into seamless, user-friendly digital solutions for businesses and educational institutions.
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
