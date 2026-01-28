import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Edusquare Solutions',
            role: 'Software Developer',
            period: 'June 2015 – Present',
            location: 'Remote',
            responsibilities: [
                'Developed and maintained educational and business websites',
                'Worked on real client projects with production deployment',
                'Built responsive layouts and optimized performance',
                'Fixed bugs and implemented new features'
            ],
            project: {
                name: 'SOSABTI Website',
                url: 'https://sosabti.com/',
                description: 'A responsive educational institute website developed during my role at Edusquare Solutions. Implemented UI sections, improved responsiveness, and maintained site content.'
            }
        },
        {
            company: 'MuktiSoftware',
            role: 'Programmer & Accounting Executive',
            period: 'Previous Experience',
            location: 'Remote',
            responsibilities: [
                'Worked on ERP-based accounting software systems',
                'Performed accounting tasks such as data entry, invoicing, and e-way bill generation',
                'Fixed bugs and added new functional modules to accounting software'
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">My professional journey</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline Line */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-primary/30"></div>
                            )}

                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                                <Briefcase className="w-4 h-4 text-white" />
                            </div>

                            <div className="card ml-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                                        <p className="text-xl text-primary font-semibold">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-medium">{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm font-medium">{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">{resp}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {exp.project && (
                                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                                        <h4 className="font-semibold text-gray-900 mb-2">Project Worked On:</h4>
                                        <p className="font-semibold text-primary mb-1">{exp.project.name}</p>
                                        <a
                                            href={exp.project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600 hover:underline mb-2 inline-block"
                                        >
                                            {exp.project.url}
                                        </a>
                                        <p className="text-gray-700 text-sm">{exp.project.description}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
