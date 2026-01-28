import { motion } from 'framer-motion';
import { Globe, Code, Wrench, Calculator, FileSpreadsheet, Package } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Globe className="w-10 h-10" />,
            title: 'Full Stack Web Development',
            description: 'End-to-end web application development using modern technologies and best practices.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Code className="w-10 h-10" />,
            title: 'MERN Stack Applications',
            description: 'Building scalable applications with MongoDB, Express.js, React, and Node.js.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Globe className="w-10 h-10" />,
            title: 'PHP & MySQL Websites',
            description: 'Dynamic websites and web applications using PHP and MySQL database.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Wrench className="w-10 h-10" />,
            title: 'Website Bug Fixing & Maintenance',
            description: 'Identifying and resolving bugs, optimizing performance, and maintaining websites.',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            icon: <Calculator className="w-10 h-10" />,
            title: 'Accounting Data Entry',
            description: 'Accurate and efficient accounting data entry services for businesses.',
            gradient: 'from-teal-500 to-blue-500'
        },
        {
            icon: <FileSpreadsheet className="w-10 h-10" />,
            title: 'Invoice & E-Way Bill Management',
            description: 'Professional invoice generation and e-way bill management services.',
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            icon: <Package className="w-10 h-10" />,
            title: 'ERP Software Support',
            description: 'Customization, maintenance, and support for ERP accounting software systems.',
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
                    <h2 className="section-title">Services</h2>
                    <p className="section-subtitle">What I can do for you</p>
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
