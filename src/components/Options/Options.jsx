import React from 'react';

const Options = ({ text }) => {
    return (
        <div className='w-[300px] px-6 h-[70px] flex justify-between items-center'>
            <div>
                <h1 className="font-bold text-[18px]">{text}</h1>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <g filter="url(#filter0_d_1_413)">
                        <rect x="8" y="4" width="49" height="49" rx="14" fill="#6418C3" />
                    </g>
                    <path d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z" fill="white" />
                    <defs>
                        <filter id="filter0_d_1_413" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="4" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_413" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_413" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Options;