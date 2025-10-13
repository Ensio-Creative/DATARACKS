import React from 'react';
import Hero from '~/components/Hero';

import type { Route } from './+types/server-cabinets';
export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Server Cabinets | Dataracks"
        },
    ];
};

const ServerCabinets = () => {
    const serverData = [
        {
            title: 'Cabinets & Enclosures',
            image: '/images/server-cabinets/dataracks-cabinets-&-enclosures.jpg'
        },
        {
            title: 'Split & Colocation Cabinets',
            image: '/images/server-cabinets/dataracks-split-&-colocation-cabinets.jpg'
        },
        {
            title: 'Specialist & Custom Made Cabinets',
            image: '/images/server-cabinets/dataracks-specialist-&-custom-made-cabinets.jpg'
        },
        {
            title: 'Patching Rack',
            image: '/images/server-cabinets/dataracks-patching-rack.jpg'
        },
        {
            title: 'Chimney Cabinets',
            image: '/images/server-cabinets/dataracks-chimney-cabinets.jpg'
        },
        {
            title: 'Cabinet Extensions',
            image: '/images/server-cabinets/dataracks-cabinet-extensions.jpg'
        },
        {
            title: '505 Cabinets',
            image: '/images/server-cabinets/dataracks-505-cabinets.jpg'
        },
        {
            title: 'ETSI Cabinets',
            image: '/images/server-cabinets/dataracks-ETSI-cabinet.jpg'
        },
        {
            title: '606 Cabinets',
            image: '/images/server-cabinets/dataracks-606-cabinets.jpg'
        }   
    ]

    return (
        <>
            <Hero title="Server Cabinets" image='/images/dataracks-server-cabinets-header.jpg' />
            <section className='max-w-7xl mx-auto px-4 py-20'>
                <div className='grid md:grid-cols-3 gap-6'>
                    {serverData.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.title} className='w-full object-cover' />
                            <div className='p-4'>
                                <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ServerCabinets;