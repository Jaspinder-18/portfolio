import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
    return (
        <section id="resume" className="section-padding gradient-bg">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">Resume</h2>
                    <p className="section-subtitle">Download my professional resume</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Web Developer Resume */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className="card text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <FileText className="w-10 h-10" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Developer Resume</h3>
                        <p className="text-gray-600 mb-6">
                            Comprehensive resume highlighting my web development skills, projects, and experience in MERN stack, PHP, and modern web technologies.
                        </p>

                        <button className="btn-primary w-full flex items-center justify-center gap-2">
                            <Download size={20} />
                            Download Web Dev Resume
                        </button>
                    </motion.div>

                    {/* Accounting Resume */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ y: -10 }}
                        className="card text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <FileText className="w-10 h-10" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Accounting Resume</h3>
                        <p className="text-gray-600 mb-6">
                            Detailed resume showcasing my accounting expertise, ERP software experience, and proficiency in accounting operations and data management.
                        </p>

                        <button className="btn-primary w-full flex items-center justify-center gap-2">
                            <Download size={20} />
                            Download Accounting Resume
                        </button>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Both resumes are available in PDF format. Choose the one that best matches your requirements,
                        or download both to get a complete picture of my skills and experience.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
