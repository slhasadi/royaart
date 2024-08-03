"use client";
import React, { useEffect } from "react";
import Header from "../components/header";
import Link from "next/link";

const Cv = () => {
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
              CV
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
              Cv
            </li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-10 py-0">
        <div className="bg-dark-gray w-full min-h-screen">
          <div className="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between md:flex-no-wrap flex-wrap">
            <div className="w-full">
              {/* <section className="mt-16">
                <h3 className="uppercase text-white font-medium text-3xl">
                  EDUCATION
                </h3>
                <div className="h-1 bg-green w-48 my-4"></div>
                <p className="text-white">
                  I am a motivated team player and aspiring web developer with
                  great design and branding knowledge. My ultimate goal is to
                  grow my knowledge of the industry and use my conversational
                  skills to help fast-paced startup design UI/UX charismas.
                </p>
              </section> */}

              <section className="mt-16">
                <h3 className="uppercase text-white font-medium text-3xl">
                  EDUCATION
                </h3>
                <div className="h-1 bg-green w-48 my-4"></div>
                <ul className="text-white list-disc list-inside">
                  <li>
                    2020 - 2021 Graduate of Photography, Cinematography &amp;
                    Film Editing Honarhaye Moaser Institute,Tehran, Iran
                  </li>
                  <li>
                    2013 - 2016 Bachelors of Graphic Design University of
                    Applied Science and Technology, Isfahan, Iran
                  </li>
                  <li>
                    2010 - 2012 Associate of Graphic Design University of
                    Applied Science and Technology, Tehran, Iran
                  </li>
                </ul>
              </section>

              <section className="mt-16">
                <h3 className="uppercase text-white font-medium text-3xl">
                  WORK &amp; EMPLOYMENT
                </h3>
                <div className="h-1 bg-green w-48 my-4"></div>
                <ul className="text-white list-disc list-inside">
                  <li>2020 - Film Editor, Honarhaye Moaser Institute</li>
                  <li>2021-2022 Theater photographer</li>
                  <li>
                    2018 - Executive Secretary of 8th Photo Competition, Isfahan
                    Photo Club of Youth Cinema Society
                  </li>
                  <li>
                    2017 - Head of the Exhibitions’ Division ,Isfahan Photo Club
                    of Youth Cinema Society
                  </li>
                  <li>
                    2017 - Executive Secretary of Photo Festival ,Isfahan Photo
                    Club of Youth Cinema Society
                  </li>
                  <li>
                    2016 - Head of the Urban Photography Division ,Isfahan Photo
                    Club of Youth Cinema Society
                  </li>
                  <li>
                    2016 - Instructor of Mobile Photography Workshop , Isfahan
                    Photo Club of Youth Cinema Society
                  </li>
                </ul>
              </section>
            </div>

            <section className="mt-16">
              <h3 className="uppercase text-white font-medium text-3xl">
                ACTIVITIES
              </h3>
              <div className="h-1 bg-green w-48 my-4"></div>

              <ul className="text-white list-disc list-inside">
                <li>
                  Member of PPS ( Phoenix Photography Society ) (since 2023)
                </li>
                <li>
                  Member of NIPS ( National Iranian Photographers Society )
                </li>
                <li>
                  The fundamental of digital marketing, Google Digital Garage,
                  USA 2023
                </li>
                <li>
                  NFT artist https://foundation.app/@roya_moradkhani (since
                  2021)
                </li>
                <li>
                  Responsibility for scanning slides and negatives and archiving
                  old photos of professional photography (2020)
                </li>
                <li>
                  Independent Documentary Photographer in Earthquake 2017 and
                  Flood 2019 in Iran
                </li>
                <li>
                  Red Crescent News Photographer in Kermanshah Earthquake 2017
                </li>
                <li>
                  Member of Isfahan Photo Club of Youth Cinema Society
                  (2016-2018)
                </li>
                <li>
                  Documentary photographer of working children, Tolo’E Mehr
                  Dosti Institute 2016
                </li>
              </ul>
            </section>
            <section className="mt-16">
              <h3 className="uppercase text-white font-medium text-3xl">
                Exhibitions:
              </h3>
              <div className="h-1 bg-green w-48 my-4"></div>

              <ul className="text-white list-disc list-inside">
                <li>
                  2024 Art group exhibition of 2 nd Largest virtual Art Educa
                  contest “World Environment Day”, USA and Spain
                </li>
                <li>
                  2024 AFA’S Exhibition on KREATE.ART, NFT Group exhibition,
                  Canada and France
                </li>
                <li>
                  2024 Group exhibition of visual arts and crafts, “Roses” with
                  the cooperation of Palette Art Group, Denmark
                </li>
                <li>
                  2024 Selected in the Talented Winners awards Virginiatown of
                  the “Colors of Collaboration” Group exhibition, Ontario,
                  Canada
                </li>
                <li>
                  2024 NFT Art, group exhibition, in the photography category of
                  the NFTNYC2024, NYC, USA
                </li>
                <li>
                  2023 Group exhibition of visual arts and crafts, “Narratives
                  on canvas” with the cooperation of Mentativ Art Gallery and
                  Palette Art Group, Melbourne, Australia
                </li>
                <li>
                  2024 Group exhibition to creatively express the ability to
                  achieve peace through collaboration, Ontario, Canada
                </li>
                <li>
                  2023 Certificate of acceptance my photo in the Amu Darya
                </li>
                <li>
                  2023 International Exhibition of Photography, FIAP, PSA, Salon
                  photo, Tajikistan
                </li>
                <li>
                  2023 Group exhibition of visual arts, “Design of the work”,
                  with the cooperation of Aytist group, AYIMI and ADIB Institute
                  and Roma pulse group, Mexico
                </li>

                <li>
                  2023 Group exhibition of visual arts, “Symphony of color”,
                  with the cooperation of Bloom Art society, Roma pulse and
                  Luminart Art Group, Netherlands
                </li>
                <li>
                  2023 Group exhibition of visual arts, Al-Reyhan institute,
                  Oman
                </li>
                <li>
                  2023 1st international Group Art exhibition in the art space,
                  Magma Art, Turkey
                </li>
                <li>
                  2023 Art Talk, my photo collection in a multiculture center in
                  the November’s “world artists in the spotlight”, Ontario,
                  Canada
                </li>
                <li>2023 Group Art exhibition, Galeri Art’s, Turkey</li>
                <li>2023 NFT Art, group exhibition, Mondoir Gallery, Dubai</li>
                <li>
                  2023 selection my photo in the IOTF international online
                  theater festival of America for “Opheliation” theater group,
                  USA
                </li>
                <li>
                  2021 NFT Photography, group exhibition, Aknon art gallery,
                  Isfahan, Iran
                </li>
                <li>
                  2020 Abstraction Photography, group exhibition, loosen art
                  gallery, Rome, Italy
                </li>
                <li>
                  2020 Photography, group exhibition, Blue Gallery, Berlin,
                  Germany
                </li>
                <li>
                  2020 Documentary photography, group exhibition, Theme gallery,
                  Tehran, Iran
                </li>
                <li>
                  2019 Documentary photography, group exhibition, 14 gallery,
                  Tehran, Iran
                </li>
                <li>
                  2018 Photo group exhibition, Peace relations between Iran and
                  Armenia, Art Museum Armenia
                </li>
                <li>
                  2018 Documentary photography, group exhibition, Mellat
                  Cineplex gallery, Tehran, Iran
                </li>
                <li>
                  2018 Photo and multi-media group exhibition, the
                  “Environmental force” project, Negaresh Gallery, Isfahan, Iran
                </li>
                <li>
                  2017 Documentary photography, group exhibition, Edeh Parsi
                  gallery, Tehran, Iran
                </li>
                <li>
                  2017 7th photo group exhibition Photographers Association,
                  Bayan Gallery, Isfahan, Iran
                </li>
                <li>
                  2017 Photo group exhibition, Mashrouteh House of Isfahan
                  Gallery, Isfahan, Iran
                </li>
                <li>
                  2017 Photo group exhibition, Nowruz photo, Esfahan Central
                  Library gallery, Iran
                </li>
                <li>
                  2017 Documentary group exhibition, old house Naeen, Isfahan,
                  Iran
                </li>
                <li>
                  2016 Photo group exhibition, city center gallery, Isfahan,
                  Iran
                </li>
                <li>
                  2015 Photo group exhibition, city center gallery, Isfahan,
                  Iran
                </li>
              </ul>
            </section>
            <section className="mt-16">
              <h3 className="uppercase text-white font-medium text-3xl">
                PUBLICATIONS:
              </h3>
              <div className="h-1 bg-green w-48 my-4"></div>

              <ul className="text-white list-disc list-inside">
                <li>
                  Photo printing in the Book of “world Artists in the
                  Spotlight”, Canada
                </li>
                <li>Photo printing in Swap magazine, Berlin Germany</li>
                <li>Printing in Loosenart magazine, Rome Italy</li>
                <li>
                  Print photo in 3rd Kadr magazine (Mobilegraphy title), Iran
                </li>
                <li>Photo printing in Ghaab magazine (Wall titled), Iran</li>
                <li>Photo printing in Ghaab magazine (War title), Iran</li>
                <li>Photo printing in Ghaab magazine (Free title), Iran</li>
                <li>Photo printing in Ghaab magazine (Route title), Iran</li>
                <li>
                  Publish a photo on 24 Hours Project web (Woman and humanity
                  title)
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cv;
