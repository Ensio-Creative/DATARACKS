import React from 'react';
import type { Route } from './+types/retrofit-solutions';
import Hero from '~/components/Hero';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Retrofit Solutions | Dataracks"
        },
    ];
};
const retrofitSolutions = () => {
    return (
        <>
            <Hero title="Retrofit Solutions" image='/images/dataracks-retrofit-solutions-header.jpg' />
            <section className='max-w-6xl mx-auto p-4 py-20'>
                <div className='grid md:grid-cols-3 gap-4'>
                    <img src="/images/dataracks-retrofit-solutions1.jpg" alt="" />
                    <div className='md:col-span-2'>
                        <h2 className='text-3xl mb-6'>Retrofit Solutions</h2>
                        <p className='text-[#595853]'>
                            Dataracks provide a practical and cost-effective way to upgrade your  existing rack infrastructure without the need for full replacements. Our Rack Depth Extenders and Extended Door allow you to increase rack  depth, improve cable management,and enhance overall accessibility while  maintaining your existing setup. Designed to work with all major rack  brands, these solutions help future-proof your infrastructure, ensuring  it meets evolving technological demands with minimal disruption.                        </p>
                        <br />
                        <p className='my-6 text-[#0F0765] text-xl'>Key Features</p>
                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>
                                Rack Depth Extenders-Extend the depth of your existing racks by up to 600mm, offering additional space for new or larger equipment. </li>
                            <li>Extended Door Retrofits- Increase depth without the need to replace your existing rack, providing a cost-effective alternative to full replacement.</li>
                            <li>Improved Cable Management- Additional space for cable and fibre entry, enhancing organisation and airflow.</li>
                            <li>Universal Compatibility- Designed to fit seamlessly with all major rack brands, making it a versatile solution for various setups.</li>
                            <li>Effortless Installation-Quick and simple installation with the option of Dataracks’ installation team for professional fitting and support.</li>
                            <li>Minimal Disruption-Enhances rack functionality with no need for major structural changes.</li>
                        </ul>
                        <br />

                    </div>
                </div>
            </section>
        </>
    );
};

export default retrofitSolutions;