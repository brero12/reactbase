import { HiBadgeCheck, HiChip } from "react-icons/hi";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <HiChip className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I have worked on both new projects and maintenance. I worked in different languages and services. I have learned and practiced to offer the best of me in jobs.  I reference here some skills acquired.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2 border-solid border-4" >
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {skill.icon.length ? 
                 <img src={skill.icon} alt="icon" className="bg-white w-6 h-6 flex-shrink-0 mr-4" />
                : <HiBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                }
                <span className="title-font font-medium text-white">
                {skill.name}
                </span>&nbsp;&nbsp;
                {skill.certificate.length ? 
                <a className="text-center" target={"_blank"} rel="noreferrer" href={skill.certificate} > <img className="w-1/4 mx-auto" src={skill.image} alt={skill.name} /></a> : "" }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}