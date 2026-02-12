import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/services';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Services | Dataracks"
        },
    ];
}

const services = () => {
    const allServices = [
        {
            title: "Design",
            image: "dataracks-design-services.jpg",
            description: "Every Dataracks product is designed and manufactured in-house. All solutions are bespoke and tailored to each environment. Dataracks design engineers manage the entire process — from site surveys and custom designs to prototyping and load testing.This ensures that every rack, enclosure, and containment system is precision- built, tested, and ready to perform in real - world conditions."
        },
        {
            title: "UK Manufacturing",
            image: "dataracks-manufacturing-services.jpg",
            description: "Dataracks cabinets, cages, and custom solutions are expertly crafted at the Cambridgeshire manufacturing facility. From raw sheet metal to the finished product, every stage of production is completed In-house. Sustainability is at the core of Dataracks approach.All products are manufactured using recycled materials only where possible without compromising strength or structural integrity."
        },
        {
            title: "Expert Advise",
            image: "dataracks-expert-advise-services.jpg",
            description: "The Company offers specialist consultancy to help businesses optimise IT infrastructure. Dataracks experts provide guidance on performance, sustainability, security, and design. Advice covers everything from improving efficiency and reducing energy waste to enhancing security and maximising space. This tailored advice ensures client infrastructure is secure, sustainable, and performs."
        },
        {
            title: "Delivery & Installation",
            image: "dataracks-delivery-&-installation-services.jpg",
            description: "Dataracks provides fast, reliable delivery and installation both in the UK and Internationally. Trusted logistics partners are employed to securely package and protect every order. Dataracks in-house installation team assembles, positions, and adjusts equipment on-site, ensuring it’s fully operational and perfectly suited to each unique space."
        }
    ]
    return (
        <>
            <Hero title="Services" image='/images/dataracks-products-header.jpg' />

            <section className='max-w-7xl mx-auto px-4 my-20'>
                {allServices.map((single, index) => <div key={index + single.title} className="grid md:grid-cols-3 md:gap-20 gap-4 border-b last:border-b-0 border-[#CFCFCF] py-10">
                    <div>
                        <p className='text-3xl font-light'>{single.title}</p>
                    </div>
                    <div>
                        <p className="text-[#595853]">{single.description}</p>
                    </div>
                    <img src={`/images/services/${single.image}`} alt="" />
                </div>)}
            </section>
        </>
    );
};

export default services;