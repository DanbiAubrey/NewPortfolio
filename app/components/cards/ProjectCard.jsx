import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({imgUrl, title, description, gitUrl}) => {
    return(
        <div className="mt-10">
            <div className="relative h-52 md:h-72 rounded-t-xl group" 
            style={{background: `url(${imgUrl})`, backgroundSize: "auto 100%"}}
            >
                <div className="overlay items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:white"></CodeBracketIcon>
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="font-semibold text-xl mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">description</p>
            </div>
        </div>
    )
}

export default ProjectCard;