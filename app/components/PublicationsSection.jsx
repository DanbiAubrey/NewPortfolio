"use client"
import React, { useState } from "react";
import ProjectCard from "./cards/PublicationCard";
import PublicationTag from "./tags/PubilcationTag";

const PublicationDATA = [
    {
        id:1,
        title:"EMGCN",
        description:"Knowledge graph entity alignment",
        image:"/images/publications/EMGCN.png",
        tag:["ML, Knowledge_graph"], 
        gitUrl: "https://github.com/vinhsuhi/EMGCN"
    },
    {
        id:2,
        title:"ComplexGCN",
        description:"Knowledge graph alignment",
        image:"/images/publications/ComplexGCN.png",
        tag:["ML, Knowledge_graph"], 
        gitUrl: "https://github.com/DanbiAubrey/ComplexGCN"
    },
]
const PublicationsSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    
    return (
        <section id="publications" className="text-white mt-10">
            <h2 className="text-4xl font-bold text-white mb-4 opacity-90 text-center">
                My Publications
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <PublicationTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag==="All"}
                />
                <PublicationTag 
                    onClick={handleTagChange} 
                    name="KG_alignment" 
                    isSelected={tag==="KG_alignment"}
                />
            </div>
            <div className="ml-20 mr-20 grid md:grid-cols-2 gap-20 md-gap-12">
                {PublicationDATA.map((publication) => (
                <ProjectCard key={publication.id} 
                title={publication.title}
                description={publication.description} 
                imgUrl={publication.image} 
                gitUrl={publication.gitUrl}
                />
                ))}
            </div>
        </section>
    )
}

export default PublicationsSection;