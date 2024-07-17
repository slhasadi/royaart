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
            <source src="/assets/video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </Rodal>

      <section className="relative md:py-24 py-16 md:pt-0 pt-0">
        <div className="container relative">
          <div className="flex justify-center">
            <p className="text-slate-400 dark:text-white/60 text-[25px] w-full mt-4 text-center pb-20">
              I&#39;m a visual explorer, a photographer and graphic designer.
              always chasing the next creative challenge.I can unleash my unique
              perspective through the lens and the digital tools at my
              fingertips and my mindWhether it&#39;s capturing the world around
              me in a single frame or crafting bold, imaginative designs, the
              thrill of creation fuels my every step.
            </p>
          </div>
        </div>
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid grid-cols-1 md:text-start text-center justify-center">
                <div className="relative">
                  <img
                    src="/assets/video/video.png"
                    className="rounded-xl shadow-lg"
                    alt=""
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                    <a
                      href="#!"
                      onClick={() => {
                        setShowModal(true);
                        videoRef.current.play();
                      }}
                      data-type="youtube"
                      data-id="S_CGed6E610"
                      className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-500 dark:text-white"
                    >
                      <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content md:mt-10 mt-6">
                <div className="md:text-start text-center justify-center">
                  <div className="lg:col-start-2 lg:col-span-10">
                    <div className="flex justify-center">
                      <div className="flex justify-around w-full items-center flex-col gap-5 md:gap-0 md:flex-row text-md-start">
                        <a
                          href="https://spatial.io/s/Roya-Moradkhani-Fine-Art-Gallery-62835d3d13b87100012098c8?share=3068808455403664079"
                          target="_blank"
                        >
                          <div className="w-[200px] h-[62px] bg-[#fff] flex items-center justify-center  text-[#000] text-[32px] font-medium px-7 py-3 rounded-full cursor-pointer">
                            <span className="">Metaverse</span>
                          </div>
                        </a>
                        <a
                          href="https://foundation.app/@roya_moradkhani"
                          target="_blank"
                        >
                          <div className="w-[200px] h-[62px] bg-[#fff] flex items-center justify-center  text-[#000] text-[32px] font-medium px-7 py-3 rounded-full cursor-pointer">
                            <span className="">NFT</span>
                          </div>
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
