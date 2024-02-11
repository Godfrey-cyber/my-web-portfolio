"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "A react Book Store application",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Screenshot_book-store.png",
    link: "book-store-client.three.vercel.app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Ecommerce website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Screenshot_com-shop.png",
    link: "com-ecommerce.vercel.app",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "A MERN Stack blog app",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Screenshot_my_blog.png",
    link: "my-blog-frontend-kappa.vercel.app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <iframe
	        width="400"
	        height="284"
	        src="https://youtu.be/ggLoW97PcpI?si=IJ4Y4VAfgeWkFMZg"
	        title="Milestone 8 project video"
	        frameborder="0"
	        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	        allowfullscreen
	      ></iframe>
    </div>
    <div className="">
    	<Link href="https://docs.google.com/presentation/d/1oOtSHi_V-NFsWFDRfiJie5eOph6hZq0zXNtfybmvsRU/edit#slide=id.p">
    		<button className="p-1 text-sm md:p-1.5 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Slide Deck</button>
    	</Link>
    </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-lg font-bold md:text-sm lg:text-xl xl:text-2xl">
                    {item.title}
                  </h1>
                  <div className="relative w-96 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  {/*<p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>*/}
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-1 text-sm md:p-1.5 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div>
	      <iframe
	        width="860"
	        height="484"
	        src="https://youtu.be/ggLoW97PcpI?si=IJ4Y4VAfgeWkFMZg"
	        title="Milestone 8 project video"
	        frameborder="0"
	        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	        allowfullscreen
	      ></iframe>
    </div>
    <div className="">
    	<Link href="https://docs.google.com/presentation/d/1oOtSHi_V-NFsWFDRfiJie5eOph6hZq0zXNtfybmvsRU/edit#slide=id.p">
    		<button className="p-1 text-sm md:p-1.5 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Slide Deck</button>
    	</Link>
    </div>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end React Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;