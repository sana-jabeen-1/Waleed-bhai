import React from "react";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  const blogPosts = [
    {
      image: "/assets/images/blog/blog1.png",
      category: "UI Design",
      date: "03 May 2019",
      title: "Right-lo-left behind development in mobile web design",
      link: "/blog-details",
    },
    {
      image: "/assets/images/blog/blog2.png",
      category: "UI Design",
      date: "03 May 2019",
      title: "Connect craft: Reading the smart experience",
      link: "/blog-details",
    },
    {
      image: "/assets/images/blog/blog3.png",
      category: "UI Design",
      date: "03 May 2019",
      title: "Ecoglow: Sustainable skincare a brighter tomorrow",
      link: "/blog-details",
    },
    {
      image: "/assets/images/blog/blog4.png",
      category: "UI Design",
      date: "03 May 2019",
      title: "Right-lo-left behind development in mobile web design",
      link: "/blog-details",
    },
  ];

  return (
    <section className="bg-white pt-20 pb-[120px]">
      <div className="container mx-auto">
        {/* Blog Header */}
        <div className="grid grid-cols-12">
          <div
            className="col-span-12"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Blog</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                My blog{" "}
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[18px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  po
                </span>
                st
              </h3>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={`${400 + index * 200}`}
            >
              <div className="rounded-[20px] overflow-hidden mb-6">
                <Image
                  className="w-full"
                  src={post.image}
                  alt="blog image"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <div className="flex flex-wrap flex-col gap-3">
                <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                  <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                    <Link href="#">{post.category}</Link>
                  </li>
                  <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[30px]">
                    <Link href="#">{post.date}</Link>
                  </li>
                </ul>
                <div className="flex justify-between items-end text-black-800 hover:text-orange group">
                  <h4 className="font-bold font-Syne transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                    <Link href={post.link}>{post.title}</Link>
                  </h4>
                  <Link href={post.link}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                        fill="currentColor"
                        fillOpacity="0.9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                        fill="currentColor"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blog;
