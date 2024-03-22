import React from "react";
import ProjectCard from "./cards/PublicationCard";

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
        gitUrl: "https://github.com/vinhsuhi/EMGCN"
    },
]
const PublicationsSection = () => {
    return <section id="publications" className="text-white mt-10">
        <h2 className="text-4xl font-bold text-white mb-4 opacity-90 text-center">
                    My Publications
        </h2>
            <div className="grid md:grid-cols-2 gap-8 md-gap-12">{PublicationDATA.map((publication) => <ProjectCard key={publication.id} title={publication.title} description={publication.description} imgUrl={publication.image} gitUrl={publication.gitUrl}/>)}</div>
        </section>
}

export default PublicationsSection;