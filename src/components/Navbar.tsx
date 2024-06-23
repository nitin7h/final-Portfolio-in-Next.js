"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Services",
    href: "/services",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 w-full bg-slate-950 top-0">
      <div className="text-slate-100 mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <div className="ml-2 mt-2 ">
            <span className="relative inline-block">
              <Image
                className="h-10 w-10 rounded-full border-2 border-slate-200"
                src="https://images.pexels.com/photos/21050507/pexels-photo-21050507/free-photo-of-a-woman-with-an-umbrella-and-a-black-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Nitin_Kumar"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
            </span>
          </div>

          <span className="font-bold">Nitin</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-slate-100 hover:text-slate-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" text-2xl hidden lg:block hover:cursor-pointer">
          <Link href={"https://t.me/nitin19aug"} target="_blank">
            <MdOutlineMarkUnreadChatAlt />
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <div className="ml-2 mt-2 ">
                      <span className="relative inline-block">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src="https://images.pexels.com/photos/21050507/pexels-photo-21050507/free-photo-of-a-woman-with-an-umbrella-and-a-black-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                          alt="Nitin_Kumar"
                        />
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                      </span>
                    </div>
                    <span className="font-bold">Nitin</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-slate-500"
                      >
                        <span className="ml-3 text-base font-medium text-slate-100">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex justify-center hover:cursor-pointer text-2xl mt-4 w-full rounded-md  px-3 py-2  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  <Link href={"https://t.me/nitin19aug"} target="_blank">
                    <MdOutlineMarkUnreadChatAlt />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
