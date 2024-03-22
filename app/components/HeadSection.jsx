"use client";
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const HeadSection = () => {
    return (
    <section>
        <div className="grid grid-cols-2 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:tet-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500">Hello, I'm {}</span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Danielle',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'PhD Candidate',
                            1000,
                            'Data Scientist',
                            1000,
                            'Machine Learning Engineer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> I am a PhD candidate at Griffith University, deeply passionate about designing machine learning-based 
                algorithms and models to enhance data-driven downstream and upstream applications. 
                My latest research focuses on knowledge graph entity alignment and developing recommendation systems based on knowledge graphs.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-6 bg-gradient-to-br from-green-500 via-yellow-500 to-pink-500 bg-white hover:bg-slate-800 text-white">Hire Me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500 via-yellow-500 to-pink-500 mb-6 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] mt-4 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative opacity-100">
                <Image 
                    src="/images/danielle_photo.png"
                    alt="danielle img"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                />
            </div> 
        </div>
    </div>
    </section>
    );
};

export default HeadSection;