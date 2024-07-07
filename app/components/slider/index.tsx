import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
const Slider = () => {
  return (
    <>
      <section className="relative overflow-hidden md:flex md:h-screen py-0 pt-[60px] md:py-36 items-center">
        <div className="relative mp-0 h-max md:h-[100vh] w-full">
          <div className="relative z-1 h-max md:h-[100vh] w-full">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 500000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full h-[100vh] relative">
                  <Image
                    src="/assets/images/home1.png"
                    alt=""
                    className="w-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left bg-[#00000093] p-2 md:p-10">
                    <p className="text-[18px] md:text-[45px] text-[#fff]">
                      Roya Moradkhani
                    </p>
                    <p className="text-[14px] md:text-[25px] text-[#fff]">
                      Photographer
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[100vh] relative">
                  <Image
                    src="/assets/images/home2.png"
                    alt=""
                    className="w-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left bg-[#00000093] p-2 md:p-10">
                    <p className="text-[18px] md:text-[45px] text-[#fff]">
                      Roya Moradkhani
                    </p>
                    <p className="text-[14px] md:text-[25px] text-[#fff]">
                      Photographer
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[100vh] relative">
                  <Image
                    src="/assets/images/home3.png"
                    alt=""
                    className="w-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left bg-[#00000093] p-2 md:p-10">
                    <p className="text-[18px] md:text-[45px] text-[#fff]">
                      Roya Moradkhani
                    </p>
                    <p className="text-[14px] md:text-[25px] text-[#fff]">
                      Photographer
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="defaultscroll is-sticky absolute bottom-[10px] md:bottom-[100px] z-50 right-0">
              <div className="container relative">
                <div className="">
                  <ul className="buy-button flex gap-3 list-none mb-0">
                    <li className="inline mb-0">
                      <a
                        href=""
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="assets/images/instagram.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href=""
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="assets/images/pinterest.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href=""
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="assets/images/telegram.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      </a>
                    </li>
                    <li className="inline mb-0">
                      <a
                        href=""
                        className="h-[38px] w-[38px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
                      >
                        <img
                          src="assets/images/whatsapp.png"
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
