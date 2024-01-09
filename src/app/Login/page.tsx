'use client';

import {
    useState,
    useEffect,
    useRef,
    useContext,
    createContext,
} from 'react';
import Image from 'next/image';
import {
    Mate_SCFont,
    UbuntuFont,
    Noto_Sans_TCFont,
    RubikFont,
    PoppinsFont,
    CairoFont
} from "../../Fonts/Fonts"
import Link from 'next/link';

export default function Page() {

    return (
        <div className='h-screen relative w-screen flex justify-center items-center bg-black'>
            <Image
                src={'/Gallery/G1.jpg'}
                width={1920}
                height={1080}
                alt=''
                className='object-cover w-full h-full absolute top-0 left-0  z-0'
            />
            <div className=" w-full h-full fixed top-0 left-0   inset-0 bg-black bg-opacity-20 backdrop-blur-[1.5px] z-10"/>
            <div className='2xl:w-[1200px] 2xl:h-[700px] x:max-2xl:w-[85%] bg-[#F2F2F2] bg-opacity-[0.99] rounded-md flex overflow-hidden  opacity-[0.98] z-20'>
                <div className='flex flex-col  lg:w-1/2 x:max-md:w-full md:w-[55%]  gap-12'>
                    <Link href={"/"} style={Mate_SCFont.style}  className="text-4xl pt-[50px] pl-[50px]">
                        Logo
                    </Link>
                    <div className='flex flex-col gap-7 pl-[50px] pb-[50px] pr-5 w-full h-full  items-center'>
                        <div className='flex flex-col w-fit gap-5 items-start'>
                            <p className="text-3xl font-bold md:max-lg:text-2xl" style={Noto_Sans_TCFont.style}>
                                Welcome Back
                            </p>
                            <p className="text-sm text-[#bebebe] md:max-lg:text-xs" style={PoppinsFont.style}>
                                The Fast You Login, The Fast You Get Your Product
                            </p>
                            <div className='flex flex-col max-w-full mt-3  gap-5 '>
                                <span className='border-[1px] border-black flex items-center pl-3 rounded-md'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email" width={20} >
                                            <path stroke='black' strokeWidth="0.7" fill="#222" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path>
                                            <path stroke='black' strokeWidth="0.7" fill="#222" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z">
                                            </path><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
                                        </svg>
                                    </span>
                                    <input type='email' className='bg-transparent text-sm focus:outline-none py-3 pl-3' placeholder='Email' style={PoppinsFont.style} />
                                </span>
                                <span className='border-[1px] border-black flex items-center pl-3 rounded-md'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="lock" width={20} >
                                            <path stroke='black' strokeWidth="0" d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path>
                                        </svg>
                                    </span>
                                    <input type='password' className='bg-transparent text-sm focus:outline-none py-3 pl-3' placeholder='Password' style={PoppinsFont.style} />
                                </span>
                                <div className='self-end'>
                                    <p className='text-sm text-black cursor-pointer hover:underline'>Forgot Password?</p>
                                </div>
                            </div>
                            <div className='flex flex-col w-full mt-2 gap-4 '>
                                <button className='bg-black text-white py-[10px] px-[25%] rounded-md'>
                                    Login
                                </button>
                                <p className='text-sm text-center '>
                                    {`Don't have an account?`} <span className='text-black cursor-pointer hover:underline'>Sign Up</span>
                                </p>
                            </div>
                            <div  className='flex self-center gap-4 w-full px-[20px] items-center'>
                                <div className='line w-[120px] h-[1px] bg-[#bebebe]'/>
                                <p className='text-lg text-[#9d9d9d]' style={CairoFont.style}>
                                    OR
                                </p>
                                <div className='line w-[120px] h-[1px] bg-[#bebebe]'/>
                            </div>
                            <div className='flex w-full mt-2  justify-between'>
                                <button className=' text-white py-[10px] px-[18%] rounded-md flex items-center gap-2 border-[1px] border-[#9d9d9d]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                                    </svg>
                                </button>
                                <button className=' text-white py-[10px] px-[18%] rounded-md flex items-center gap-2 border-[1px] border-[#9d9d9d]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="apple" width="30" >
                                        <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2  relative md:max-lg:min-w-[250px] x:max-md:hidden md:w-[45%]'>
                    <Image
                        src={'/login1.png'}
                        width={1920}
                        height={1080}
                        alt=''
                        className='object-cover w-full h-full absolute top-0 left-0  grayscale '
                    />
                </div>
            </div>
        </div>
    )
}