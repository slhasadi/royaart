"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "../components/header";
import Link from "next/link";
import { getAllCatalog, getCatalogForPortfolio } from "../network";
import { IMAGE_URL } from "../global";

const PortfolioListPage = () => {
  const [slider, setSlider] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [portList, setPortList] = useState([]);
  useEffect(() => {
    getCatalogForPortfolio().then((res) => {
      setPortList(res.data.listCategories);
    });
  }, []);
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
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
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white breadcrumb-color">
              Portfolio List
            </li>
          </ul>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        {portList.map((item: any, index: number) => {
          if (item.listCatalogs.length) {
            return (
              <div
                className="w-[95%] md:w-[80%] my-10 bg-[#49075330] p-2 md:p-5 rounded-md mt-20"
                key={index}
              >
                <div className="relative">
                  <div className="text-center py-5">
                    <h5 className="text-[28px] md:text-[48px] neon-text text-white font-bold mt-3">
                      {item.categoryName}
                    </h5>
                  </div>
                </div>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={0}
                  breakpoints={{
                    320: {
                      // width: 576,
                      slidesPerView: 1,
                    },
                    768: {
                      // width: 768,
                      slidesPerView: 3,
                    },
                  }}
                  pagination={pagination}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {item.listCatalogs.map((cat: any, i: number) => {
                    return (
                      <SwiperSlide key={i}>
                        <div
                          className="w-full p-3 picture-item mb-10"
                          data-groups='["branding"]'
                        >
                          <div className="group relative block overflow-hidden rounded-xl duration-500">
                            <Link href={`/portfolio-list/${cat.catalogId}`}>
                              <img
                                src={IMAGE_URL + cat.imagePath + cat.imageName}
                                className="group-hover:origin-center group-hover:scale-125 duration-500 product2-img"
                                alt=""
                              />
                              <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-xl"></div>

                              <div className="content duration-500">
                                <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                  <p className="h6 text-[22px] font-medium hover:text-orange-500 duration-500 ease-in-out text-[#fff]">
                                    {cat.title}
                                  </p>
                                  {/* <p className="text-slate-400 dark:text-white/60 mb-0">
                                Abstract
                              </p> */}
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            );
          }
          return <></>;
        })}
      </div>
    </>
  );
};

export default PortfolioListPage;
