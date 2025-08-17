import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Users, Shield, Zap, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../component/Header';

export default function Landingpage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            
            <Header/>

            
            < section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900" >
                {/* Background Pattern */}
                < div className="absolute inset-0" >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
                    {/* Subtle floating elements */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div >

                <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
                            <span className="text-teal-600 dark:text-teal-400">
                                Your Digital
                            </span>
                            <br />
                            <span>Marketplace</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Connect buyers and sellers in a seamless e-commerce experience.
                            Vendors upload, customers discover, everyone wins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="rounded-md bg-teal-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500 transform hover:scale-105 shadow-lg"
                            >
                                Get Started
                                <ArrowRight className="inline-block ml-2 h-5 w-5" />
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="rounded-md bg-gray-100 px-8 py-4 text-lg font-medium text-teal-600 transition hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-teal-600/30 dark:border-teal-400/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-teal-600/50 dark:bg-teal-400/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section >

            {/* Services Section - 70% White background with 30% Teal accents */}
            < section id="services" className="py-20 bg-white dark:bg-gray-800" >
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Our <span className="text-teal-600 dark:text-teal-400">Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive solutions for both vendors and customers in our thriving marketplace ecosystem
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Vendor Management",
                                description: "Easy product upload, inventory management, and sales analytics for vendors"
                            },
                            {
                                icon: ShoppingBag,
                                title: "Seamless Shopping",
                                description: "Intuitive browsing, secure payments, and fast delivery for customers"
                            },
                            {
                                icon: Shield,
                                title: "Secure Platform",
                                description: "End-to-end encryption, fraud protection, and secure payment processing"
                            }
                        ].map((service, index) => (
                            <div key={index} className="group bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="inline-flex p-4 rounded-2xl bg-teal-600 dark:bg-teal-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Features Grid - 10% accent colors */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, text: "Lightning Fast" },
                            { icon: Shield, text: "100% Secure" },
                            { icon: Users, text: "24/7 Support" },
                            { icon: Star, text: "5-Star Rated" }
                        ].map((feature, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors duration-300 mb-3">
                                    <feature.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* About Section - 30% Dark background with Teal accents */}
            < section id="about" className="py-20 bg-gray-900 dark:bg-gray-800 text-white" >
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                About Our <span className="text-teal-400">Platform</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                We're revolutionizing e-commerce by creating a seamless marketplace where vendors can easily showcase their products and customers can discover amazing deals. Our platform combines cutting-edge technology with user-friendly design.
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                With thousands of satisfied vendors and millions of happy customers, we're building the future of online shopping, one transaction at a time.
                            </p>

                            <div className="grid grid-cols-3 gap-8 mb-8">
                                {[
                                    { number: "10K+", label: "Active Vendors" },
                                    { number: "1M+", label: "Happy Customers" },
                                    { number: "50K+", label: "Products Listed" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl font-bold text-teal-400 mb-1">{stat.number}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gray-800/50 dark:bg-gray-700/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
                                <div className="space-y-6">
                                    {[
                                        "🚀 Lightning-fast product uploads",
                                        "💳 Secure payment processing",
                                        "📱 Mobile-optimized experience",
                                        "🛡️ Fraud protection included",
                                        "📊 Advanced analytics dashboard"
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3 text-gray-200">
                                            <span className="text-2xl">{feature.split(' ')[0]}</span>
                                            <span className="font-medium">{feature.substring(3)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating elements with teal accents */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact Section - 70% White background */}
            < section id="contact" className="py-20 bg-white dark:bg-gray-800" >
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Ready to join our marketplace? Have questions? We're here to help you succeed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>

                                {[
                                    { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", link: "tel:+15551234567" },
                                    { icon: Mail, title: "Email", info: "hello@marketplace.com", link: "mailto:hello@marketplace.com" },
                                    { icon: MapPin, title: "Address", info: "123 Commerce St, Tech City, TC 12345", link: "#" }
                                ].map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/60 dark:hover:bg-gray-600/60 transition-colors duration-200 group"
                                    >
                                        <div className="bg-teal-600 dark:bg-teal-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-200">
                                            <contact.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">{contact.title}</div>
                                            <div className="text-gray-600 dark:text-gray-300">{contact.info}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 focus:outline-none transition-colors duration-200"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 focus:outline-none transition-colors duration-200"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 focus:outline-none transition-colors duration-200"
                                />
                                <select className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 focus:outline-none transition-colors duration-200">
                                    <option>I'm interested in...</option>
                                    <option>Becoming a Vendor</option>
                                    <option>Customer Support</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 focus:outline-none transition-colors duration-200 resize-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-teal-600 px-5 py-4 font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500 transform hover:scale-105 shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

            {/* Footer - 10% Dark accent */}
            < footer className="bg-gray-900 dark:bg-gray-800 text-white py-12" >
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <a className="block text-teal-400" href="#">
                                <span className="sr-only">Home</span>
                                <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <span className="ml-3 text-xl font-bold">WaveFlow</span>
                        </div>



                    </div >
                </div >
            </footer>
        </div>
    );
}