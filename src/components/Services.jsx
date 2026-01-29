import { motion } from 'framer-motion';
import { Globe, Code, Wrench, Calculator, FileSpreadsheet, Package } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Globe className="w-10 h-10" />,
            title: 'Full Stack Web Architecture',
            description: 'Development of robust, scalable web applications using industry-standard technologies and best practices.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Code className="w-10 h-10" />,
            title: 'MERN Stack Engineering',
            description: 'High-performance Single Page Applications (SPAs) built with React, Node.js, and MongoDB.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Globe className="w-10 h-10" />,
            title: 'Dynamic PHP Solutions',
            description: 'Custom server-side rendering and database management for content-heavy dynamic websites.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Wrench className="w-10 h-10" />,
            title: 'System Optimization & Fixes',
            description: 'Critical debugging, performance tuning, and legacy code refactoring for existing applications.',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            icon: <Calculator className="w-10 h-10" />,
            title: 'Financial Data Management',
            description: 'Precision-focused handling of sensitive accounting data, ensuring integrity and accuracy.',
            gradient: 'from-teal-500 to-blue-500'
        },
        {
            icon: <FileSpreadsheet className="w-10 h-10" />,
            title: 'Automated Billing Systems',
            description: 'Integration and management of digital invoicing and E-Way bill compliance workflows.',
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            icon: <Package className="w-10 h-10" />,
            title: 'Custom ERP Solutions',
            description: 'Tailored modifications and module development for enterprise resource planning software.',
            gradient: 'from-rose-500 to-pink-500'
        }
    ];

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">Value Proposition</h2>
                    <p className="section-subtitle">How I can elevate your business</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="card group cursor-pointer"
                        >
                            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
