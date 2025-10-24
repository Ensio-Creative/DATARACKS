import Hero from "~/components/Hero";
import type { Route } from "./+types/home";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router";
import { ArrowRight, MoveRight } from "lucide-react";
import Marquee from "react-fast-marquee";


export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "Dataracks | Data center and telecom solutions"
    },
  ];
}

export const solutions = [
  {
    title: "OEM & Contract Manufacture",
    image: "dataracks-oem-contract-&-manufacture.jpg"
  },
  {
    title: "Rail Solutions",
    image: "dataracks-rail-solutions.jpg"
  },
  {
    title: "Road Solutions",
    image: "dataracks-road-solutions.jpg"
  },
  {
    title: "Energy Solutions",
    image: "dataracks-energy-solutions.jpg"
  },
  {
    title: "Data Centre Solutions",
    image: "dataracks-data-centre-solutions.jpg"
  },
  {
    title: "Fixed Telecom Solutions",
    image: "dataracks-fixed-telecom-solutions.jpg"
  },
  {
    title: "Mobile Telecom Solutions",
    image: "dataracks-mobile-telecom-solutions.jpg"
  },
  {
    title: "Defense Solutions",
    image: "dataracks-defense-solutions.jpg"
  }
]

export default function Home() {

  const services = [
    "Design",
    "Manufacturing",
    "Expert Advise",
    "Delivery & Installation"
  ];

  function stringToSlug(text: string): string {
    return text
      .toLowerCase() // convert to lowercase
      .trim() // remove leading/trailing spaces
      .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric chars
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // collapse multiple hyphens
  }
  return <>
    <Hero />

    {/* <section className="max-w-5xl mx-auto my-32 px-4">
      <h1 className="md:text-5xl text-3xl font-light text-center">From server cabinets to aisle containment and security cages, Dataracks designs and manufactures complete data centre solutions engineered for performance, efficiency, and sustainability.</h1>
    </section> */}

    <section className="bg-[#F5F5F5] py-20">
      <div className="relative">
        <img
          src="/images/dataracks-story.jpg"
          alt="Data centre"
          className="md:w-[70%] object-cover"
        />
        <div className="md:absolute md:bg-white my-auto px-10 py-20 max-w-xl text-left right-32 bottom-0 top-0 md:h-[60%]">
          <h3 className="text-4xl font-light mb-4">Our Story</h3>
          <p className="text-[#595853] text-base leading-relaxed">
            Backed by decades of industry experience, Dataracks leads the way in designing and manufacturing high-performance data centre infrastructure trusted by clients worldwide. From concept to installation, we deliver reliable, flexible, and energy-efficient solutions that power the world’s most advanced data facilities.
          </p>
          <button className="mt-6 text-[#0F0765] border border-[#0F0765] px-6 py-3 text-sm">Learn more</button>
        </div>
      </div>

    </section>

    <section className="max-w-7xl mx-auto py-20 p-4">
      <h3 className="text-4xl font-light mb-4">Our Solutions</h3>

      <div className="grid md:grid-cols-6 gap-4">
        {solutions.map((single, index) => (
          <div
            key={index}
            className={`relative ${index === 3 || index === 4 ? "col-span-3" : "md:col-span-2 col-span-3"
              }`}
          >
            <img
              src={`/images/solutions/${single.image}`}
              alt={single.title}
              className="w-full h-full object-cover"
            />
            <div className="flex absolute justify-between w-full right-0 left-0 bottom-0 p-4 text-white">
              <p className="text-xl w-1/2">{single.title}</p>
              <MoveRight />
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto p-4">
        <div>
          <h3 className="text-4xl font-light mb-4">Our Services</h3>
          <p className="text-[#595853]">From design to installation, we provide an end-to-end services <br />
            for performance, efficiency, and sustainability.</p>
        </div>

        <div className="grid md:grid-cols-4  gap-6 mt-8">
          {services.map((single, index) => <div key={index} className="bg-white p-8">
            <p className="text-xl text-[#595853] font-light">{single}</p>

            <button className="flex gap-4 mt-32">
              <span>Explore</span>
              <ArrowRight className="" />
            </button>
          </div>)}
        </div>
      </div>

    </section>


    <section className="py-20">
      <div className="text-center p-4">
        <h3 className="text-4xl font-light mb-4">Trusted by Top Companies</h3>
        <p className="text-[#595853]">We have blue-chip client base, which includes major names in <br /> the IT and telecoms sectors.</p>
      </div>

      <div className="overflow-hidden w-full mt-10 flex justify-center">
        <div className="w-[100%]">
          <Marquee pauseOnHover={true} gradient={false} speed={40}>
            <div className="flex items-center py-4">
              {[
                "/images/companies/sky-logo.jpg",
                "/images/companies/vodafone-logo.jpg",
                "/images/companies/aws-logo.jpg",
                "/images/companies/data-4-logo.jpg",
                "/images/companies/airsys-logo.jpg",
                "/images/companies/datum-logo.jpg",
                "/images/companies/JCA-Engineering-logo1.jpg",
                "/images/companies/lunar-digital-logo.jpg",
                "/images/companies/secure-it-environment-logo.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="border border-[#CFCFCF] bg-white mx-4 p-4 flex items-center justify-center w-[300px] h-[100px] shrink-0"
                >
                  <img
                    src={src}
                    alt="company logo"
                    className="object-contain h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

    </section>
    {/* <section className="max-w-7xl mx-auto py-20 px-4">
      <h3 className="md:text-4xl text-3xl mb-10 font-light">Our Products</h3>
      <div className="md:grid md:grid-cols-2 gap-6">
        {products.map((p, index) => (
          <div key={p.name} className={`${index === 0 && "col-span-2"} relative group`}>
            <Link to={`/products/${stringToSlug(p.name)}`}>
              <img src={p.img} alt={p.name} className="w-full md:h-full h-80 object-cover md:my-0 my-4" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white md:text-4xl text-2xl font-light">{p.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section> */}

    {/* <section className="max-w-7xl mx-auto md:pt-20 pb-20 px-4">
      <h3 className="md:text-4xl text-3xl mb-10 font-light">Our Sectors</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {sectors.map((p, index) => (
          <div key={p} className={`relative group`}>
            <img src={`/images/sectors/dataracks-home-${index + 1}.jpg`} alt={p} className="w-full" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-2xl font-light">{p}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}

    <section id="testimonials" className="relative mt-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/dataracks-cold-aisle-containment-1.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F0765CC]"></div>

      {/* Content */}
      <div className="relative max-w-xl mx-auto text-center py-32 text-white">
        <h1 className="text-4xl font-light">
          Don’t Just Take
          Our <br /> Word For It
        </h1>
        <p>Read what our clients have to say.</p>

        <div className="text-[#0F0765] mt-10 bg-[#EAF4FF] p-16">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="h-58">
                <p className="text-xl font-light">
                  I received a very large supply and install of cold aisle containment from Dataracks.
                  Very happy with the quality, price and customer service. Good work team!
                </p>
                <p className="my-4">Antaeus Wheatley</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-58">
                <p className="text-xl font-light">
                  We are extremely satisfied with the high-quality products and exceptional service provided by Dataracks UK.
                  We highly recommend them for their reliability and professionalism.
                </p>
                <p className="my-4">Taoufi ZERAIDI</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

  </>;
}
