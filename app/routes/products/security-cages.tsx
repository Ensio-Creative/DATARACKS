import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/security-cages';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules"; // ✅ Add Autoplay here
import Accordion from '~/components/Accordion';


export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Security Cages | Dataracks"
        },
    ];
};

const SecurityCages = () => {

    const items = [
        {
            title: "What is a security cage in a data centre?",
            content: "A security cage is a physical enclosure designed to safeguard sensitive IT infrastructure by restricting unauthorised access. It’s an essential component of data centre security."
        },
        {
            title: "What are the benefits of a modular security cage?",
            content: "Modular cages offer scalability, easy assembly, and adaptability, allowing you to adjust configurations as your data centre evolves."
        }, {
            title: "Do the cages comply with security standards?",
            content: "Yes, our security cages meet industry security requirements and standards, ensuring reliable protection for your assets."
        },
        {
            title: "Can these cages accommodate airflow and cooling systems?",
            content: "Absolutely! Our cages are designed to integrate seamlessly with your data centre’s cooling and airflow management systems."
        }, {
            title: "Are custom sizes and designs available?",
            content: "Yes, all our security cages are fully customisable to fit your specific layout, size, and operational needs."
        }
    ]
    return (
        <>
            <Hero title="Modular Security Cages" image='/images/dataracks-security-cages-header.jpg' />
            <section className='max-w-7xl mx-auto px-4 py-32'>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div><p className='md:text-5xl text-3xl font-light'>Customisable Security Cages designed for IT equipment maximum protection </p></div>
                    <div className='text-[#595853]'>
                        <p>
                            Our security cages provide an adaptable,  secure solution to ensure the physical protection of your data centre’s  most sensitive areas. From secure partitioning systems to comprehensive  cage enclosures, our solutions are built to industry standards and  optimised for both functionality and scalability.
                            <br /> <br />
                            Each cage is constructed with durability, security, and performance in mind, featuring:
                            <br /> <br />

                            <ul className='list-disc ml-4 space-y-3'>
                                <li>Robust steel frames and panels</li>
                                <li>Modular designs for easy assembly and scalability</li>
                                <li>Various door types, including sliding and hinged options with auto-locking mechanisms</li>
                                <li>Tamper-proof components and airflow optimisation</li>
                            </ul>
                        </p>
                    </div>
                </div>

            </section>
            <section className='md:ml-24 mb-20'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.5}
                    draggable
                    // autoplay={{
                    //     delay: 4000, // 4 seconds between slides
                    //     disableOnInteraction: false, // keeps autoplay even when user interacts
                    // }}
                    // modules={[Autoplay]} // ✅ include Autoplay
                    loop={true}
                >
                    {[1, 2, 3].map(index => <SwiperSlide>
                        <img src={`/images/security-cage/dataracks-security-cage-${index}.jpg`} className='w-full' alt="" />
                    </SwiperSlide>)}
                </Swiper>
            </section>
            <section className='mb-20 grid md:grid-cols-2 '>
                <div className='bg-[#EAF4FF] md:px-24 md:py-24 px-4 py-10'>
                    <p className='text-md:5xl text-3xl font-light'>Key Features</p>
                    <ul className='text-[#595853] mt-4 list-disc space-y-3 ml-4'>
                        <li>Solid Steel Construction: Built from high-grade materials, our cages include reinforced panels, steel bolts, and tamper-resistant fastenings.</li>
                        <li>Customised Design: Tailor your security cages to fit your facility’s layout, size, and access requirements.</li>
                        <li>Secure Doors: Choose from sliding, hinged, or automatic doors with advanced locking mechanisms.</li>
                        <li>Integrated Airflow Management: Designed to optimise cooling efficiency while maintaining maximum security.</li>
                        <li>Optional Roof Enclosures: Add a roof for extra protection where required.</li>
                        <li>Fire Safety Compliance: Built to integrate with fire suppression systems, ensuring safety without compromising security.</li>
                    </ul>
                </div>
                <div className='bg-[#F5F5F5] md:px-24 md:py-24 px-4 pt-10'>
                    <p className='text-md:5xl text-3xl font-light'>Installation & Support</p>
                    <p className='my-4 text-[#595853]'>Our dedicated team provides a seamless installation experience with full support throughout the process:</p>
                    <ul className='text-[#595853] space-y-3 mt-4 list-disc ml-4'>
                        <li>Consultation: Work with our experts to design a solution that meets your specific security and operational needs.</li>
                        <li>Manufacturing: All cages are manufactured in the UK to ensure quality and compliance with safety standards.</li>
                        <li>Installation: Professionally installed by experienced technicians with minimal disruption to operations.</li>
                        <li>Post-Installation Support: Ongoing maintenance and support to ensure optimal performance.</li>
                    </ul>
                </div>
            </section>
            <section className='max-w-6xl mx-auto p-4 mb-20'>
                <p className='text-center md:text-5xl text-3xl pb-4 font-light'>Frequently Asked Questions</p>

                <Accordion items={items} />
            </section>
        </>
    );
};

export default SecurityCages;