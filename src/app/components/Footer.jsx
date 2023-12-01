import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#151920] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <span>
          <Image
            src="/image/SHV.png"
            style={{ borderRadius: "10px" }}
            alt=""
            width={100}
            height={100}
          />
        </span>
        <div className="flex flex-col items-center">
          <p className="text-slate-600 mb-2">Copyright © 2023</p>
          <div className="flex items-center">
            <a
              href="https://wa.link/mofa46"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/social/WhatSapp.png"
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "5px" }}
              />
            </a>
            <a
              href="https://t.me/Huguete_18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/social/Telegram.png"
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "5px" }}
              />
            </a>
            <a
              href="https://twitter.com/sergi7041"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/social/Twitter.png"
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "5px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/huguete_18/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/social/Instagram.png"
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "5px" }}
              />
            </a>
            <a
              href="https://www.tiktok.com/@huguete18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/social/TikTok.png"
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "5px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvys7gBZG4_LU2_fVcBwyxw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/social/YouTube.png"
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "5px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
