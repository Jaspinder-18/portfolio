import { motion } from 'framer-motion';
import { Code, Database, Laptop, Calculator } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Engineering',
            icon: <Code className="w-8 h-8" />,
            skills: ['React.js Architecture', 'HTML5 / Semantic Web', 'Tailwind CSS Design Systems', 'Advanced JavaScript (ES6+)'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Backend & Data Architecture',
            icon: <Database className="w-8 h-8" />,
            skills: ['Node.js & Express API', 'PHP Service Logic', 'MySQL Relational Design', 'MongoDB Scalable Stores'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Software & Logic Design',
            icon: <Laptop className="w-8 h-8" />,
            skills: ['Java Object-Oriented Programming', 'ERP Module Customization', 'Algorithmic Bug Fixing', 'System Optimization'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Financial Domain Expertise',
            icon: <Calculator className="w-8 h-8" />,
            skills: ['Accounting Workflow Automation', 'Digital Invoicing Systems', 'E-Way Bill Compliance', 'Enterprise Resource Planning (ERP)'],
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <section id="skills" className="section-padding gradient-bg">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">Technical Arsenal</h2>
                    <p className="section-subtitle">Expertise across the full stack</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-4 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                            </div>

                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <p className="text-gray-700 font-medium">{skill}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
