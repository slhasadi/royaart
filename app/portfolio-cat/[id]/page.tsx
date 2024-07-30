"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "../../components/header";
import Link from "next/link";
import { getAllCatalog, getCatalogForPortfolio } from "../../network";
import { IMAGE_URL } from "../../global";

const PortfolioListPage = ({ params }: { params: { id: any } }) => {
  const [slider, setSlider] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [portList, setPortList] = useState({} as any);
  useEffect(() => {
    getCatalogForPortfolio().then((res) => {
      const filterCats = res.data.listCategories.filter(
        (item: any) => item.categoryId == params.id
      )[0];

      setPortList(filterCats);
    });
  }, []);
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
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
      {Object.keys(portList).length > 0 && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-[95%] md:w-[80%] my-10 bg-[#49075330] p-2 md:p-5 rounded-md mt-20">
            <div className="relative">
              <div className="text-center py-5">
                <h5 className="text-[28px] md:text-[48px] neon-text text-white font-bold mt-3">
                  {portList?.categoryName}
                </h5>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {portList?.listCatalogs.map((cat: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="p-3 picture-item-21 mb-10 lg:w-[300px] h-[180px] md:h-[180px] picture-item"
                    data-groups='["branding"]'
                  >
                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                      <Link href={`/portfolio-list/${cat.catalogId}`}>
                        <img
                          src={IMAGE_URL + cat.imagePath + cat.imageName}
                          className="group-hover:origin-center w-[500px] h-full group-hover:scale-125 duration-500 product-img"
                          alt=""
                        />
                        <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-xl"></div>

                        <div className="content duration-500">
                          <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                            <p className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out text-[#fff]">
                              {cat.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioListPage;
