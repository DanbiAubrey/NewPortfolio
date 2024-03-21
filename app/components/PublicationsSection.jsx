import React from "react";
import Image from "next/image";

const PublicationSection = () => {
    return <section className="text-white">
         <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="overflow-hidden rounded-xl w-[500px] h-[300px]">
                <Image src="/images/EMGCN.png" width={400} height={400} className="w-full h-full object-cover"/>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-white mb-4 opacity-90">
                    Publications
                </h2>
                <p className="text-xs md:text-lg opacity-90">
                We propose a novel framework that performs an unsupervised
                entity alignment for cross-lingual KGs with no prior
                information. The framework is built on top of a multiorder
                embedding model that combines both relation and
                attribute information and leverages rarely used properties
                of the GCN to meet the consistency constraints.
                </p>
                <div className="flex flex-row mt-8">
                    <span className="mr-3 fond-semibold hover:text-white text-[#ADB7BE] opacity-90">EMGCN</span>
                    <span className="mr-3 fond-semibold hover:text-white text-[#ADB7BE] opacity-90">ComplexGCN</span>
                </div>
            </div>
        </div></section>
}

export default PublicationSection;