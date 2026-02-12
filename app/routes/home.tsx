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
    title: "OEM and Contract Manufacture",
    image: "dataracks-oem-contract-&-manufacture.jpg",
    content: (
      <div>
        <p className='my-6 text-[#0F0765] text-4xl font-light'>Expertise in OEM Partnerships</p>
        <p>
          Dataracks brings extensive experience collaborating with original equipment manufacturers (OEMs) that deliver advanced systems for indoor applications. With decades of industry expertise, we understand the challenges of protecting sensitive electronic equipment in environments where reliability and performance are critical.
          <br /> <br />
          In partnership with your engineering and product development teams, we design and manufacture enclosures tailored precisely to your requirements. Every solution is engineered with precision, using high-quality materials and manufacturing processes to meet industry standards and withstand the demands of your operating environment.
          <br /> <br />

          Our experts work to optimise your entire system—enhancing reliability, maximising performance, and reducing total cost of ownership (ToC). By combining mechanical design excellence with practical engineering insight, we ensure your assets perform at their best throughout their lifecycle.
          <br /> <br />

          Our application expertise spans a wide range of environments, including telephone exchanges, data centres, agricultural sites, electricity substations, solar and wind farms. Whether it’s thermal management, ingress protection, or custom integration, our enclosures are built to perform wherever your technology operates.
          <br /> <br />

          Beyond product design, Dataracks provides full support from concept to delivery, including prototyping, testing, and certification. Our flexible manufacturing capability allows us to deliver both standard and fully customised solutions, helping you bring your products to market quickly and confidently.
        </p>
      </div>
    )
  },
  // {
  //   title: "Rail Solutions",
  //   image: "dataracks-rail-solutions.jpg",
  //   content: (
  //     <div>
  //       <p className='my-6 text-[#0F0765] text-3xl font-light'>Precision-Built Cabinets for Critical Roadside Systems</p>
  //       <p>
  //         For our rail customers, we offer a comprehensive range of enclosures engineered to meet the demanding requirements of the railway environment. Our portfolio includes enclosures designed to Network Rail PA05 specifications, as well as SISS/CIS cabinets and location cases (LOCs) for housing telecom, signalling, and switchgear equipment.
  //         <br /> <br />
  //         Our engineering team has extensive experience delivering enclosure solutions for rail projects across the UK. We design and manufacture in full compliance with Rail Industry standards, ensuring safety, reliability, and long-term performance in the field.
  //         <br /> <br />

  //         As a registered supplier under the RISQS (Railway Industry Supplier Qualification Scheme) and proud members of the Rail Alliance, Dataracks operates to ISO 9001 quality management standards, guaranteeing consistent quality and traceability.
  //         <br /> <br />

  //         Our BR440, 19”, and ETSI format racks, cabinets, and location cases are deployed in a wide range of rail applications — including station information and security (CCTV), Wi-Fi control systems, car park ANPR, train monitoring, and signalling infrastructure.
  //       </p>
  //       <div className='md:flex gap-4 my-6 text-center'>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/dataracks-rail-solutions/dataracks-cabinet-commsafe1.jpg" alt="" className='w-full' />
  //           </div>
  //           <p className="my-3">COMMSAFE™</p>
  //         </div>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/dataracks-rail-solutions/dataracks-cabinet-tracksafe1.jpg" alt="" className='w-full md:mt-0 mt-4' />
  //           </div>
  //           <p className="my-3">TRACKSAFE™</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // },
  // {
  //   title: "Road Solutions",
  //   image: "dataracks-road-solutions.jpg",
  //   content: (
  //     <div>
  //       <p className='my-6 text-[#0F0765] text-3xl font-light'>Precision-Built Cabinets for Critical Roadside Systems</p>
  //       <p>
  //         Our roadside cabinets are expertly engineered to deliver exceptional protection for vital roadside infrastructure. Built for durability and reliability, they safeguard a wide range of critical equipment — including ANPR and CCTV systems, traffic sign and signal controllers, instrumentation, power and communications marshalling, control panels, pumps, and other essential roadside components.
  //         <br /> <br />
  //         Every cabinet is designed to withstand the challenges of outdoor environments, offering protection against weather, corrosion, vibration, and vandalism. With a focus on long-term performance, our enclosures ensure that sensitive systems remain operational and secure in even the most demanding conditions.
  //         <br /> <br />

  //         Our extensive range of housing solutions includes roadside and streetside cabinets, EMC- and high IP-rated enclosures, temperature-controlled units, anti-vandal designs, and telecom cabinets. Each solution is engineered with precision to meet industry standards and tailored to suit the specific technical requirements of your project.
  //         <br /> <br />
  //         We combine advanced materials, proven manufacturing processes, and rigorous quality control to guarantee structural integrity and reliability across every unit. From design to delivery, our experienced teams work closely with clients to create enclosure systems that are functional, adaptable, and future-ready.
  //       </p>
  //       <div className='md:flex gap-4 my-6 text-center'>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/dataracks-rail-solutions/dataracks-roadside-cabinets.jpg" alt="" className='w-full' />
  //           </div>
  //           <p className="my-3">Road Cabinets</p>
  //         </div>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/dataracks-rail-solutions/dataracks-ev-charging-enclosures.jpg" alt="" className='w-full md:mt-0 mt-4' />
  //           </div>
  //           <p className="my-3">EV Charging Enclosures</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // },
  // {
  //   title: "Energy Solutions",
  //   image: "dataracks-energy-solutions.jpg",
  //   content: (
  //     <div>
  //       <p className='my-6 text-[#0F0765] text-3xl font-light'>Enclosure Solutions for the Energy Sector</p>
  //       <p>
  //         We design and manufacture high-performance energy enclosures engineered to ensure the safe, reliable, and efficient operation of modern power and energy infrastructure. Our solutions protect critical electrical equipment, control systems, and sensitive components used in power generation, distribution, storage, and renewable energy applications.
  //         <br /> <br />
  //         Our energy enclosure designs are developed with the needs of energy providers, utilities, and renewable power operators in mind—offering easy access to batteries and components, simplified maintenance, and robust protection against environmental challenges such as temperature extremes, dust, moisture, and mechanical impact.
  //         <br /> <br />

  //         Dataracks offers a comprehensive range of energy infrastructure enclosures, including:
  //         <br /> <br />
  //       </p>
  //       <ul className='list-disc ml-4'>
  //         <li>Marshalling kiosks and remote interface kiosks</li>
  //         <li> UPS enclosures and battery storage cabinets</li>
  //         <li>Outdoor electrical enclosures for EV and FCEV charging systems</li>
  //         <li> EV charging feeder pillars</li>
  //         <li>Hydrogen power and fuel cell enclosures</li>
  //         <li> CCTV, utility, and monitoring enclosures</li>
  //       </ul>
  //       <br /> <br />

  //       <p>
  //         Each enclosure is engineered and manufactured in the UK to meet stringent industry and safety standards, providing long- term durability, thermal stability, and ingress protection in demanding outdoor or onshore environments.
  //         < br /> <br />

  //         Our commitment to innovation, compliance, and quality manufacturing makes Dataracks a trusted partner for energy network operators, OEMs, and infrastructure providers seeking dependable, scalable, and sustainable enclosure solutions.
  //       </p>
  //       <div className='grid md:grid-cols-2 md:gap-20 gap-4 my-6 text-center'>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/emergy-solutions/dataracks-AMI1.jpg" alt="" className='' />
  //           </div>
  //           <p className="my-3">AMI Smart Grid Cabinets</p>
  //         </div>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/emergy-solutions/energy-storage.jpg" alt="" />
  //           </div>
  //           <p className="my-3">Energy Storage Enclosure</p>
  //         </div>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/emergy-solutions/dataracks-hydrogen-battery-enclosure.jpg" alt="" className='' />
  //           </div>
  //           <p className="my-3">Hydrogen Battery Enclosure </p>
  //         </div>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/emergy-solutions/dataracks-marshalling-kiosk.jpg" alt="" className='' />
  //           </div>
  //           <p className="my-3">Marshal Kiosk </p>
  //         </div>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/emergy-solutions/dataracks-renewable-energy-enclosures1.jpg" alt="" className='' />
  //           </div>
  //           <p className="my-3">Renewable Energy Enclosures </p>
  //         </div>
  //       </div>
  //     </div >
  //   )
  // },
  {
    title: "Data Centre Solutions",
    image: "dataracks-data-centre-solutions.jpg",
    content: (
      <div>
        <p className='my-6 text-[#0F0765] text-4xl font-light'>Engineered Data Centre Infrastructure</p>
        <p>
          With more than three decades of manufacturing expertise, Dataracks delivers globally certified, high-performance data centre infrastructure designed for scalability, operational efficiency, and long-term reliability. Our engineering capability covers racks, aisle containment systems, and modular equipment buildings, all developed to integrate seamlessly across enterprise, colocation, and hyperscale environments.
          <br /> <br />

          Each solution is underpinned by advanced engineering and automation, supported by core competencies in thermal management. This ensures consistent performance and compliance for operators, integrators, and OEMs seeking a proven alternative to legacy systems.
          <br /> <br />

          At Dataracks, we understand that every data centre presents unique operational challenges. Rather than relying on standard catalogue products, we engineer rack and aisle containment solutions tailored to specific environmental and performance requirements.
          <br /> <br />
          Manufactured entirely within our UK facility, our products are built on proven mechanical and electrical designs, combining flexibility, resilience, and performance for mission-critical applications where uptime and reliability are non-negotiable.
        </p>
        <div className='md:flex gap-4 my-6 text-center'>
          <div>
            <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
              <img src="/images/dataracks-rail-solutions/dataracks-data-centre-racks1.jpg" alt="" className='w-full' />
            </div>
            <p className="my-3">Data Centre Racks</p>
          </div>
          <div>
            <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
              <img src="/images/dataracks-rail-solutions/dataracks-aisle-containment1.jpg" alt="" className='w-full md:mt-0 mt-4' />
            </div>
            <p className="my-3">Aisle Containment</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Fixed Telecom Solutions",
    image: "dataracks-fixed-telecom-solutions.jpg",
    content: (
      <div>
        <p className='my-6 text-[#0F0765] text-4xl font-light'>Fixed Telecom Infrastructure Solutions</p>
        <p>
          Dataracks provides advanced telecom enclosure solutions engineered to meet the demands of modern fixed network infrastructure. Our product range includes outdoor telecom cabinets, streetside broadband enclosures for FTTx networks such as FTTP, FTTC, and FTTH, as well as indoor 19” rack systems, overhead cable management, and hot and cold aisle containment systems for high-performance data environments.
          <br /> <br />
          We specialise in the design and manufacture of durable, precision-engineered enclosures that protect critical telecom and networking equipment in both remote outdoor installations and indoor facilities. Each solution is built to support the evolving needs of telecom network providers, OEMs, and infrastructure operators, ensuring compliance with global industry standards and reliable long-term performance.
          <br /> <br />

          Our enclosures feature advanced thermal management systems, high ingress protection (IP) ratings, and enhanced physical security to guard against environmental stress, vandalism, and unauthorised access. Designed for maximum equipment uptime, Dataracks streetside telecom cabinets and indoor rack solutions provide secure, scalable platforms for active and passive network components—ensuring consistent performance across all deployment environments.
        </p>
        {/* <div className='md:flex gap-4 my-6 text-center'>
          <div>
            <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
              <img src="/images/dataracks-rail-solutions/dataracks-indoor-racks-cabinets1.jpg" alt="" className='w-full' />
            </div>
            <p className="my-3">Indoor Racks & Cabinets</p>
          </div>
          <div>
            <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
              <img src="/images/dataracks-rail-solutions/dataracks-outdoor-cabinets.jpg" alt="" className='w-full md:mt-0 mt-4' />
            </div>
            <p className="my-3">Street Cabinets</p>
          </div>
        </div> */}
      </div>
    )
  },
  {
    title: "Mobile Telecom Solutions",
    image: "dataracks-mobile-telecom-solutions.jpg",
    content: (
      <div>
        <p className='my-6 text-[#0F0765] capitalize text-4xl font-light'>Future-ready mobile telecom solutions</p>
        <p>
          We offer comprehensive UK-based production of cabinets, enclosures, and open-frame systems designed to meet the evolving demands of the telecoms industry. Our manufacturing capabilities support indoor applications, covering the full spectrum of mobile and wireless network technologies including GSM, GSM-R, LTE, 3G, 4G, 5G Radio Access Networks (RAN), WiMAX, and Wi-Fi.
          <br /> <br />

          With a deep understanding of the challenges facing network operators and equipment providers, we design and engineer enclosure solutions that combine innovation, strength, and functionality. Every product we produce reflects our commitment to performance and durability, ensuring reliable operation in a wide range of environmental and operational conditions.
          <br /> <br />

          For indoor applications, our ETSI, Fibre Racks, and 19-inch telecom racks provide a secure and organised platform for housing essential telecoms and networking components. Engineered for accessibility, load capacity, and airflow, these racks help optimise performance while simplifying equipment integration and maintenance.
          <br /> <br />
          Every enclosure and rack we manufacture is built with security and resilience in mind. From vandal-resistant construction to rigorous testing and compliance with industry standards, we ensure our solutions safeguard your infrastructure and sustain network performance—today and into the future. </p>
        {/* <div className='md:flex gap-4 my-6 text-center'>
          <div>
            <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
              <img src="/images/dataracks-rail-solutions/dataracks-indoor-racks-cabinets1.jpg" alt="" className='w-full' />
            </div>
            <p className="my-3">Indoor Racks & Cabinets</p>
          </div>
          <div>
            <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
              <img src="/images/dataracks-rail-solutions/dataracks-outdoor-cabinets.jpg" alt="" className='w-full md:mt-0 mt-4' />
            </div>
            <p className="my-3">Street Cabinets</p>
          </div>
        </div> */}
      </div>
    )
  },
  // {
  //   title: "Defense Solutions",
  //   image: "dataracks-defense-solutions.jpg",
  //   content: (
  //     <div>
  //       <p className='my-6 text-[#0F0765] text-3xl font-light'>Advanced Enclosure Solutions for Defence Applications</p>
  //       <p>
  //         Dataracks designs and manufactures robust enclosure systems tailored for defence settings, built to withstand electromagnetic attacks, cyber threats, and severe environmental stressors.
  //         <br /> <br />
  //         Working to exacting MIL-STD and DEF-STAN requirements, we support Ministry of Defence primes and their supply chains with solutions that meet formal defence procurement standards. Our approach blends advanced engineering, pragmatic COTS value-engineering and proven high-volume production methods to deliver cost-effective, military-grade hardware.
  //         <br /> <br />

  //         The portfolio covers a broad spectrum of defence needs: shipboard and airborne cabinets, command-and-control consoles, naval housings, TEMPEST/EMP/EMI shielded racks, low-magnetic cabinets and SATCOM enclosures. Each product is purpose-designed for long-term reliability in environments featuring high temperatures, salt spray, vibration and intense electromagnetic activity.
  //         <br /> <br />

  //         For naval electronics, we produce rugged enclosures for LANs, satellite communications and weapons systems that tolerate the rigours of life at sea while maintaining secure performance.
  //         <br /> <br />

  //         Additionally, our Vanquish series offers modular, ready-to-deploy indoor racks and cabinets that simplify expansion and modernisation of telecom infrastructure without excessive cost or lead time.
  //       </p>
  //       <div className='md:flex gap-4 my-6 text-center'>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/dataracks-rail-solutions/dataracks-naval-enclosures1.jpg" alt="" className='w-full' />
  //           </div>
  //           <p className="my-3">Naval Enclosures</p>
  //         </div>
  //         <div>
  //           <div className='border border-[#CFCFCF] flex justify-center p-4 md:h-full'>
  //             <img src="/images/dataracks-rail-solutions/dataracks-land-and-infrastructure-systems1.jpg" alt="" className='w-full md:mt-0 mt-4' />
  //           </div>
  //           <p className="my-3">Land & Infrastructure Systems</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
]

