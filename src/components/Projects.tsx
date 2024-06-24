import React from "react";
import { FaFingerprint, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";

import {
  Copy,
  ArrowRight,
  ShoppingCart,
  Database,
  GithubIcon,
} from "lucide-react";
export default function Projects() {
  return (
    <section className="m-10">
      <section className="mx-auto max-w-7xl px-2 lg:px-0 mb-28 mt-36 ">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-950 md:text-xl">
            I&#39;d like to share some of my key projects that highlight my
            skills and experience.
          </p>
        </div>

        <div className=" mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <ShoppingCart size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              E-Commerce Website
            </h1>
            <h1 className="text-sm font-semibold capitalize text-black">
              State management with Redux Toolkit
            </h1>
            <p className="text-sm text-gray-500">
              Teck Stack -:
              <br />
              Node.js ,Express.js React.js & State management with Redux Toolkit
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
            </div>
          </div>
          {/* End  */}
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <FaFingerprint size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              Login & Signup
            </h1>
            <h1 className="text-sm font-semibold capitalize text-black">
              Login & Signup with JWT Verification
            </h1>
            <p className="text-sm text-gray-500">
              Teck Stack - :
              <br /> Node.js, Express.js, React.js & MongoDB
            </p>
            <div className="flex justify-between">
              <div>
                <a
                  href="https://github.com/nitin7h/JWT-Verification"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Github</span>
                  <ArrowRight size={16} />
                </a>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/1k5zDDSh4ab5bXZ9Jf8enVkxPoXVAE5hC/view"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Live</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <FaTelegramPlane size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              Telegram Bot
            </h1>
            <h1 className="text-sm font-semibold capitalize text-black">
              Integrated with Telegram
            </h1>
            <p className="text-sm text-gray-500">
              Teck Stack - :
              <br />
              Java SCript , Telegram API, Node.js & Express.js
            </p>
            <div className="flex justify-between">
              <div>
                <a
                  href="https://github.com/nitin7h/Telegram-bot"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Github</span>
                  <ArrowRight size={16} />
                </a>
              </div>
              <div>
                <a
                  href="https://t.me/ChatbotNode_bot"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Live</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <Database size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              CRUD operation in MongoDB
            </h1>
            <h1 className="text-sm font-semibold capitalize text-black">
              Manipulate data through Node.js
            </h1>
            <p className="text-sm text-gray-500">
              Teck Stack -
              <br />
              Mongoose, React.js, Node.js & Express.js
            </p>
            <div className="flex justify-between">
              <div>
                <a
                  href="https://github.com/nitin7h/CRUD-in-MongoDB"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Github</span>
                  <ArrowRight size={16} />
                </a>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/17RQ7AQShNm6_VkW4fUHDlyJD0zAClAGi/view"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Live</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <SiBlockchaindotcom size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              Blockchain
            </h1>
            <h1 className="text-sm font-semibold capitalize text-black">
              Blockchain
            </h1>
            <p className="text-sm text-gray-500">
              Teck Stack -
              <br />
              Node.js, Express.js and React.js
            </p>
            <div className="flex justify-between">
              <div>
                <a
                  href="https://github.com/nitin7h/Blockchain"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Github</span>
                  <ArrowRight size={16} />
                </a>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/14V02264n1goUp-Ykb7Qcz0uAOju1GHwU/view"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Live</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          {/* End  */}
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <MdOutlineMarkUnreadChatAlt size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              Chat Application
            </h1>
            <h1 className="text-sm font-semibold capitalize text-black">
              Real time chat with Socket.io
            </h1>
            <p className="text-sm text-gray-500">
              Teck Stack -
              <br />
              Socket.io, React.js, Node.js & Express.js
            </p>
            <div className="flex justify-between">
              <div>
                <a
                  href="https://github.com/nitin7h/chat-application"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Github</span>
                  <ArrowRight size={16} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/nitin7h/chat-application"
                  target="_blank"
                  className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                >
                  <span className="mx-1">Live</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          {/* End  */}
        </div>
      </section>
    </section>
  );
}
