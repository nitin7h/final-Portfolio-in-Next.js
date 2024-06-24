import React from "react";

import { Database, GithubIcon, LockIcon } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { IoFingerPrintOutline } from "react-icons/io5";
import { GrVmMaintenance } from "react-icons/gr";
const features = [
  {
    name: "Web Development",
    description:
      " Empower your business with tailor-made web applications designed to streamline processes, enhance productivity, and deliver exceptional user experiences. Whether you need a customer relationship management (CRM) system, project management tool,or online booking platform, I'll develop a scalable and robust solution that meets your specific requirements.",
    icon: CgWebsite,
  },
  {
    name: "API Development",
    description:
      "Unlock the potential of your web applications with custom API development. I specialize in creating RESTful APIs that enable seamless communication between different systems and platforms, allowing you to extend functionality, integrate third-party services, and build powerful, interconnected applications.",
    icon: LockIcon,
  },
  {
    name: " Website Maintenance and Support",
    description:
      "Ensure your website remains secure, up-to-date, and running smoothly with ongoing maintenance and support services. From software updates and security patches to performance optimization and troubleshooting, I'll take care of all aspects of website maintenance so you can focus on your core business activities.",

    icon: GrVmMaintenance,
  },
  {
    name: "Database Management",
    description:
      " Ensure the reliability, security, and performance of your data with expert database management services. From designing database schemas to optimizing queries and ensuring data integrity, I'll help you leverage the full potential of your databases to support your application's requirements and scalability. ",
    icon: IoFingerPrintOutline,
  },
];
export default function Services() {
  return (
    <section className="m-10">
      <section className="mx-auto max-w-7xl px-2 lg:px-0 mb-28 mt-36 ">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-950 md:text-xl">
            Whether you&#39;re a small business owner, entrepreneur, or
            established enterprise, I&#39;m here to help you succeed in the
            digital world. Get in touch today to discuss your project
            requirements, and let&#39;s collaborate to bring your vision to
            life.
          </p>
        </div>

        <div className=" mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <CgWebsite size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              Web Development
            </h1>
            <p className="text-sm text-gray-500">
              Empower your business with tailor-made web applications designed
              to streamline processes, enhance productivity, and deliver
              exceptional user experiences. Whether you need a customer
              relationship management (CRM) system, project management tool, or
              online booking platform, I&#39;ll develop a scalable and robust
              solution that meets your specific requirements.
            </p>
            {/* <div className="flex justify-between">
                <div>
                  <a
                    href="#"
                    className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                  >
                    <span className="mx-1">Github</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                  >
                    <span className="mx-1">Live</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div> */}
          </div>
          {/* End  */}
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <Database size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              Database Management
            </h1>
            <p className="text-sm text-gray-500">
              Ensure the reliability, security, and performance of your data
              with expert database management services. From designing database
              schemas to optimizing queries and ensuring data integrity,
              I&#39;ll help you leverage the full potential of your databases to
              support your application&#39;s requirements and scalability.
            </p>
          </div>
          {/* End  */}
          {/* start  */}
          <div className=" space-y-3 p-5 shadow-2xl shadow-black">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <GrVmMaintenance size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              Website Maintenance and Support
            </h1>
            <p className="text-sm text-gray-500">
              Ensure your website remains secure, up-to-date, and running
              smoothly with ongoing maintenance and support services. From
              software updates and security patches to performance optimization
              and troubleshooting, I&#39;ll take care of all aspects of website
              maintenance so you can focus on your core business activities.
            </p>
          </div>
          {/* End  */}
        </div>
      </section>
    </section>
  );
}
