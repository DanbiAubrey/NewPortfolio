import React from "react";
import ProjectCard from "./cards/ProjectCard";

const ProjectData = [
    {
        id:1,
        title:"EMGCN",
        description:"part of DECRA project",
        image:"/images/projects/1.png",
        tag:["DECRA, ML, Data"], 
        gitUrl: "https://github.com/vinhsuhi/EMGCN"
    },
    {
        id:2,
        title:"EMGCN",
        description:"part of DECRA project",
        image:"/images/projects/1.png",
        tag:["DECRA, ML, Data"], 
        gitUrl: "https://github.com/vinhsuhi/EMGCN"
    },
    {
        id:3,
        title:"EMGCN",
        description:"part of DECRA project",
        image:"/images/projects/1.png",
        tag:["DECRA, ML, Data"], 
        gitUrl: "https://github.com/vinhsuhi/EMGCN"
    }
]
const ProjectsSection = () => {
    return <section id="projects" className="text-white mt-10">
        <h2 className="text-4xl font-bold text-white mb-4 opacity-90 text-center mt-10">
                    My Projects
        </h2>
            <div className="grid md:grid-cols-3 gap-8 md-gap-12">{ProjectData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl}/>)}</div>
        </section>
}

export default ProjectsSection;