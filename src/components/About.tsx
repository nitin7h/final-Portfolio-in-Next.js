import React from "react";

import { GrInstagram } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function About() {
  return (
    <section className="mb-10 p-10 ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-900 capitalize lg:text-3xl ">
          About Me
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-900">
          “ I am Full-Stack Developer, and passionate about creating innovative
          and user-friendly products that meet the needs of businesses and
          individuals alike. With years of learning , I have developed a deep
          understanding of the latest technological trends and best practice.”
        </p>

        <div className="flex justify-center gap-8 mt-8  ">
          <div className="shadow-2xl shadow-black flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group  rounded-xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-slate-700"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Nitin"
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-900 capitalize  ">
              Nitin Kumar
            </h1>

            <p className="mt-2 text-gray-900 capitalize  ">
              Full Stack Developer
            </p>

            <div className="flex mt-3 -mx-2">
              <a
                href="https://www.linkedin.com/in/nitin7h/"
                target="_blank"
                className="mx-2 w-6 h-6 rounded-full flex justify-center items-center bg-gray-900  text-white hover:text-gray-500 "
                aria-label="Reddit"
              >
                <TfiLinkedin />
              </a>
              <a
                href="https://github.com/nitin7h"
                target="_blank"
                className="mx-2 w-6 h-6 rounded-full flex justify-center items-center bg-gray-900  text-white hover:text-gray-500 "
                aria-label="Github"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.instagram.com/nittiin.kumar/"
                target="_blank"
                className="mx-2 w-6 h-6 rounded-full flex justify-center items-center bg-gray-900  text-white hover:text-gray-500 "
                aria-label="Facebook"
              >
                <GrInstagram />
              </a>

              <a
                href="https://twitter.com/Nitin7h"
                target="_blank"
                className="mx-2 w-6 h-6 rounded-full flex justify-center items-center bg-gray-900  text-white hover:text-gray-500 "
                aria-label="Github"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
