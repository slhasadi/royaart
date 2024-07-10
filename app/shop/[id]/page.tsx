"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "@/app/components/header";
import Zoom from "react-medium-image-zoom";

import "react-medium-image-zoom/dist/styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const SingleShop = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [singleCar, setSingleCar] = useState<any>([
    "/assets/images/portfolio/18.jpg",
    "/assets/images/portfolio/18.jpg",
    "/assets/images/portfolio/18.jpg",
    "/assets/images/portfolio/18.jpg",
    "/assets/images/portfolio/18.jpg",
    "/assets/images/portfolio/18.jpg",
  ]);
  const thumbSlider = () => {
    return (
      <div className="w-full">
        <div className="w-full mb-3">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {singleCar.map((slider: string, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Zoom>
                    <img
                      src={`${slider}`}
                      style={{ width: "100%", height: "400px" }}
                      alt={slider}
                    />
                  </Zoom>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-full">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
          >
            {singleCar.map((slider: string, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`${slider}`}
                    style={{ width: "100%", height: "70px" }}
                    alt={slider}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <section className="relative table w-full pt-24 pb-32  bg-no-repeat bg-top bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black gradient-pink-to-white"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              Portfolio & Works
            </h3>

            <p className="text-white/70 text-base max-w-xl mx-auto">
              Showcase of Our Awesome Works in Four Columns
            </p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white breadcrumb-color">
              <a href="index.html">Muvico</a>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle breadcrumb-color"></i>
            </li>
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white breadcrumb-color">
              <a href="">Portfolio</a>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle breadcrumb-color"></i>
            </li>
            <li
              className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white breadcrumb-color"
              aria-current="page"
            >
              Creative
            </li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-8 md:col-span-7">
              <div className="md:flex-1 px-4">{thumbSlider()}</div>
              <div className="flex mt-6">
                <div className="w-full">
                  <h4 className="text-3xl leading-normal font-semibold mb-6">
                    Project Description
                  </h4>
                  <p className="text-slate-900 dark:text-black/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit totam atque dignissimos porro, exercitationem,
                    neque alias ea aliquid quibusdam voluptates impedit maxime
                    aut asperiores consequatur iste. Corporis fuga ducimus
                    dignissimos. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Adipisci non dolorem consequatur vitae
                    hic.
                  </p>
                  <p className="text-slate-100 dark:text-black/60 mt-2">
                    Suscipit totam atque dignissimos porro, exercitationem,
                    neque alias ea aliquid quibusdam voluptates impedit maxime
                    aut asperiores consequatur iste. Corporis fuga ducimus
                    dignissimos.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5">
              <div className="sticky top-20">
                <h5 className="text-lg font-semibold bg-slate-300 dark:bg-slate-300 shadow dark:shadow-gray-300 rounded-xl p-2 text-center">
                  Project Info :
                </h5>
                <dl className="grid grid-cols-12 mb-0 mt-4">
                  <dt className="md:col-span-4 col-span-5 mt-2">Client :</dt>
                  <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                    Calvin Carlo
                  </dd>

                  <dt className="md:col-span-4 col-span-5 mt-2">Category :</dt>
                  <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                    Web Design
                  </dd>

                  <dt className="md:col-span-4 col-span-5 mt-2">Date :</dt>
                  <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                    23rd Sep, 2021
                  </dd>

                  <dt className="md:col-span-4 col-span-5 mt-2">Website :</dt>
                  <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                    www.yourdomain.com
                  </dd>

                  <dt className="md:col-span-4 col-span-5 mt-2">Location :</dt>
                  <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                    3/2/64 Mongus Street, UK
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleShop;
