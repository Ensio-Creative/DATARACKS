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

export const allProducts = [
    {
        title: "Modular Security Cages",
        image: "dataracks-home-security-cages-products.jpg",
        slug: "/security-cages"
    },
    {
        title: "Aisle Containment",
        image: "dataracks-home-aisle-containment-products.jpg",
        slug: "/aisle-containment"

    },
    // {
    //     title: "Server & Network Cabinets",
    //     image: "dataracks-home-server-cabinets-products.jpg",
    //     slug: "/server-cabinets"
    // },
    {
        title: "Cabinet Accessories",
        image: "dataracks-cabinet.jpg",
        slug: "/cabinet-accessories"
    },
    {
        title: "Wallboxes",
        image: "dataracks-wallboxes-product.jpg",
        slug: "/wallboxes"
    },
    {
        title: "Retrofit Solutions",
        image: "dataracks-retrofit-solutions.jpg",
        slug: "/retrofit-solutions"
    },
    // {
    //     title: "Micro Data Centres",
    //     image: "dataracks-micro-data-centre-products.jpg",
    //     slug: "/micro-data-centre"
    // },
    {
        title: "Electromechanical solutions",
        image: "dataracks-electromechanical-solutions.jpg",
        slug: "/electromechanical-solutions"
    }
]

const products = () => {

    return (
        <>
            <Hero title="Products" image='/images/dataracks-products-header.jpg' />

            <section className="max-w-7xl mx-auto my-32 px-4">
                <h1 className="md:text-5xl text-3xl font-light md:w-[80%]">
                    From our UK factory, we design and manufacture a comprehensive range of  products, including server cabinets, aisle containment systems, and security cages to meet the needs of our global client.
                </h1>
            </section>

            <section className='max-w-7xl mx-auto my-20 px-4'>
                <div className="grid md:grid-cols-3 gap-4">
                    {allProducts.map((single, index) => <div key={index}>
                        <Link to={`/products${single.slug}`}>
                            <img src={`/images/products/${single.image}`} className='w-full object-cover' alt="" />
                            <p className='text-2xl my-4 font-light'>{single.title}</p>
                        </Link>
                    </div>)}

                </div>

            </section>
        </>
    );
};

export default products;