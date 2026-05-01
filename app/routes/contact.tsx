import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/contact';
import { ArrowUpRight } from 'lucide-react';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Contact Us | Dataracks"
        },
    ];
}


const contact = () => {
    return (
        <>
            <Hero title="Contact Us" image='/images/dataracks-contact-us-header.jpg' />

            <section className='max-w-7xl mx-auto px-4 py-[120px]'>
                <div className='grid md:grid-cols-2 gap-10 border-b border-b-[#CFCFCF] '>
                    <div>
                        <p className='md:text-5xl text-3xl font-light mb-4'>General inquiries</p>
                    </div>

                    <div>
                        <div className='grid md:grid-cols-2 text-[#595853] pb-8'>
                            <p>Stagwood House, Beach Road,
                                Cottenham, Cambridge CB24 8FP,
                                United Kingdom
                            </p>
                            <div className='mt-4 md:mt-0'>
                                <p>T: +44(0)1954252800</p>
                                <p>E: sales@dataracks.co.uk</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-10 mt-10'>
                    <div>
                        <p className='text-[#0F0765] font-light text-3xl  leading-tight lg:text-[44px] py-6'>
                            Tour our manufacturing
                            factory
                        </p>
                        <p className='text-[#595853] font-[16px]'>
                            Walk through our factory floor, virtually.
                        </p>
                        <a href="https://kuula.co/share/collection/7k5FS?fs=1&vr=1&sd=1&thumbs=1&info=0&logo=0" target='_blank'>
                            <div className='flex gap-2'>
                                <p className='font-[16px]'>
                                    Click here to begin your tour
                                </p>
                                <ArrowUpRight className='my-auto' />
                            </div>
                        </a>
                    </div>
                    <div className=''>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2440.8768345911526!2d0.1350687768194364!3d52.281937971999724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sStagwood%20House%2C%20Beach%20Road%2C%20Cottenham%2C%20Cambridge%20CB24%208FP%2C%20United%20Kingdom!5e0!3m2!1sen!2sng!4v1760295480891!5m2!1sen!2sng" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default contact;