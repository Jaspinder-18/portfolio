import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'MuktiSoftware – Accounting Software Platform',
            liveLink: 'https://muktisoftware.com/',
            description: 'MuktiSoftware is an accounting software platform where users can download ERP-based accounting solutions. I actively worked on software maintenance, bug fixing, feature enhancements, and accounting workflows including invoicing and e-way bills.',
            contributions: [
                'Added new files and modules in accounting software',
                'Fixed functional and calculation-related bugs',
                'Supported accounting processes through technical improvements'
            ],
            techStack: ['ERP Software', 'Accounting Systems', 'Programming & Debugging'],
            gradient: 'from-blue-500 to-purple-600'
        },
        {
            title: 'SOSABTI Educational Website',
            liveLink: 'https://sosabti.com/',
            description: 'An educational institute website developed while working at Edusquare Solutions. I contributed to frontend development, content structure, responsiveness, and overall site improvements.',
            contributions: [],
            techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            gradient: 'from-green-500 to-teal-600'
        },
        {
            title: 'Alumni Management & Blogging System',
            liveLink: null,
            description: 'A web-based alumni management system with admin-controlled approval. Only approved users can log in and publish blogs.',
            contributions: [
                'Admin approval system',
                'Secure login & registration',
                'Blogging functionality'
            ],
            techStack: ['PHP', 'MySQL'],
            gradient: 'from-orange-500 to-red-600'
        },
        {
            title: 'Library Management System',
            liveLink: null,
            description: 'A Java-based desktop application for managing library books, users, and issue/return records.',
            contributions: [],
            techStack: ['Java', 'OOP Concepts'],
            gradient: 'from-pink-500 to-rose-600'
        }
    ];

    return (
        <section id="projects" className="section-padding gradient-bg">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">Real-world applications I've built</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card flex flex-col h-full"
                        >
                            {/* Project Header */}
                            <div className={`p-6 rounded-lg bg-gradient-to-br ${project.gradient} text-white mb-6 -m-6 mb-6`}>
                                <div className="flex items-start justify-between">
                                    <Code2 className="w-10 h-10 mb-4" />
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                                            aria-label="View live project"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white/90 hover:text-white hover:underline inline-block"
                                    >
                                        {project.liveLink}
                                    </a>
                                )}
                            </div>

                            {/* Project Description */}
                            <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

                            {/* Key Contributions */}
                            {project.contributions.length > 0 && (
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                                    <ul className="space-y-1">
                                        {project.contributions.map((contribution, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                                <p className="text-sm text-gray-700">{contribution}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div className="mt-auto pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
