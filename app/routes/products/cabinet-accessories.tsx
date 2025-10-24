import React, { useState } from 'react';
import Hero from '~/components/Hero';

import type { Route } from './+types/server-cabinets';
import Modal from '~/components/Modal';
export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Server Cabinets | Dataracks"
        },
    ];
};

const ServerCabinets = () => {
    const [show, setShow] = useState(false)

    const serverData = [

        {
            title: 'Floor Tile Replacement',
            image: 'dataracks-split-&-colocation-cabinets.jpg',
        },
        {
            title: 'Switch Ducts',
            image: 'dataracks-specialist-&-custom-made-cabinets.jpg',
        },
        {
            title: 'Cable Trays',
            image: 'dataracks-cable-tray1.jpg',
        },
        {
            title: 'Blanking Panels',
            image: 'dataracks-blanking-panels1.jpg',
        },
        {
            title: 'Cabinet Shelves',
            image: 'dataracks-cabinet-shelves1.jpg',
        },
        {
            title: 'Data Centre Airflow Management',
            image: 'dataracks-data-centre-airflow-management.jpg',
        },
        {
            title: 'Fibre Managers',
            image: 'fibre-managers.jpg',
        },
        {
            title: 'Cable Slack Managers',
            image: 'dataracks-cable-slack-manager.jpg',
        },
        {
            title: 'Earthing',
            image: 'dataracks-505-cabinets.jpg',
        }
    ]

    return (
        <>
            <Hero title="Cabinets Accessories" image='/images/dataracks-server-cabinets-header.jpg' />
            <section className='max-w-7xl mx-auto px-4 py-32'>
                <div className='grid md:grid-cols-3 gap-6'>
                    {serverData.map((item, index) => (
                        <div key={index} className='cursor-pointer mt-10'>
                            <div className='border border-[#CFCFCF] p-4 h-full'>
                                <img src={`/images/cabinet-accessories/${item.image}`} alt={item.title} className='w-full my-auto object-cover' />

                            </div>
                            <div className='py-4'>
                                <h3 className='text-lg mb-2'>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ServerCabinets;