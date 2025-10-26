import React from 'react';
import type { Route } from './+types/electromechanical-solutions';
import Hero from '~/components/Hero';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Micro Data Centre | Dataracks"
        },
    ];
};

const microDataCentre = () => {
    return (
        <>
            <Hero title="Micro Data Centre" image='/images/dataracks-micro-data-centre-header.jpg' />
            <section className='max-w-6xl mx-auto p-4 py-20'>
                <div className='grid md:grid-cols-3 gap-4'>
                    <img src="/images/dataracks-mdc1.jpg" alt="" />
                    <div className='md:col-span-2'>
                        <h2 className='text-3xl mb-6'>Micro Data Centre (MDC)</h2>
                        <p className='text-[#595853]'>
                            Maximise your IT performance with our advanced Micro Data Centre (MDC) solutions. Designed for efficiency and scalability, these compact,  self-contained systems provide all the cooling, security, and power  supply features needed to support your 19-inch racks. Ideal for  businesses with limited space, our MDCs offer exceptional flexibility  and can be installed almost anywhere without requiring specialist  builds.
                            <br /> <br />
                            Our Micro Data Centres deliver a cost-effective and scalable solution for diverse environments, including:

                        </p>
                        <br />

                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>Offices</li>
                            <li>Hospitals and GP surgeries</li>
                            <li>Retail spaces</li>
                            <li>Industrial locations</li>
                            <li>Academic institutions</li>
                            <li>Remote sites</li>
                        </ul>
                        <br />
                        <p className='text-[#595853]'>Each MDC is environmentally independent, requiring no external cooling  infrastructure. Its compact design ensures seamless integration into any space, offering both convenience and performance.</p>

                        <p className='my-6 text-[#0F0765] text-xl'>Key Features</p>
                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>Complete Solution: Includes integrated cooling, power distribution, and security systems – just add servers.</li>
                            <li>Scalable Design: Low cost per kW, with rack densities that can scale as needed.</li>
                            <li>Quick Installation: Pre-assembled and ready for use, minimising disruption to your business.</li>
                            <li> Exceptional Efficiency: PUE values as low as 1.21*.</li>
                            <li>Robust Security: Features such as remote monitoring, electronic RFID access, and optional fire suppression systems.</li>
                            <li> Environmentally Independent: Operates without heat transfer to its surrounding environment.</li>
                        </ul>
                        <br />
                        <p className='text-[#0F0765] '> Note: PUE (Power Usage Effectiveness) values apply at ambient temperatures up to 27°C.</p>
                        <br />

                        <p className='my-6 text-[#0F0765] text-xl'>Key Benefits</p>
                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>Reduced Costs: Save on infrastructure with a compact, self-contained design. </li>
                            <li>Futureproof: Scale your MDC to meet evolving IT needs.</li>
                            <li> Fast Deployment: Quick to install and commission, enabling rapid deployment.</li>
                            <li> Energy Efficient: Optimised power and cooling systems ensure lower energy consumption.</li>
                            <li>Secure Operations: Advanced access controls and monitoring provide peace of mind.</li>
                            <li>Environmentally Friendly: Minimal environmental impact and low operational costs.</li>
                        </ul>
                        <br />
                        <p className='my-6 text-[#0F0765] text-xl'>Standard MDC Features</p>
                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>Pre-assembled 19” rack cabinet modules for IT equipment </li>
                            <li> 10-25 kW N+1 cooling systems</li>
                            <li>Integral dual-feed UPS (Uninterruptible Power Supply)</li>
                            <li> Intelligent multi-way PDU (Power Distribution Unit)</li>
                            <li> Optional fire suppression systems</li>
                            <li> Intelligent control hub for full remote monitoring and management</li>
                            <li>Electronic RFID access with alarm systems, remote monitoring, and access log reporting</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default microDataCentre;