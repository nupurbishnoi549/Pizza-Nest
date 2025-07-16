import React from "react";
import { SOCIAL_ICON, QUICK_LINKS, SUPPORT_LINKS } from "../utils/helper";

const Footer = () => {
    return (
        <footer className="bg-white px-5 pt-20 pb-4">
            <div className="max-w-[1140px] mx-auto border-b-[3px] border-b-[#D1D1D166] pb-8">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="w-full lg:w-[558px]">
                        <a href="/" className="inline-block">
                            <h2 className="text-[42px] font-medium text-[#FC8B44] mb-4">Pizza Nest</h2>
                        </a>
                        <p className="text-[#575757] max-w-[558px] text-base leading-160 mb-6">
                            At Pizza Nest, we believe every slice should bring joy. Whether you're
                            ordering for one or feeding a crowd, our pizzas are baked with care,
                            topped with love, and delivered hot to your doorstep. You just taste
                            the difference.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {SOCIAL_ICON.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FC8B44] to-[#E86E1D] transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_15px_rgba(252,139,68,0.5)]"
                                >
                                    <item.icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-[312px] flex flex-row flex-wrap md:justify-between md:gap-x-5 gap-x-10 gap-y-6">
                        <div className="w-[146px]">
                            <h3 className="text-lg font-semibold mb-3 text-near-black">Quick Links</h3>
                            <ul className="space-y-2 text-[#575757]">
                                {QUICK_LINKS.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className="relative transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#EC6112] hover:to-[#FF902E] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#EC6112] after:to-[#FF902E] hover:after:w-full"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-[146px]">
                            <h3 className="text-lg font-semibold mb-3 ext-near-black">Support</h3>
                            <ul className="space-y-2 text-[#575757]">
                                {SUPPORT_LINKS.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className="relative transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FC8B44] hover:to-[#E86E1D] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#FC8B44] after:to-[#E86E1D] hover:after:w-full"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-4 text-sm text-gray-600">
                Copyright Pizza Nest © 2025, All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
