"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, GraduationCap } from "lucide-react";

const stories = [
    {
        id: 1,
        name: "Arafat Rahman",
        batch: "HSC 2025",
        result: "GPA 5.00 (ICT - A+)",
        comment: "মারুফ স্যারের কাছে আইসিটি পড়ার পর প্রোগ্রামিং আর লজিক নিয়ে সব ভয় কেটে গেছে।",
    },
    {
        id: 2,
        name: "Tanvir Ahmed",
        batch: "HSC 2024",
        result: "GPA 5.00 (ICT - A+)",
        comment: "HSC ICT এর জন্য মারুফ স্যারের জিরো টু হিরো কোর্সটি সেরা ছিল।",
    },
    {
        id: 3,
        name: "Shimul Hasan",
        batch: "HSC 2025",
        result: "GPA 4.80 (ICT - A+)",
        comment: "প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারের কাছে শেখার অভিজ্ঞতা একদম আলাদা।",
    },
    {
        id: 4,
        name: "Emon Hossain",
        batch: "HSC 2024",
        result: "GPA 5.00 (ICT - A+)",
        comment: "আইসিটি কে এত সহজে বুঝানো যায় তা মারুফ স্যারকে না দেখলে জানতাম না।",
    },
    {
        id: 5,
        name: "Tasnim Akter",
        batch: "HSC 2025",
        result: "GPA 5.00 (ICT - A+)",
        comment: "সেরা গাইডলাইন আর লজিক্যাল ক্লাসের জন্য এই আইসিটি কেয়ার-ই সেরা।",
    }
];

const StoryCard = ({ story }: { story: typeof stories[0] }) => (
    <div className="w-87.5 shrink-0 bg-transparent backdrop-blur-xs border rounded-2xl p-6 relative group mx-4 hover:border-[#00baff]/50 transition-all duration-300">
        <Quote className="absolute top-4 right-4 size-8 text-[#00baff]/10 group-hover:text-[#00baff]/20 transition-colors" />
        
        <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-full bg-[#00baff]/10 flex items-center justify-center text-lg font-bold text-[#00baff] border border-[#00baff]/20">
                {story.name[0]}
            </div>
            <div>
                <h3 className="font-bold text-base">{story.name}</h3>
                <p className="text-xs text-muted-foreground">{story.batch}</p>
            </div>
        </div>

        <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
            ))}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
           &quot;{story.comment}&quot;
        </p>

        <div className="pt-3 border-t border-border/50 font-bold text-[#00baff] text-xs tracking-wide">
            {story.result}
        </div>
    </div>
);

const SuccessStories = () => {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-20 text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00baff]/10 border border-[#00baff]/20 text-[#00baff] text-xs font-medium "
                >
                    <GraduationCap className="size-4 animate-bounce" />
                    <span className="uppercase">Success Stories</span>
                </motion.div>

                {/* Main Title with Gradient and Depth */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-3xl md:text-5xl font-semibold max-w-4xl mx-auto text-[#00baff] "
                >
                    Student Success Story
                </motion.h2>

                {/* Sub-headline / Description with better spacing */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl font-medium"
                >
                    Discover how <span className="text-foreground font-bold">ICT Care</span> is empowering students, professionals, and dreamers to learn technology in Bangla — <span className="text-[#00baff]/80">from coding to AI and beyond.</span>
                </motion.p>

                {/* Subtle Divider Line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="h-1.5 bg-[#00baff] mx-auto rounded-full opacity-20"
                />
            </div>

            {/* Marquee Row 1: Left to Right */}
            <div className="flex relative mb-8">
                <motion.div
                    className="flex"
                    animate={{ x: [0, -1900] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...stories, ...stories].map((story, i) => (
                        <StoryCard key={`row1-${i}`} story={story} />
                    ))}
                </motion.div>
            </div>

            {/* Marquee Row 2: Right to Left */}
            <div className="flex relative">
                <motion.div
                    className="flex"
                    animate={{ x: [-1900, 0] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...stories, ...stories].map((story, i) => (
                        <StoryCard key={`row2-${i}`} story={story} />
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default SuccessStories;