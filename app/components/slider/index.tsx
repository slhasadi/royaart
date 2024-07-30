import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { getAllSlider } from "@/app/network";
import { IMAGE_URL } from "@/app/global";
import { TypeAnimation } from "react-type-animation";

const Slider = () => {
  const [slideList, setSlideList] = useState([] as any);
  useEffect(() => {
    getAllSlider().then((res) => {
      setSlideList(res.data);
    });
  }, []);
  return (
    <>
      <section className="relative overflow-hidden md:flex md:h-screen py-0 pt-[60px] md:py-36 items-center">
        <div className="relative mp-0 h-max md:h-[100vh] w-full">
          <div className="relative z-1 h-max md:h-[100vh] w-full">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {slideList.map((slide: any) => {
                return (
                  <SwiperSlide key={slide.slidSlideShowId}>
                    <div className="w-full h-[100vh] relative">
                      <img
                        src={IMAGE_URL + slide.imagePath + slide.imageName}
                        alt=""
                        className="w-full"
                        loading="lazy"
                        // fill
                        // objectFit="cover"
                      />
                      {slide.description && (
                        <div className="absolute w-[300px] md:w-[420px] top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left bg-[#00000093] p-2 md:p-10">
                          <TypeAnimation
                            style={{
                              whiteSpace: "pre-line",
                              display: "block",
                            }}
                            className="text-[35px] md:text-[45px] text-[#fff]"
                            sequence={[
                              `${slide.title}\n${slide.description}`,
                              10000,
                              "",
                            ]}
                            repeat={Infinity}
                          />
                        </div>
                        // <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left bg-[#00000093] p-2 md:p-10">
                        //   <p className="text-[18px] md:text-[45px] text-[#fff]">
                        //     {slide.title}
                        //   </p>
                        //   <p className="text-[14px] md:text-[25px] text-[#fff]">
                        //     {slide.description}
                        //   </p>
                        // </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="defaultscroll is-sticky absolute bottom-[10px] md:bottom-[100px] z-50 right-0">
              <div className="container relative">
                <div className="">
                  <ul className="buy-button flex gap-3 list-none mb-0">
                    <li className="inline mb-0">
                      <a
                        href="https://www.instagram.com/roya_moradkhani?igsh=MWhxcmpqZHJpNmo4ZA=="
                        target="_blank"
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="/assets/images/instagram.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="https://x.com/Roya_moradkhani?t=Oao23ipXA-WSS2qH8U_YDQ&s=09"
                        target="_blank"
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="/assets/images/twitter.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="https://www.linkedin.com/in/roya-moradkhani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="/assets/images/linkedin.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href="https://linktr.ee/royamoradkhani"
                        target="_blank"
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="/assets/images/linktree.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
