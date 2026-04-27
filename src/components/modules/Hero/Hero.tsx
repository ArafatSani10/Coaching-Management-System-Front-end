"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from "../../../../public/lotties/Student.json";
import { ArrowRight, UserCircle } from "lucide-react";
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="w-full min-h-[calc(100vh-80px)] flex items-center bg-transparent py-12 md:py-24 overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-3">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    <motion.div
                        className="w-full space-y-8 md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            M@RUF&#39;S ICT CARE
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ার এবং ICT স্কিলস EDU মাষ্টার ট্রেইনার মারুফ স্যারের পরিচালিত
                            ৭২ টি ক্লাস এর HSC ICT ZERO TO HERO অ্যাডভান্সড কোর্স — ফাইনাল পরীক্ষা পর্যন্ত ফ্রি রিভিশন ক্লাস থাকবে।
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <Link href="/admission">
                                <button className="px-7 py-3.5 rounded-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all active:scale-95 flex items-center gap-2">
                                    Online Admission <ArrowRight className="size-4" />
                                </button>
                            </Link>
                            
                            <Link href="/login">
                                <button className="px-7 py-3.5 rounded-lg font-bold border border-input bg-background hover:bg-accent transition-all active:scale-95 flex items-center gap-2">
                                    <UserCircle className="size-5" /> Student Login
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-125"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-10 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
                            <Lottie 
                                animationData={animationData} 
                                loop={true} 
                                className="w-full h-auto" 
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;