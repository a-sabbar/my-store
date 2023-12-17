'use client'
import React, { useState, useEffect, use, useRef } from "react"
import {
    Mate_SCFont,
    UbuntuFont,
    Noto_Sans_TCFont,
    RubikFont,
    PoppinsFont,
    CairoFont
} from "../Fonts/Fonts"
import Image from 'next/image'
import Link from 'next/link'
import {
    motion,
    AnimatePresence,
    useViewportScroll,
    useScroll
} from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Lenis from '@studio-freight/lenis'

const hoverAnimation = "relative after:w-full after:min-h-[4px] after:scale-x-1  after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform center "


const TextAfterAnimiation = ({text, className}: {text: string, className: string}) => {
    return (
        <div className={hoverAnimation + className }>
            {text}
        </div>
    )
}

function Header({bodyRef}: {bodyRef: any}) {
    const [open, setOpen] = useState(false);
    const firstLine = useRef(null);
    const secondLine = useRef(null);
    const thirdLine = useRef(null);
    const handleOpen = () => {
        if(firstLine.current == null || secondLine.current == null || thirdLine.current == null || bodyRef.current == null) return;
        secondLine.current.style.opacity = 0;
        firstLine.current.style.transform = "rotate(45deg)  translate(7px,8px)";
        thirdLine.current.style.transform = "rotate(-45deg) translate(7px,-8px)";
        firstLine.current.style.backgroundColor = "#000";
        thirdLine.current.style.backgroundColor = "#000";
        bodyRef.current.style.overflowY = "hidden";
        bodyRef.current.style.height = "100vh";
        setOpen(true);

    }
    const handleClose = () => {
        if(firstLine.current == null || secondLine.current == null || thirdLine.current == null || bodyRef.current == null) return;
        secondLine.current.style.opacity = 1;
        firstLine.current.style.transform = "rotate(0deg) translate(0px,0px)";
        thirdLine.current.style.transform = "rotate(0deg) translate(0px,0px)";
        firstLine.current.style.backgroundColor = "#FFF";
        thirdLine.current.style.backgroundColor = "#FFF";
        bodyRef.current.style.overflowY = "visible";
        bodyRef.current.style.height = "auto";
        setOpen(false);
    }
    const menuAnimation = {
        initial: {
            height: "0px",
        },
        animate: {
            height: "100%",
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            height: "0px",
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const menuAnimation1 = {
        initial: {
            height: "0px",
        },
        animate: {
            height: "100%",
            transition: {
                duration: 1.5,
                ease: "easeInOut"
            }
        },
        exit: {
            height: "0px",
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const menuAnimation2= {
        initial: {
            height: "0px",
        },
        animate: {
            height: "100%",
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        },
        exit: {
            height: "0px",
            transition: {
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="absolute w-full  z-[100]" >
            <div className=" flex justify-between items-center py-[20px] px-[50px] text-[#FFF] x:max-lg:px-[20px]">
                <p style={Mate_SCFont.style}  className="text-6xl self-end x:max-lg:self-center x:max-lg:text-5xl">
                    Logo
                </p>
                <ul className="items-center gap-[50px] hidden lg:flex" >
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Cocinas</li>
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Interiorismo</li>
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Proyectos</li>
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Servicios</li>
                </ul>
                {

                    <div className="right-5 flex-col justify-center items-center z-50 gap-[7px] self-end flex cursor-pointer opacity-0" >
                        <div className="w-[45px] h-[3.5px]"></div>
                        <div  className="w-[35px] h-[3.5px]"></div>
                        <div className="w-[45px] h-[3.5px]"></div>
                    </div>
                }
                <div className={` right-5 flex-col justify-center items-center z-50 gap-[7px] self-end flex cursor-pointer ${open ? 'fixed' : 'absolute'}`} onClick={() => open ? handleClose() :handleOpen()}>
                    <div ref={firstLine} className="w-[45px] h-[3.5px] bg-[#FFF]  transition-all duration-500 rounded-md"></div>
                    <div ref={secondLine} className="w-[35px] h-[3.5px] bg-[#FFF] transition-all duration-150 rounded-md"></div>
                    <div ref={thirdLine} className="w-[45px] h-[3.5px] bg-[#FFF]  transition-all duration-500 rounded-md"></div>
                </div>
            </div>
            {
                open && (
                    <div className="flex flex-col   fixed top-0 left-0 w-full h-full">
                        <div style={Mate_SCFont.style}  className=" w-full py-[20px] px-[50px] text-6xl  x:max-lg:self-center x:max-lg:text-5xl bg-[#FFF]">
                                Logo
                        </div>
                        <div className=" w-full flex h-full justify-between text-[#000] x:max-lg:px-[20px]">
                            <motion.div
                                variants={menuAnimation}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="h-full py-[20px] px-[50px] flex flex-col w-1/3  bg-white gap-[7px] x:max-lg:self-center  overflow-hidden">
                                <p className="pt-10 text-base font-medium uppercase" style={RubikFont.style}>
                                    Products
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    All
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Men
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    women
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    kids
                                </p>
                            </motion.div>
                            <motion.div
                                variants={menuAnimation1}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                 className="h-full py-[20px] px-[50px] flex flex-col w-1/3  bg-white gap-[7px]  x:max-lg:self-center  overflow-hidden">
                                <p className="pt-10 text-base font-medium uppercase" style={RubikFont.style}>
                                    Seasons
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Summer
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Winter
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Autumn
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Spring
                                </p>
                            </motion.div>
                            <motion.div
                                variants={menuAnimation2}
                                initial="initial"
                                animate="animate"
                                exit="exit" className=" h-full py-[20px] px-[50px] flex flex-col w-1/3  bg-white gap-[7px]  x:max-lg:self-center  overflow-hidden">
                                <p className="pt-10 text-base font-medium uppercase" style={RubikFont.style}>
                                    About
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Contact
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Location
                                </p>
                                <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                                    Careers
                                </p>
                            </motion.div>
                        </div>
                    </div>
                )

            }
        </div>
    )
}

const Gallery = ({url, isVideo, page, index}: {url: string, isVideo: boolean, page: number, index: number}) => {

    const headAnimation = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: -0,
            transition: {
                duration: 2.5,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const bodyAnimation = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: -0,
            transition: {
                duration: 2.5,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                ease: "easeInOut"
            }
        }
    }

    const imagAnimation = {
        initial: {
            scale: 1.2,
        },
        animate: {
            scale: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        },
        exit: {
            scale: 1.2,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const seeMoreAnimation = {
        initial:{
            opacity: 0,
            y: 50
        },
        animate:{
            opacity: 1,
            y: 0,
            transition: {
                duration: 2.5,
                ease: "easeInOut"
            }
        },
        exit:{
            opacity: 0,
            y: 50,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    return (
            <motion.div className="relative min-w-[100vw] h-[100vh] z-0 flex flex-col justify-center items-center overflow-hidden gap-[40px] bg-black" key={index}>
                {
                    !isVideo ?
                    (
                        <motion.img
                            src={url}
                            width={1920}
                            height={1080}
                            alt=""
                            className="object-cover w-full h-full absolute top-0 left-0 z-0 bg-black opacity-90 select-none"
                            draggable="false"
                            variants={imagAnimation}
                            initial="initial"
                            animate={page == index && "animate"}
                            exit="exit"
                        />
                    ):
                    (
                        <motion.video
                            src={url}
                            autoPlay
                            loop
                            muted
                            className="object-cover w-full h-full absolute top-0 left-0 z-0 bg-black opacity-75 select-none "
                            draggable="false"
                            variants={imagAnimation}
                            initial="initial"
                            animate={page == index && "animate"}
                            exit="exit"


                        />
                    )
                }
                <div className="z-10 w-full px-[50px] flex flex-col justify-center items-center">
                    <motion.p
                        className="text-[#FFF] text-center z-10 text-xl pl-[8px] x:max-lg:text-lg x:max-sm:text-base font-light"
                        style={Noto_Sans_TCFont.style}
                        variants={headAnimation}
                        initial="initial"
                        animate={page == index && "animate"}
                        exit="exit"
                    >
                        Bienvenido a Espacio Home Design
                    </motion.p>
                    <motion.p
                        className="max-w-[1700px] text-center text-[#FFF] z-10 text-9xl x:max-lg:text-6xl  font-bold uppercase x:max-sm:text-4xl"
                        style={Mate_SCFont.style}
                        variants={bodyAnimation}
                        initial="initial"
                        animate={page == index && "animate"}
                        exit="exit"
                    >
                        Conoce nuestros servicios
                    </motion.p>
                </div>
                <motion.div
                    className="text-[#FFF] z-10 text-xl uppercase cursor-pointer
                    relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente
                    "
                    style={CairoFont.style}
                    variants={seeMoreAnimation}
                    initial="initial"
                    animate={page == index && "animate"}
                    exit="exit"
                >
                    See more
                </motion.div>
            </motion.div>
    );
}

const HeadGallery = () => {

    const [page, setPage] = useState(0);
    // const windWidth = window?.innerWidth
    const [windWidth, setWindWidth] = useState(0);
    useEffect(() => {
        setWindWidth(window?.innerWidth)
        const handleResize = () => {
          setPage(0);
            setWindWidth(window.innerWidth);
        };
    
        // Add event listener for window resize
        window.addEventListener("resize", handleResize);
    
        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className="relative bg-black overflow-hidden">
            <motion.div 
                className="flex"
                animate={{ x: -page * windWidth}}
                initial={{ x: -page * windWidth}}
                exit={{ x: -page * windWidth}}
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
            >
                <Gallery page={page} index={0} url="/Gallery/G1.jpg" isVideo={false}/>
                <Gallery page={page} index={1} url="/Gallery/G2.jpg" isVideo={false}/>
                <Gallery page={page} index={2} url="/Gallery/G3.mp4" isVideo={true}/>
            </motion.div>
            <div className="absolute bottom-7 left-7 z-10 flex gap-3">
                <div onClick={()=> setPage(0)} style={{opacity: page == 0 ?  1: 0.5}} className="w-[70px] rounded-xl h-[6px] bg-[#FFF] cursor-pointer"></div>
                <div onClick={()=> setPage(1)} style={{opacity: page == 1 ? 1 : 0.5}} className="w-[70px] rounded-xl h-[6px] bg-[#FFF] cursor-pointer"></div>
                <div onClick={()=> setPage(2)} style={{opacity: page == 2 ? 1 : 0.5}} className="w-[70px] rounded-xl h-[6px] bg-[#FFF] cursor-pointer"></div>
            </div>
        </div>
    );
}

function ImageInfo({url}: {url: string}) {
    const [hover, setHover] = useState(false)
    return (
        <div className="flex gap-5 max-w-md  h-fit cursor-pointer  "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <div className="x:w-[180px] x:h-[180px] lg:min-w-[200px] lg:h-[250px] bg-slate-300 relative overflow-hidden cursor-pointer">
                <motion.img
                    src={url}
                    width={1920}
                    height={1080}
                    alt=""
                    className="object-cover absolute w-full h-full bg-black opacity-90 select-none"
                    animate={{ scale: hover ? 1.2 : 1,
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                        }
                    }}
                />
            </div>
            <div className="pt-2 w-full">
                <motion.h3 className={`text-black text-xl w-fit cursor-pointer relative md:max-lg:text-lg`} style={CairoFont.style}>
                    <motion.div
                        className="w-full min-h-[4px] scale-x-0  center absolute -bottom-1 bg-black left-0 duration-500 transition-transform "
                            animate={{scaleX: hover ? 1 : 0,
                            transformOrigin: hover ? "left" : "right",
                            transition: {
                                duration: 0.1,
                                ease: "easeInOut"
                            }
                        }}
                    />
                    Lorem ipsum,consectetur
                </motion.h3>
                <p className="text-black text-sm font-light mt-5" style={UbuntuFont.style}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                {
                    // hover &&
                    (
                        <Link href={"/"} className="text-black text-sm font-normal mt-2 underline" style={CairoFont.style}>
                            See more
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
function ImageGallery({url, header, type }: {url: string, header: string, type: string}) {
    const [hover, setHover] = useState(false)
    const textAnimation = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const headerAnimation = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="flex gap-2 w-full h-fit cursor-pointer relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <div className="w-full h-[40em] relative overflow-hidden  bg-black">
                <motion.img
                    src={url}
                    width={1920}
                    height={1080}
                    alt=""
                    className="object-cover absolute min-w-full h-full  select-none x:max-sm:hidden"
                    animate={{ scale: hover ? 1.2 : 1,
                        opacity: hover ? 0.5 : 1,
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                        }
                    }}
                />
                <Image
                    src={url}
                    width={1920}
                    height={1080}
                    alt=""
                    className="object-cover absolute min-w-full h-full  select-none hidden bg-black opacity-60 x:max-sm:block"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 text-white overflow-hidden">
                <motion.h1 className="text-5xl font-bold uppercase x:max-sm:hidden" style={Mate_SCFont.style}
                    variants={headerAnimation}
                    initial="initial"
                    animate={hover ? "animate" :"initial"}
                    exit="exit"
                >
                    {header}
                </motion.h1>
                <h1 className="text-5xl font-bold uppercase hidden x:max-sm:block" style={Mate_SCFont.style}
                >
                    {header}
                </h1>
                <motion.div
                    className="text-base uppercase font-bold relative x:max-sm:hidden"
                    style={CairoFont.style}
                    variants={textAnimation}
                    initial="initial"
                    animate={hover ? "animate" :"initial"}
                    exit="exit"

                >
                    <motion.div
                        className="w-full min-h-[4px] scale-x-0  center absolute -bottom-1 bg-white left-0v duration-500 transition-transform"
                            animate={{scaleX: hover ? 1 : 0,
                            transformOrigin: hover ? "left" : "right",
                            transition: {
                                scaleX: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                },
                                duration: 0.1,
                                ease: "easeInOut"
                            }
                        }}
                    />
                    {type}
                </motion.div>
            </div>
        </div>
    )
}
function MyLine({url,text}: {url: string, text: string}) {
    const [hover, setHover] = useState(true)
    const myText = text.split(" ")
    return (
        <div className="relative flex gap-5 h-fit  text-right overflow-hidden"
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        >
            {
                myText.map((item, index) => {
                    return (
                        <div key={item + index} className="flex items-end gap-3
                        xl:max-2xl:gap-2 lg:max-xl:gap-1 md:max-lg:gap-1 sm:max-md:gap-1 x:max-sm:gap-1
                        ">
                            <motion.span
                                className="h-fit text-black font-medium text-9xl text-right xl:max-2xl:text-8xl lg:max-xl:text-7xl md:max-lg:text-6xl sm:max-md:text-5xl x:max-sm:text-4xl"
                                style={Mate_SCFont.style}
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 50,
                                        transition: {
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                                initial="initial"
                                animate={"animate"}
                                exit="exit"
                            >
                                {item}
                            </motion.span>
                            {
                                index == 0 &&
                                (
                                    <motion.div
                                        animate={{ width: hover ? 200 : 0,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="overflow-hidden
                                        2xl:w-[200px]  2xl:h-[140px]
                                        xl:max-2xl:!w-[150px] xl:max-2xl:h-[100px]
                                        lg:max-xl:!w-[130px] lg:max-xl:!h-[80px]
                                        md:max-lg:!w-[100px] md:max-lg:!h-[70px]
                                        sm:max-md:!w-[80px] sm:max-md:!h-[50px]
                                        x:max-sm:!w-[60px] x:max-sm:!h-[40px]

                                        "
                                    >
                                        <motion.img
                                            src={url}
                                            width={1920}
                                            height={1080}
                                            alt=""
                                            className="object-cover 
                                            w-full h-full select-none
                                            "
                                        />
                                    </motion.div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

function Body() {
    return (
        <div className=" w-full px-[50px] flex flex-col gap-40 items-center justify-center pt-[100px] no-scrollbar x:max-sm:px-[10px]">
            <div className=" grid grid-cols-2 gap-16 xl:grid-cols-3 md:grid-cols-2 [&>*:nth-child(3)]:sm:max-xl:col-span-2 items-center justify-center x:max-sm:grid-cols-1">
                    <ImageInfo url="/Gallery/I1.jpg"/>
                    <ImageInfo url="/Gallery/I2.jpg"/>
                    <ImageInfo url="/Gallery/I3.jpg"/>
                    <ImageGallery url="/Gallery/S1.jpg" header={"Cocinas"} type={"Lorem ipsum dolor."} />
                    <ImageGallery url="/Gallery/S2.jpg" header={"Interiorismo"} type={"Lorem ipsum voluptatum."}/>
                    <ImageGallery url="/Gallery/S3.jpg" header={"Proyectos"} type={"Lorem ipsum dolvoluptatum."} />
            </div>
            <div className=" w-full flex flex-col justify-center items-center gap-5">
                <MyLine url={"/Gallery/L1.jpg"} text={"Heritage ,"}/>
                <MyLine url={"/Gallery/L2.jpg"} text={"Design And"}/>
                <MyLine url={"/Gallery/L3.jpg"} text={"Commitment Of"}/>
                <MyLine url={"/Gallery/L4.jpg"} text={"Three generations."}/>
            </div>
        </div>
    )
}

function SliderImage({url, index}: {url: string, index: number}) {
    return (
        <div className="min-w-[350px] h-[510px] bg-black relative overflow-hidden">
            <Image width={1920} height={1080} src={url} alt="" className="object-cover w-full h-full"/>
        </div>
    )
}

function BroductScroll() {
    const startRef = useRef<any>(null);
    const animRef = useRef<any>(null);

    const data = [
        "/Slider/pexels-anna-shvets-5262741.jpg",
        "/Slider/pexels-j-sarkar-991509.jpg",
        "/Slider/pexels-jordan-bergendahl-13219989.jpg",
        "/Slider/pexels-oliver-sjöström-1103828.jpg",
        "/Slider/pexels-rdne-stock-project-8223913.jpg",
        "/Slider/pexels-rdne-stock-project-8223952.jpg",
        "/Slider/pexels-rdne-stock-project-8223957.jpg",
        "/Slider/pexels-rdne-stock-project-8224648.jpg",
        "/Slider/pexels-rdne-stock-project-8223952.jpg",
    ]
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: startRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        });
    
        tl.to(animRef.current, {
          x: "-54%",
          y: "50%",
          ease: 'none',
          duration: 1,
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
            };  
    }, [])


    return (
        <div ref={startRef} className="w-full h-[770px] px-[50px] mt-[150px] overflow-x-hidden  overflow-y-visible">
                <motion.div className="flex w-fit h-fit gap-[50px]"
                ref={animRef}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <SliderImage key={index} url={item} index={index}/>
                            )
                        })
                    }
                </motion.div>
        </div>
    )
}

function TextErase({text, len, index}: {text: string, len: number, index: number}) {
    const refChar = useRef<any>(null);
    const delay = (len - index) * 0.5;

    const textAnimation = {
        initial: {
            opacity: 1,
        },
        animate: {
            scaleY: 0,
            transition: {
                duration: 0,
                ease: "easeInOut",
                delay: delay
            }
        },
    }


    return (
        <motion.span ref={refChar}
            variants={textAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {text}
        </motion.span>
    );
}

export default function Home() {
    const bodyRef = useRef<any>(null);
    useEffect( () => {

        const lenis = new Lenis()
    
        lenis.on('scroll', ScrollTrigger.update)
        
        gsap.ticker.add((time)=>{
          lenis.raf(time * 1000)
        })
        
        gsap.ticker.lagSmoothing(0)
    
      }, [])
    return (
        <div className="w-full cursor-default relative  min-h-screen overflow-x-hidde" ref={bodyRef}>
            <Header bodyRef={bodyRef} />
            <HeadGallery/>
            <Body/>
            <BroductScroll/>
            <div className="h-[50vh] w-[80%] relative left-1/2 -translate-x-1/2 mt-14 bg-black flex justify-center items-center">
                <Image width={1920} height={1080} src={"/shop.jpg"} alt="" className="absolute z-0 top-0 left-0 object-cover w-full h-full  opacity-75 grayscale-[0.2]"/>
                <p className="text-white text-8xl font-medium uppercase z-10 opacity-90" style={Noto_Sans_TCFont.style}>
                    Shop now
                </p>
            </div>
            <div className="mt-16 pb-[50px] flex justify-around px-[100px]">
                <div className="category flex flex-col justify-start gap-3 ">
                    <p className="text-base font-bold uppercase" style={CairoFont.style}>
                        men
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        women
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        kids
                    </p>
                </div>
                <div className="seasons flex flex-col justify-start gap-3">
                    <p className="text-base font-bold uppercase" style={CairoFont.style}>
                        summer
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        winter
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        autumn
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        spring
                    </p>
                </div>
                <div className=" flex flex-col justify-start gap-3">
                    <p className="text-base font-bold uppercase" style={CairoFont.style}>
                        products
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        best sellers
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        new
                    </p>

                </div>
                <div className="info flex flex-col justify-center gap-3">
                    <p className="text-base font-bold uppercase" style={CairoFont.style}>
                        about
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        contact
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        location
                    </p>
                    <p className="text-sm font-normal uppercase hover:underline cursor-pointer" style={RubikFont.style}>
                        careers
                    </p>
                </div>
            </div>
            <div className=" w-full z-10" >
            <footer className=" flex justify-between items-center py-[20px] px-[50px] text-[#FFF] x:max-lg:px-[20px] bg-black">
                <p style={Mate_SCFont.style}  className="text-4xl self-end x:max-lg:self-center x:max-lg:text-5xl">
                    Logo
                </p>
                {/* add copy right */}
                <p className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">
                    © 2023 Achraf Sabbar
                </p>
            </footer>
        </div>
        </div>
    )
}