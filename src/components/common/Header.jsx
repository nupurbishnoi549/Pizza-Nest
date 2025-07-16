import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import { NAV_ITEMS } from '../../utils/helper';
import CustomButton from './CustomButton';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 900) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='px-6 pt-6 pb-[22px] bg-off-white relative'>
            <div className='flex justify-between items-center max-w-[1130px] mx-auto'>
                <div>
                    <a href="#home" className="inline-block">
                        <Heading
                            headingText="Pizza Nest"
                            headingClass="!font-medium !text-custom-xl bg-gradient-to-r from-[#EC6112] to-[#FF902E] bg-clip-text text-transparent"
                        />
                    </a>
                </div>
                <nav className="hidden min-[900px]:flex gap-6 ff-nunito text-muted-gray text-base leading-160">
                    {NAV_ITEMS.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="relative transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#EC6112] hover:to-[#FF902E] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#EC6112] after:to-[#FF902E] hover:after:w-full"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden min-[900px]:block">
                    <CustomButton btnText="Contact Us" btnClass="!py-[17.5px]" />
                </div>
                <button
                    className="min-[900px]:hidden text-3xl text-prime z-20"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <HiMenu />
                </button>
            </div>
            <div
                className={`
          fixed inset-0 bg-off-white z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <button
                    className="absolute top-4 right-6 text-4xl text-prime"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <HiX />
                </button>
                <nav className="flex flex-col items-center gap-6 ff-nunito text-muted-gray text-xl font-semibold max-[899px]:flex min-[900px]:hidden">
                    {NAV_ITEMS.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            onClick={() => setIsMenuOpen(false)}
                            className="relative transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#EC6112] hover:to-[#FF902E] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#EC6112] after:to-[#FF902E] hover:after:w-full"
                        >
                            {item.label}
                        </a>
                    ))}

                    <CustomButton btnText="Contact Us" btnClass="mt-4" />
                </nav>
            </div>
        </div>
    );
};

export default Header;
