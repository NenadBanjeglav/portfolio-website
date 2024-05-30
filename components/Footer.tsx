/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="mb-[100px] w-full pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Need strongly motivated Web Developer to boost
          <span className="text-purple"> your</span> ranks?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals!
        </p>
        <a href="mailto:nenadmobmail@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-2 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Nenad Banjeglav
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((el) => (
            <a
              href={el.link}
              target="_blank"
              key={el.id}
              className="saturate-180 flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200/75 backdrop-blur-lg"
            >
              <img src={el.img} alt={el.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
