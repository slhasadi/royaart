"use client";
import React, { useEffect, useRef, useState } from "react";
import Rodal from "rodal";
const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<any>(null);

  return (
    <div>
      <Rodal
        visible={showModal}
        onClose={() => {
          setShowModal(false);
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }}
        className="bg-[#00000054] w-[100px] h-[600px]"
        customStyles={{
          backgroundColor: "#111",
          zIndex: "9999",
          padding: "40px",
        }}
      >
        <div className="w-full h-full bg-[#111]">
          <video className="w-full h-full" ref={videoRef}>
            <source
              src="/assets/video/ee50270e2a0815809bf5a92d1308015258333337-720p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Rodal>

      <section className="relative md:py-24 py-16 md:pt-0 pt-0">
        <div className="container relative my-20">
          <div className="grid grid-cols-1">
            <div>
              <span className="bg-orange-500 text-white text-[12px] font-medium px-4 py-1 rounded-xl h-5">
                Agency
              </span>
            </div>
            <h5 className="md:text-[42px] md:leading-normal text-3xl leading-normal font-bold mt-3">
              We Build and Scale Digital
              <span className="relative">
                Agency
                <img
                  src="assets/images/arrow.png"
                  className="w-full absolute end-0 block -rotate-[15deg] top-4 -z-1 opacity-70"
                  alt=""
                />
              </span>
            </h5>
            <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">
              Muvico is a Creative Agency & Startup Studio that provides Digital
              Products and Services turns to focus on client success.
            </p>
          </div>
        </div>
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid grid-cols-1 md:text-start text-center justify-center">
                <div className="relative">
                  <img
                    src="assets/images/bg/1.jpg"
                    className="rounded-xl shadow-lg"
                    alt=""
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                    <a
                      href="#!"
                      data-type="youtube"
                      data-id="S_CGed6E610"
                      className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-500 dark:text-white"
                    >
                      <i
                        className="mdi mdi-play inline-flex items-center justify-center text-2xl"
                        onClick={() => {
                          setShowModal(true);
                          videoRef.current.play();
                        }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content md:mt-10 mt-6">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                  <div className="lg:col-start-2 lg:col-span-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                      <div className="text-md-start">
                        <h6 className="text-white/50 font-medium">Team</h6>
                        <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white mt-2">
                          Well Experienced <br /> Team Member
                        </h3>
                      </div>

                      <div className="text-md-start">
                        <p className="text-white/50 max-w-xl mx-auto mb-2">
                          Muvico is a Creative Agency & Startup Studio that
                          provides Digital Products and Services turns to focus
                          on client success.
                        </p>
                        <a href="" className="text-white">
                          Read More <i className="mdi mdi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-orange-500/50 to-orange-500"></div>
      </section>
    </div>
  );
};

export default VideoSection;
