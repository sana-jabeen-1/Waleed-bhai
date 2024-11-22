"use client";
import React, { useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const [activeTab, setActiveTab] = useState();

  const tabs = [
    { id: "about_me_tab", label: "About me" },
    { id: "experience_tab", label: "Experience" },
    { id: "education_tab", label: "Education" },
    { id: "skills_tab", label: "Skills" },
    { id: "awards_tab", label: "Awards" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "about_me_tab":
        return (
          <div className="tab-content active relative">
            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
              Based in Germany
            </h4>
            <p className="paragraph mb-7">
              Waleed Iqbal,{" "}
              <span className="text-black-800">Product Designer</span>, based in
              Germany. A lover of words, here to create copy that truly lands
              with those who read it.
            </p>
            <ul className="flex-col gap-3 inline-flex">
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Name
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  Waleed Iqbal
                </span>
              </li>
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Nationality
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  Germany
                </span>
              </li>
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Phone
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  +(2) 870 174 302
                </span>
              </li>
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Email
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  info@waleedIqbal.com
                </span>
              </li>
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Experience
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  12+ years
                </span>
              </li>
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Freelance
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  Available
                </span>
              </li>
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Skype
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  WaleedIqbal123
                </span>
              </li>
              <li className="gap-10 inline-flex items-center">
                <span className="w-[110px] text-black-800 text-lg font-normal leading-none">
                  Language
                </span>
                <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                  English
                </span>
              </li>
            </ul>
          </div>
        );

      case "experience_tab":
        return (
          <div className="tab-content tab-content active relative">
            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
              Experience
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
              <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                  03/216 – Running
                </span>
                <div>
                  <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                    Axtra
                  </p>
                  <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                    Lead digital marketer
                  </h4>
                </div>
              </div>

              <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                  03/2008 – 07/2011
                </span>
                <div>
                  <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                    Axtra
                  </p>
                  <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                    JavaScript developer
                  </h4>
                </div>
              </div>

              <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                  03/2008 – 07/2011
                </span>
                <div>
                  <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                    Axtra
                  </p>
                  <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                    Product designer
                  </h4>
                </div>
              </div>

              <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                  03/2008 – 07/2011
                </span>
                <div>
                  <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                    Axtra
                  </p>
                  <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                    UX researcher
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );

      case "education_tab":
        return (
          <div className="tab-content active relative">
            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
              Education
            </h4>
            <div className="grid grid-cols-1 gap-6">
              <div className="pt-8 px-7 pb-7 bg-gray-100 rounded-2xl transition-all hover:shadow-2xl hover:bg-white">
                <span className="text-sm font-normal font-Inter leading-tight text-gray-700">
                  03/2008 – 07/2011
                </span>
                <h4 className="font-bold font-Syne text-2xl text-black-800">
                  BA Business Management
                </h4>
              </div>
            </div>
          </div>
        );

      case "skills_tab":
        return (
          <div className="tab-content active relative">
            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
              Skils
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="pt-8 px-7 pb-7 bg-gray-100 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex gap-4 items-start">
                <img
                  src="assets/images/skills/vs-code.png"
                  alt="React JS"
                  className="w-8 h-8"
                />
                <div>
                  <h4 className="font-bold font-Syne text-xl text-black-800">
                    React JS
                  </h4>
                  <p className="text-sm font-normal font-Inter text-black-800">
                    (90%)
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "awards_tab":
        return (
          <div className="tab-content active relative">
            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
              Awards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-gray-100 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <img src="assets/images/awards/w-dot.png" alt="Winner Icon" />
                  <span className="font-normal text-sm font-Inter text-gray-700">
                    2018
                  </span>
                </div>
                <h4 className="font-bold font-Syne text-xl text-black-800">
                  01X Developer Award
                </h4>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <section
        className="bg-secondary pt-[120px] pb-[75px] aos-init aos-animate"
        data-aos="zoom-in"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
            <img
              className="className=mx-auto"
              src="/assets/images/about-me.png"
              alt="icon"
              width={1828}
              height={77}
            />
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">About me</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                Waleed Iqbal
              </h3>

              <h4 className="text-black-800 text-2xl mt-3 mb-4">
                Product Designer
              </h4>
              <p className="text-xl font-bold font-Syne'] leading-7 mb-6">
                A Product Designer & amp; Developer and I am in the game for
                over 7+ years. I am proud of my works and ready to face the next
                challenge
              </p>
              <p className="paragraph mb-6">
                That is where I come in. A lover of words, a wrangler of copy.
                Here to create copy that not only reflects who you are and what
                you stand for, but words that truly land with those that read
                them, calling your audience in and making them .
              </p>

              <div>
                <img
                  src="/assets/images/signatiure.png"
                  alt="icon"
                  width={1281}
                  height={77}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-[75px] overflow-x-hidden">
        <div className="container" data-aos="zoom-out">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] xl:gap-[134px]">
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] mb-5">
                My vision is to create happy my clients
              </h3>
              <p className="paragraph mb-7">
                That is where I come in. A lover of words, a wrangler of copy.
                Here to create copy that not only reflects who you are and what
                you stand for, but words that truly land with those that read
                them, calling your audience in and making them want more.
              </p>
              <ul className="flex flex-wrap gap-9 2xl:gap-[40px]">
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    08
                  </span>
                  <p className="paragraph">Award winner</p>
                </li>
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    1.2k
                  </span>
                  <p className="paragraph">Worldwide client</p>
                </li>
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    3.5k
                  </span>
                  <p className="paragraph">Job done successfully</p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-end">
              <div className="flex flex-wrap flex-col mb-12 text-start">
                <span className="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative z-10 before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">
                  12+
                </span>
                <span className="strock-text mt-5">
                  Years of <br /> experience
                </span>
              </div>

              <div className="px-6 py-6 bg-black-800 rounded-lg flex flex-wrap justify-between items-end group">
                <div className="flex flex-col flex-wrap gap-y-2">
                  <span className="text-orange text-lg font-normal leading-none">
                    SAY HELLO!
                  </span>
                  <h4 className="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none">
                    waleediqbalqbal.com
                  </h4>
                </div>
                <div className="flex flex-wrap justify-end">
                  <a href="#" className="group-hover:animate-arrow-move-up">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 34L34 14"
                        stroke="#FFB646"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 14H34V34"
                        stroke="#FFB646"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-properties py-5 lg:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:gap-16 xl:gap-24">
            <div className="col-span-12 lg:col-span-5" data-aos="fade-up">
              <div className="font-bold font-Syne leading-none flex flex-col gap-y-2 mb-4">
                <span className="text-orange-500 text-xl">Resume</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px]">
                  All over my details find here...
                </h3>
              </div>
              <div className="tabs flex flex-col gap-2 my-8 lg:my-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-btn justify-between items-center inline-flex group ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                  >
                    {tab.label}
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div
              className="col-span-12 lg:col-span-7"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {renderTabContent()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
