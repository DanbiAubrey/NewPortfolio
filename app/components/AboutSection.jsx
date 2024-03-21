"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <section className="text-white">
         <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative dark:bg-[#fafafa] opacity-90 overflow-hidden">
                <Image src="/images/darnbi_img-removebg-preview.png" 
                    alt="darnbi img" 
                    width={295} 
                    height={295} 
                    className="object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-white mb-4 opacity-90 ">
                    About Me
                </h2>
                <p className="text-xs md:text-lg opacity-90">
                As a PhD candidate at Griffith University, 
                my research focuses on the intricate realms of machine learning, 
                knowledge graph alignment, and recommendation systems. 
                My works are driven by a commitment to advancing theoretical understanding 
                and applying SOTA techniques to real-world challenges. 
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("projects")} active={tab==="projects"}>{" "}Projects{" "}</TabButton>
                </div>
            </div>
        </div></section>
}

export default AboutSection;