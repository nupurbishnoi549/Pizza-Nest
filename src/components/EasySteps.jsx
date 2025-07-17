import React from 'react';
import { EASY_STEPS } from '../utils/helper';
import SubHeading from './common/SubHeading';
import Heading from './common/Heading';
import CustomButton from './common/CustomButton';

const EasySteps = () => {
    return (
        <div className="px-5 md:py-[100px] py-16 max-w-[1920px] mx-auto">
            <div className="max-w-[1140px] mx-auto text-center">
                <div className="flex items-center gap-[6px] justify-center pb-2">
                    <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#EC6112] via-[#FF902E] to-transparent"></div>
                    <SubHeading subText="How It Works" />
                    <div className="h-[1px] w-[60px] bg-gradient-to-l from-[#EC6112] via-[#FF902E] to-transparent"></div>
                </div>
                <Heading headingText='Your Perfect Pizza in Just 3 Easy Steps!' headingClass='!max-w-[586px] !mx-auto lg:!mb-10 md:!mb-8 !mb-5'/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4 justify-items-center overflow-hidden">
                    {EASY_STEPS.map((step, i) => (
                        <div
                            key={i}
                            className={`relative flex flex-col items-center text-center w-[364px] h-[306px] px-6 py-6 rounded-xl ${i === 2 ? 'md:col-span-2 md:justify-self-center lg:col-span-1' : ''
                                }`}
                        >
                            <div className="w-[70px] h-[70px] flex items-center justify-center mb-5 rounded-full bg-[#FFF1E5]/4">
                                <step.icon className="w-[36px] h-[36px]" />
                            </div>

                            <h3 className="text-2xl font-semibold leading-150 text-black mb-2">
                                {step.title}
                            </h3>
                            <p className="text-base font-normal leading-160 text-charcoal-gray mb-3 max-w-[306px]">
                                {step.desc}
                            </p>
                            <CustomButton btnText=' View Menu' btnClass='!px-4 !py-3'/>
                            {i < EASY_STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-[55px] right-[-30%]">

                                    <svg width="194" height="16" viewBox="0 0 194 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M192.829 8.71199C193.219 8.32147 193.219 7.6883 192.829 7.29778L186.465 0.933815C186.074 0.543291 185.441 0.543291 185.051 0.933815C184.66 1.32434 184.66 1.9575 185.051 2.34803L190.708 8.00488L185.051 13.6617C184.66 14.0523 184.66 14.6854 185.051 15.076C185.441 15.4665 186.074 15.4665 186.465 15.076L192.829 8.71199ZM0.979004 8.00488V9.00488H3.96561V8.00488V7.00488H0.979004V8.00488ZM9.93882 8.00488V9.00488H15.912V8.00488V7.00488H9.93882V8.00488ZM21.8853 8.00488V9.00488H27.8585V8.00488V7.00488H21.8853V8.00488ZM33.8317 8.00488V9.00488H39.8049V8.00488V7.00488H33.8317V8.00488ZM45.7781 8.00488V9.00488H51.7513V8.00488V7.00488H45.7781V8.00488ZM57.7245 8.00488V9.00488H63.6977V8.00488V7.00488H57.7245V8.00488ZM69.671 8.00488V9.00488H75.6442V8.00488V7.00488H69.671V8.00488ZM81.6174 8.00488V9.00488H87.5906V8.00488V7.00488H81.6174V8.00488ZM93.5638 8.00488V9.00488H99.537V8.00488V7.00488H93.5638V8.00488ZM105.51 8.00488V9.00488H111.483V8.00488V7.00488H105.51V8.00488ZM117.457 8.00488V9.00488H123.43V8.00488V7.00488H117.457V8.00488ZM129.403 8.00488V9.00488H135.376V8.00488V7.00488H129.403V8.00488ZM141.35 8.00488V9.00488H147.323V8.00488V7.00488H141.35V8.00488ZM153.296 8.00488V9.00488H159.269V8.00488V7.00488H153.296V8.00488ZM165.242 8.00488V9.00488H171.216V8.00488V7.00488H165.242V8.00488ZM177.189 8.00488V9.00488H183.162V8.00488V7.00488H177.189V8.00488ZM189.135 8.00488V9.00488H192.122V8.00488V7.00488H189.135V8.00488ZM192.829 8.71199C193.219 8.32147 193.219 7.6883 192.829 7.29778L186.465 0.933815C186.074 0.543291 185.441 0.543291 185.051 0.933815C184.66 1.32434 184.66 1.9575 185.051 2.34803L190.708 8.00488L185.051 13.6617C184.66 14.0523 184.66 14.6854 185.051 15.076C185.441 15.4665 186.074 15.4665 186.465 15.076L192.829 8.71199ZM0.979004 8.00488V9.00488H3.96561V8.00488V7.00488H0.979004V8.00488ZM9.93882 8.00488V9.00488H15.912V8.00488V7.00488H9.93882V8.00488ZM21.8853 8.00488V9.00488H27.8585V8.00488V7.00488H21.8853V8.00488ZM33.8317 8.00488V9.00488H39.8049V8.00488V7.00488H33.8317V8.00488ZM45.7781 8.00488V9.00488H51.7513V8.00488V7.00488H45.7781V8.00488ZM57.7245 8.00488V9.00488H63.6977V8.00488V7.00488H57.7245V8.00488ZM69.671 8.00488V9.00488H75.6442V8.00488V7.00488H69.671V8.00488ZM81.6174 8.00488V9.00488H87.5906V8.00488V7.00488H81.6174V8.00488ZM93.5638 8.00488V9.00488H99.537V8.00488V7.00488H93.5638V8.00488ZM105.51 8.00488V9.00488H111.483V8.00488V7.00488H105.51V8.00488ZM117.457 8.00488V9.00488H123.43V8.00488V7.00488H117.457V8.00488ZM129.403 8.00488V9.00488H135.376V8.00488V7.00488H129.403V8.00488ZM141.35 8.00488V9.00488H147.323V8.00488V7.00488H141.35V8.00488ZM153.296 8.00488V9.00488H159.269V8.00488V7.00488H153.296V8.00488ZM165.242 8.00488V9.00488H171.216V8.00488V7.00488H165.242V8.00488ZM177.189 8.00488V9.00488H183.162V8.00488V7.00488H177.189V8.00488ZM189.135 8.00488V9.00488H192.122V8.00488V7.00488H189.135V8.00488Z" fill="url(#paint0_linear_133_5929)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_133_5929" x1="0.979005" y1="8.7725" x2="2.05714" y2="-5.81251" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#EC6112" />
                                                <stop offset="1" stop-color="#FF902E" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EasySteps;
