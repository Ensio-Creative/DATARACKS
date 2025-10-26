import React from 'react';
import type { Route } from './+types/electromechanical-solutions';
import Hero from '~/components/Hero';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Electromechanical solutions | Dataracks"
        },
    ];
};
const electromechanicalSolutions = () => {
    return (
        <>
            <Hero title="Electromechanical solutions" image='/images/dataracks-electromechanical-solutions-header.jpg' />
            <section className='max-w-6xl mx-auto p-4 py-20'>
                <div className='grid md:grid-cols-3 gap-6'>
                    <img src="/images/dataracks-electromechanical-solutions-1.jpg" alt="" />
                    <div className='md:col-span-2'>
                        <h2 className='text-3xl mb-6'>Electromechanical Solutions</h2>
                        <p className='text-[#595853]'>
                            At Dataracks, we specialise in delivering innovative electromechanical solutions for a wide range of industries. With our bespoke engineering services, we provide tailored solutions to meet the unique demands of your  organisation. Whether you need high-volume production for large-scale  projects, rapid prototyping to bring your ideas to life, or design  consultancy to refine your concepts, our expert team is here to support  you every step of the way.                        </p>
                        <br />
                        <p className='my-6 text-[#0F0765] text-xl'>Our Capabilities</p>
                        <ul className='list-disc ml-4 space-y-3 text-[#595853]'>
                            <li>Design Consultancy: Collaborate with our  skilled designers to enhance your vision, drawing on decades of  experience in electromechanical innovation.</li>
                            <li>Bespoke Engineering: Custom solutions designed to address your specific challenges, ensuring a perfect fit for your requirements</li>
                            <li>Prototyping: Test and refine your ideas with precision-engineered prototypes, designed to meet exact specifications.</li>
                            <li> High-Volume Production: Scalable manufacturing capabilities for large orders, ensuring consistency and quality at every level.</li>
                        </ul>
                        <div className='my-10 md:flex gap-6'>
                            <img src="/images/dataracks-uv-c1.jpg" alt="" />
                            <img className='md:mt-0 mt-6' src="/images/dataracks-top1.jpg" alt="" />
                        </div>
                        <p className='text-[#595853]'>The Dataracks Charging Cabinet securely manages multiple portable devices, such as phones and tablets. It includes a power bar that safely distributes electricity to each  drawer, operates on a 13A socket, and features LED lighting for  visibility. Built from durable steel with lockable wheels, it’s easy to  move and has a polycarbonate security window.
                            <br /> <br />
                            Each drawer has  cable management to protect cords, and low-noise fans ensure continuous  airflow. An optional UV-C sanitation feature eliminates up to 95% of  microbes, enhancing infection control between uses.
                            <br /> <br />

                            UV-C LED disinfection is highly effective for environments where employees share handheld  devices. Sanitizing devices within the charging cabinet between shifts  helps prevent infection spread, ensuring devices are clean when issued.  UV-C light works by disrupting the DNA of pathogens, effectively  sterilizing surfaces and preventing bacterial and viral spread.
                            <br /> <br />

                            Reliable Disinfection: UV-C LED sanitizers disinfect all shared devices inside the cabinet,  with each LED having a long lifespan (9000 hours) and producing 36000  µW/cm² of 270nm UV-C radiation, eliminating up to 95% of bacteria and  microbes within a 2-meter radius.
                            <br /> <br />

                            Safety Mechanism: To protect users, an interlock switch cuts off power to the UV-C  sanitizer when the cabinet door is open, removing the need for  protective gear.
                            <br /> <br />

                            Timed Sanitation Cycle: Upon  closing the door, a timer activates the UV-C light for 30 minutes,  enough for thorough disinfection, and resets if the door is reopened,  ensuring every device receives a full cycle of sanitation.
                            <br /> <br />

                            This solution is a safe, long-lasting, and efficient way to keep shared devices sanitized between uses.</p>
                        <br /> <br />
                        <p className='my-6 text-[#0F0765] text-xl'>Key Benefits</p>
                        <p className='border-y border-[#CFCFCF] text-[#595853] py-6'>Germ Elimination <br />
                            UV-C LED light disrupts the DNA of bacteria and viruses, killing up to 95%  of pathogens on surfaces, which helps prevent infections in shared  spaces.</p>
                        <p className='border-b border-[#CFCFCF] text-[#595853] py-6'>
                            Safe Operation <br />
                            Built-in safety features, such as interlock switches, prevent exposure  by turning off UV-C light when doors are open, ensuring safe usage  without protective gear.
                        </p>
                        <p className='text-[#595853] py-6'>
                            Sustainable <br />
                            With a lifespan of 9000 hours and hot-swappable modules, UV-C LEDs  provide a durable, low-maintenance disinfection solution that integrates smoothly into routine operations.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default electromechanicalSolutions;