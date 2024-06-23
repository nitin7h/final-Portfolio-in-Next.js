"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden lg:h-screen bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className=" absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-yellow-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex justify-center">
          <h2 className="text-xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            “{" "}
            <Typewriter
              words={[
                "Full Stack Developer",
                "Web Developer",
                "Back End Developer",
                "UI/UX Developer",
                "API Developer",
              ]}
              loop={true}
              cursor
              cursorStyle=" "
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={1000}
            />
            ”
          </h2>
        </div>

        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-slate-200 sm:text-2xl sm:leading-9">
            <p>
              “ I am Full-Stack Developer, and passionate about creating
              innovative and user-friendly products that meet the needs of
              businesses and individuals alike. With years of learning, I have
              developed a deep understanding of the latest technological trends
              and best practice.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Nitin_Kumar"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className=" font-bold text-slate-200">Nitin Kumar </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
