import { motion } from 'framer-motion';
import { Code, Database, Laptop, Calculator } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <Code className="w-8 h-8" />,
            skills: ['React.js', 'HTML5', 'CSS3 / Tailwind', 'JavaScript'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Backend & Database',
            icon: <Database className="w-8 h-8" />,
            skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'MongoDB'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Programming & Software',
            icon: <Laptop className="w-8 h-8" />,
            skills: ['Java', 'ERP Software Customization', 'Bug Fixing & Feature Enhancement'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Accounting Skills',
            icon: <Calculator className="w-8 h-8" />,
            skills: ['Accounting Data Entry', 'Invoice & Billing Management', 'E-Way Bill Generation', 'ERP Accounting Operations'],
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
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
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
