import Hero from "~/components/Hero";
import type { Route } from "./+types/home";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "Dataracks | Data center and telecom solutions"
    },
  ];
}

export default function Home() {
  const products = [
    { name: "Server Cabinets", img: "/images/dataracks-home-server-cabinets-product.jpg" },
    { name: "Aisle Containment", img: "/images/dataracks-home-aisle-containment.jpg" },
    { name: "Security Cages", img: "/images/dataracks-home-security-cages-product.jpg" },
  ];

  const sectors = [
    "Data Centres",
    "Telecom",
    "Energy",
    "Rail",
    "Defence",
    "Road",
  ];

  return <>
    <Hero />

    <section className="max-w-7xl mx-auto my-32 px-4">
      <h1 className="text-5xl font-light text-center">From server cabinets to aisle containment and security cages, Dataracks designs and manufactures complete data centre solutions engineered for performance, efficiency, and sustainability.</h1>
    </section>

    <section className="bg-[#EAF4FF] py-20">
      <div className="relative">
        <img
          src="/images/dataracks-story.jpg"
          alt="Data centre"
          className="w-[70%] object-cover"
        />
        <div className="absolute bg-white my-auto p-10 max-w-xl text-left right-32 bottom-0 top-0 h-96">
          <h3 className="text-4xl font-light mb-4">Our Story</h3>
          <p className="text-[#595853] text-base leading-relaxed">
            Backed by decades of industry experience, Dataracks leads the way in designing and manufacturing high-performance data centre infrastructure trusted by clients worldwide. From concept to installation, we deliver reliable, flexible, and energy-efficient solutions that power the world’s most advanced data facilities.
          </p>
          <button className="mt-4 text-[#595853] border border-[#595853] px-6 py-3 text-sm">Learn more</button>
        </div>
      </div>

    </section>

    <section className="max-w-7xl mx-auto py-20 px-4">
      <h3 className="text-4xl mb-4 font-light">Our Products</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p, index) => (
          <div key={p.name} className={`${index === 0 && "col-span-2"} relative group`}>
            <img src={p.img} alt={p.name} className="w-full" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-4xl font-light">{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto py-20 px-4">
      <h3 className="text-4xl mb-4 font-light">Our Sectors</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {sectors.map((p, index) => (
          <div key={p} className={`relative group`}>
            <img src={`/images/sectors/dataracks-home-${index + 1}.jpg`} alt={p} className="w-full" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-xl font-light">{p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="testimonials" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/dataracks-cold-aisle-containment-1.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F07654D]"></div>

      {/* Content */}
      <div className="relative max-w-xl mx-auto text-center py-32 text-white">
        <h1 className="text-4xl font-light">
          Don’t Just Take <br />
          Our Word For It
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
              <div className="">
                <p className="text-xl font-light">
                  I received a very large supply and install of cold aisle containment from Dataracks.
                  Very happy with the quality, price and customer service. Good work team!
                </p>
                <p className="my-4">Antaeus Wheatley</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
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