export function stringToSlug(text: string): string {
  return text
    .toLowerCase() // convert to lowercase
    .trim() // remove leading/trailing spaces
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric chars
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // collapse multiple hyphens
}

export default function Home() {

  const services = [
    "Design",
    "Manufacturing",
    "Expert Advise",
    "Delivery & Installation"
  ];


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
          <Link to={'/about'}>
            <button className="mt-6 text-[#0F0765] capitalize border border-[#0F0765] px-6 py-3 text-sm">Learn more</button>
          </Link>
        </div>
      </div>

    </section>

    <section className="max-w-7xl mx-auto py-20 p-4">
      <h3 className="text-4xl font-light mb-4">Our Solutions</h3>

      <div className="grid md:grid-cols-5 gap-4">
        {solutions.map((single, index) => (
          <div
            key={index}
            className={`relative ${index === 0 || index === 3 ? "col-span-3" : "md:col-span-2 col-span-3"
              }`}
          >
            <img
              src={`/images/solutions/${single.image}`}
              alt={single.title}
              className="w-full lg:h-96 object-cover"
            />
            <Link to={`/solutions/${stringToSlug(single.title)}`}>
              <div className="flex absolute justify-between w-full right-0 left-0 bottom-0 p-4 text-white">
                <p className="text-xl w-1/2">{single.title}</p>
                <MoveRight />
              </div>
            </Link>
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

            <Link to={'/services'}>
              <button className="flex gap-4 mt-32">
                <span>Explore</span>
                <ArrowRight className="" />
              </button>
            </Link>
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
