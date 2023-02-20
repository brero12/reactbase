import React from "react";
import { HiTerminal, HiUsers } from "react-icons/hi";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <HiUsers className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work History
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.company} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <HiTerminal className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                <a href={testimonial.url} target={"_blank"} rel="noreferrer">
                    <img
                    alt="testimonial"
                    src={testimonial.logo}
                    className="w-20 rounded-full flex-shrink-0 object-cover object-center"
                  /> 
                  </a>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.position}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                    <span className="text-white text-sm">
                      <a href={testimonial.url} target={"_blank"} rel="noreferrer">{testimonial.url}</a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}