import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/server-cabinets';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Aisle Containment | Dataracks"
        },
    ];
};

const AisleContainment = () => {
    const data = [
        {
            title: "Cold Aisle Containment",
            image: "/images/aisle-containment/dataracks-cold-aisle-containment.jpg"
        },
        {
            title: "Hot Aisle Containment",
            image: "/images/aisle-containment/dataracks-hot-aisle-containment.jpg"
        },
        {
            title: "Active Roof",
            image: "/images/aisle-containment/dataracks-active-roof.jpg"
        },
        {
            title: "Shrink Roof",
            image: "/images/aisle-containment/dataracks-shrink-roof.jpg"
        }
    ]
    return (
        <>
            <Hero title="Aisle Containment" image='/images/dataracks-aisle-header.jpg' />
            <section className='max-w-7xl mx-auto px-4 py-20'>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div><p className='md:text-5xl text-3xl font-light'>Maximize uptime & efficiency with custom Aisle Containment solutions</p></div>
                    <div className='text-[#595853]'>
                        <p>Data centres face growing pressure to reduce energy consumption without  compromising uptime. At Dataracks, we specialise in bespoke hot and cold aisle containment systems engineered to improve thermal efficiency,  enhance cooling performance, and deliver measurable cost savings.
                            <br /> <br />
                            Our custom-built solutions are designed to:
                            <br /> <br />
                            <ul className='list-disc list-inside'>
                                <li>Reduce energy usage and cooling costs.</li>
                                <li>Eliminate hot spots and optimise airflow.</li>
                                <li>Improve Power Usage Effectiveness (PUE)</li>
                                <li>Support your sustainability goals with a lower carbon footprint</li>
                            </ul>
                            <br /> 
                            Whether you’re upgrading an existing facility or building from the ground up,  our containment systems can be tailored to meet your specific layout and cooling requirements. We also offer a full survey and installation  service to ensure maximum performance.
                            <br /> <br />
                            You can find out more about both hot aisle and cold aisle containment below. If you’re focused on one over the other, dedicated  pages with in-depth information are available. Have questions or need a  quote? Contact us today — we’re here to help.</p>
                    </div>
                </div>

                <div className='pt-20'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {data.map((item, index) => (
                            <div key={index} className='bg-[#EAF4FF]'>
                                <img src={item.image} alt={item.title} className='w-full object-cover' />
                                <div className='p-6'>
                                    <h3 className='text-xl'>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
};

export default AisleContainment;