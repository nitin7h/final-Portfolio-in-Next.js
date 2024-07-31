import React from "react";
import { FaFingerprint, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { LuDatabase } from "react-icons/lu";
import { DiNginx } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineHtml } from "react-icons/md";
import { BiSolidFileHtml } from "react-icons/bi";

import { RiTailwindCssFill } from "react-icons/ri";

import {
  Copy,
  ArrowRight,
  ShoppingCart,
  Database,
  GithubIcon,
  icons,
} from "lucide-react";

const details = [
  {
    title: "Node.js & Express.js",
    icon: <RiNodejsLine size={40} />,
  },
  {
    title: "React.js",
    icon: <GrReactjs size={40} />,
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs size={40} />,
  },
  {
    title: "MongoDB",
    icon: <LuDatabase size={40} />,
  },
  {
    title: "Linux",
    icon: <DiLinux size={40} />,
  },
  {
    title: "Docker",
    icon: <FaDocker size={40} />,
  },
  {
    title: "NGINX",
    icon: <DiNginx size={40} />,
  },

  {
    title: "HTML",
    icon: <BiSolidFileHtml size={40} />,
  },
  {
    title: "Tailwind",
    icon: <RiTailwindCssFill size={40} />,
  },
];
export default function Skills() {
  return (
    <section className="m-10">
      <section className="mx-auto max-w-7xl px-2 lg:px-0 mb-28 mt-36 ">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-950 md:text-xl">
            Skills and Technologies...
          </p>
        </div>

        <div className=" m-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
          {details.map((items, id) => {
            return (
              <div
                key={id}
                className="rounded-md  space-y-3 p-5 shadow-lg shadow-black"
              >
                <div className="flex items-center ">
                  <span className="inline-block  rounded-full bg-gray-100 p-3 text-black">
                    {items.icon}
                  </span>
                  <h1 className="mx-4 text-xl font-semibold capitalize text-black">
                    {items.title}
                  </h1>
                </div>

                {/* <p className="text-sm text-gray-500">
                  Teck Stack -:
                  <br />
                  Node.js ,Express.js React.js & State management with Redux
                  Toolkit
                </p>
                <div className="flex justify-between">
                  <div>
                    <a
                      href="https://github.com/nitin7h/E-Commerce-Website"
                      target="_blank"
                      className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                    >
                      <span className="mx-1">Github</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://e-commerce-nitin.netlify.app/"
                      target="_blank"
                      className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                    >
                      <span className="mx-1">Live</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
