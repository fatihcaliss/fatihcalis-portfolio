import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxReader,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <Link
              href={"https://github.com/fatihcaliss"}
              target="_blank"
              className="z-20"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </Link>
            <Link
              href={"https://www.instagram.com/fatihhcaliss/"}
              target="_blank"
              className="z-20"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/fatihcaliss/"}
              target="_blank"
              className="z-20"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <Link href={"/Fatih Çalış CV.pdf"} target="_blank" className="z-20">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Learning about me -{" "}
                </span>{" "}
                <span className="text-[15px] ml-[6px] flex">
                  Download CV <RxReader style={{ margin: "2px 0 0 4px" }} />
                </span>
              </p>
            </Link>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">fthcls@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; 2024 All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
