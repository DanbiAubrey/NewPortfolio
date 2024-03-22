"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="grid grid-cols-3 list-disc pl-2">
                <li>Machine Learning</li>
                <li>Algorithms</li>
                <li>Pytorch</li>
                <li>NLP</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Griffith University</li>
                <li>Honours of Computer Science</li>
                <li>Doctoral of Philosophy</li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <section id ="about"className="text-white">
         <div className="grid grid-cols-2 sm:grid-cols-12 mt-10">
            <div className="col-span-6 place-self-center text-center sm:text-left">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative dark:bg-[#fafafa] opacity-90 overflow-hidden place-self-center">
                    <Image src="/images/darnbi_img-removebg-preview.png" 
                        alt="darnbi img" 
                        width={295} 
                        height={295} 
                        className="object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
                </div>
            </div>
            <div className="col-span-6 place-self-center text-center sm:text-left">
                <div className="mt-4 md:mt-0 text-left fex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4 opacity-90 sm:mt-10">
                        About Me
                    </h2>
                    <p className="text-xs md:text-lg opacity-90">
                        As a PhD candidate at Griffith University, 
                        my research focuses on the intricate realms of machine learning, 
                        knowledge graph alignment, and recommendation systems. 
                        My works are driven by a commitment to advancing theoretical understanding 
                        and applying SOTA techniques to real-world challenges. 
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>{" "}Education{" "}</TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id ===tab).content}</div>
                </div>
            </div>
        </div>
    </section>
}

export default AboutSection;