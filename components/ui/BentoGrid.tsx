"use client";

/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setcopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("nenadmobmail@gmail.com");

    setcopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute size-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="size-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-32 md:text-xs lg:text-base">
            {description}
          </div>
          <div
            className={`z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {["React.js", "Next.js", "MongoDB"].map((el) => (
                  <span
                    key={el}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 
                  lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {el}
                  </span>
                ))}

                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
                {["Javascript", "Scss", "Tailwind"].map((el) => (
                  <span
                    key={el}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 
                  lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {el}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYmid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
