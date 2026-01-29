import { motion } from 'framer-motion';
import { Download, FileText, Code, Database, FileSpreadsheet } from 'lucide-react';

const Resume = () => {
    const resumes = [
        {
            title: 'Full Professional Profile',
            description: 'Comprehensive overview combining my software engineering skills with accounting domain expertise.',
            link: '/resume/Jaspinder_Singh_Full_Profile.pdf',
            icon: <FileText className="w-10 h-10" />,
            gradient: 'from-purple-500 to-indigo-600',
            btnText: 'Download Full CV'
        },
        {
            title: 'Web Developer Specialist',
            description: 'Focused resume highlighting technical stack, MERN projects, and software development history.',
            link: '/resume/Jaspinder_Singh_Web_Developer.pdf',
            icon: <Code className="w-10 h-10" />,
            gradient: 'from-blue-500 to-cyan-600',
            btnText: 'View Dev Resume'
        },
        {
            title: 'Accounting & Data Entry',
            description: 'Specialized profile showcasing ERP experience, data accuracy, and financial workflow management.',
            link: '/resume/Jaspinder_Singh_Accounting_ERP.pdf',
            icon: <FileSpreadsheet className="w-10 h-10" />,
            gradient: 'from-green-500 to-teal-600',
            btnText: 'View Accounting Resume'
        }
    ];

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
                    <h2 className="section-title">Resume & CV</h2>
                    <p className="section-subtitle">Select the profile that best fits your hiring needs</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {resumes.map((resume, index) => (
                        <motion.div
                            key={resume.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card text-center flex flex-col h-full"
                        >
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${resume.gradient} text-white flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                {resume.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{resume.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                {resume.description}
                            </p>

                            <a
                                href={resume.link}
                                download={resume.title.replace(/\s+/g, '_') + '.pdf'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full flex items-center justify-center gap-2 mt-auto"
                            >
                                <Download size={20} />
                                {resume.btnText}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 max-w-2xl mx-auto italic">
                        All documents are hosted securely. Click to view or download via Google Drive.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
