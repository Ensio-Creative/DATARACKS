import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/products';
import { Link } from 'react-router';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Products | Dataracks"
        },
    ];
}


const products = () => {
    return (
        <>
            <Hero title="Products" image='/images/dataracks-products-header.jpg' />

            <section className="max-w-7xl mx-auto my-32 px-4">
                <h1 className="text-5xl font-light md:w-[80%]">
                    From our UK factory, we design and manufacture a comprehensive range of  products, including server cabinets, aisle containment systems, and security cages to meet the needs of our global client.
                </h1>
            </section>

            <section className='max-w-7xl mx-auto my-20 px-4'>
                <div className="grid md:grid-cols-3 gap-20 border-y border-[#CFCFCF] py-10">
                    <div>
                        <p className='text-3xl font-light'>Server Cabinets</p>
                    </div>
                    <img src="/images/products/servers.jpg" alt="" />
                    <div>
                        <p className="text-[#595853]">We deliver a complete range of high-performance server cabinets built for both hot and cold aisle containment. Whether you’re designing a new data facility or upgrading an existing site, our experienced team provides tailored solutions that maximise efficiency, reliability, and value for your business.</p>
                        <Link to="/products/server-cabinets">
                            <button className='text-[#0F0765] px-6 py-3 border border-[#0F0765] mt-6 text-sm'>Explore more</button>
                        </Link>
                    </div>

                </div>
                <div className="grid md:grid-cols-3 gap-20 border-b border-[#CFCFCF] py-10">
                    <div>
                        <p className='text-3xl font-light'>Aisle Containment</p>
                    </div>
                    <img src="/images/products/aisle.jpg" alt="" />
                    <div>
                        <p className="text-[#595853]">Data centres are under increasing pressure to cut energy consumption while maintaining optimal uptime. At Dataracks, we design and manufacture custom hot and cold aisle containment systems that boost thermal efficiency, enhance cooling performance, and generate measurable cost savings. </p>
                        <Link to="/products/aisle-containment">
                            <button className='text-[#0F0765] px-6 py-3 border border-[#0F0765] mt-6 text-sm'>Explore more</button>
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-20 py-10">
                    <div>
                        <p className='text-3xl font-light'>Security Cages</p>
                    </div>
                    <img src="/images/products/security.jpg" alt="" />
                    <div>
                        <p className="text-[#595853]">Our security cages offer a flexible and robust solution for safeguarding the most sensitive areas of your data centre. From modular partitioning systems to fully enclosed cages, each solution is engineered to meet industry standards and designed for maximum functionality, scalability, and long-term reliability.</p>
                        <Link to="/products/security-cages">
                            <button className='text-[#0F0765] px-6 py-3 border border-[#0F0765] mt-6 text-sm'>Explore more</button>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
};

export default products;