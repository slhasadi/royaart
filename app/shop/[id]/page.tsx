"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "@/app/components/header";
import Zoom from "react-medium-image-zoom";

import "react-medium-image-zoom/dist/styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { findProduct, getGalleryProduct } from "@/app/network";
import { IMAGE_URL } from "@/app/global";
import Link from "next/link";
const SingleShop = ({ params }: { params: { id: any } }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [sliderList, setSliderList] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState([] as any);
  useEffect(() => {
    findProduct(params.id).then((res) => {
      setSingleProduct(res.data);
    });
    getGalleryProduct(params.id).then((res) => {
      setSliderList(res.data);
    });
  }, []);
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
            {sliderList.map((slider: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Zoom>
                    <img
                      src={IMAGE_URL + slider.imagePath + slider.imageName}
                      style={{}}
                      className="shop-port-img-slider"
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
            {sliderList.map((slider: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={IMAGE_URL + slider.imagePath + slider.imageName}
                    style={{}}
                    className="shop-port-img-slider-bottom"
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
  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
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
              Roya Moradkhani
            </p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white breadcrumb-color">
              <Link href="/">Main</Link>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle breadcrumb-color"></i>
            </li>
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white breadcrumb-color">
              <Link href="/shop">Product List</Link>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle breadcrumb-color"></i>
            </li>
            <li
              className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white breadcrumb-color"
              aria-current="page"
            >
              Single Product
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
                  <h4 className="text-3xl text-white leading-normal font-semibold mb-6">
                    Product Description
                  </h4>
                  <p className="text-white dark:text-white">
                    {singleProduct.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5">
              <div className="sticky top-20">
                <h5 className="text-lg font-semibold bg-slate-300 dark:bg-slate-300 shadow dark:shadow-gray-300 rounded-xl p-2 text-center">
                  Product Info :
                </h5>
                <dl className="grid grid-cols-12 mb-0 mt-4">
                  <dt className="md:col-span-4 col-span-5 mt-2 text-white">
                    Title :
                  </dt>
                  <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                    {singleProduct.title}
                  </dd>

                  <dt className="md:col-span-4 col-span-5 mt-2 text-white">
                    Price :
                  </dt>
                  <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                    {singleProduct.price}
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
