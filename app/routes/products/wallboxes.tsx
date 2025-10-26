import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/wallboxes';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Wallboxes | Dataracks"
        },
    ];
};

const wallboxes = () => {
    return (
        <>
            <Hero title="Wallboxes" image='/images/dataracks-wallboxes-header.jpg' />
            <section className='max-w-6xl mx-auto p-4 py-20'>
                <div className='grid md:grid-cols-3 gap-4'>
                    <img src="/images/dataracks-wallboxes-products.jpg" alt="" />
                    <div className='md:col-span-2'>
                        <h2 className='text-3xl mb-6'>Wallboxes</h2>
                        <p className='text-[#595853]'>Designed and Manufactured in the UK <br /> <br />
                            When your network infrastructure requires a reliable yet compact solution, the Dataracks 404 Wallbox delivers. Built for small businesses, distributed networks, education, retail, and AV installations, this stylish and robust wall-mounted enclosure is engineered for efficiency, security, and ease of installation.
                        </p>
                        <br />
                        <p className='my-6 text-[#0F0765] text-xl'>Key Features & Benefits</p>
                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>Compact & Sturdy Build – Manufactured from high-quality Ash Grey painted steel, offering durability and a professional finish.</li>
                            <li>Flexible Sizing Options – Available in 500mm and 600mm depths, with 6U, 9U, 12U, 15U, and 18U heights to suit various installation needs.</li>
                            <li>Choice of Doors – Select between a glass front door (kite-marked to BS EN12150 standard) or a steel front door for additional security.</li>
                            <li>Effortless Installation – Designed for one-person assembly, with removable side gland plates for quick access and knockout cable entry points (brushed option available).Flat Pack or Pre-Assembled – 6U, 9U, and 12U models come flat-packed for easy transport, while 15U and 18U units are pre-assembled. A pre-assembled option is also available for all sizes.</li>
                            <li>Optimised for Cooling & Cable Management – Supports rack-mounted fan units, vented shelves, and a range of cable management accessories.</li>
                        </ul>
                        <br />
                        <p className='my-6 text-[#0F0765] text-xl'>Versatile Accessories for Customisation</p>
                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>Cantilever and fixed shelves for additional equipment support</li>
                            <li>Rack-mounted PDUs (horizontal mounting recommended)</li>
                            <li>Rack-mounted fan units for improved airflow</li>
                            <li>Cable tidies, 1U jumper rings, and blanking panels</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default wallboxes;