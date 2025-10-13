import React, { useState } from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/server-cabinets';
import Modal from '~/components/Modal';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Aisle Containment | Dataracks"
        },
    ];
};

const AisleContainment = () => {
    const [show, setShow] = useState(false)
    const [seletedItem, setSelectedItem] = useState<any>(null)
    const data = [
        {
            title: "Cold Aisle Containment",
            image: "/images/aisle-containment/dataracks-cold-aisle-containment.jpg",
            content: (
                <div>
                    <p>Ensure your data centre operates at peak efficiency with our expertly designed Cold Aisle Containment (CAC) systems. With over 25 years of experience, we deliver innovative  solutions tailored to your facility’s unique requirements. Our solutions combine cutting-edge technology, robust materials, and expert  installation services to provide a comprehensive approach to data centre cooling.
                        <br /> <br />
                        Cold aisle containment systems  create a dedicated air plenum chamber to isolate cold air within  specific aisles of your data centre. This system prevents the mixing of  hot and cold air, ensuring optimal cooling efficiency and reducing  energy costs.
                        <br /> <br />
                        Our containment solutions are designed to improve  thermal management, protect sensitive equipment, and enhance overall  performance. Whether you’re building a new facility or upgrading an  existing one, our cold aisle containment systems provide unmatched value and reliability.
                    </p>
                    <img src="/images/aisle-containment/dataracks-cold-aisle-containment-1.jpg" className='w-full my-6' alt="" />
                    <p className='my-6 text-[#0F0765] text-xl'>Key Benefits</p>
                    <ul className='list-disc ml-4'>
                        <li>Cold Aisle Containment Doors: Sliding or hinged options for effective aisle sealing and ease of access.</li>
                        <li>Curtains and Panels: Flexible or rigid barriers designed to fit various configurations while maintaining durability.</li>
                        <li>Roof Panels: Transparent or opaque panels that provide complete containment and allow for integration with fire suppression systems.</li>
                        <li>Customisation Options: Tailored solutions to meet specific data centre layouts, cooling needs, and operational requirements.</li>
                        <li>Durability and Safety: High-quality materials, including fire-resistant options, ensure long-term performance and compliance with safety standards.</li>
                    </ul>
                    <p className='my-6 text-[#0F0765] text-xl'>Benefits of cold aisle containment</p>
                    <ul className='list-disc ml-4'>
                        <li>Energy Efficiency: Reduce cooling costs by up to 30% with precision airflow management, lowering operational expenses.</li>
                        <li>Improved Uptime: Maintain consistent inlet temperatures to protect equipment and minimise the risk of overheating or downtime.</li>
                        <li>Hot Spot Elimination: Address uneven cooling distribution to prevent equipment failure and optimise rack performance.</li>
                        <li>Sustainability: Lower energy consumption reduces your carbon footprint, contributing to greener data centre operations.</li>
                        <li>Simplified Maintenance: Enhanced airflow management leads to reduced strain on cooling systems, prolonging their lifespan.</li>
                        <li>Enhanced IT Security: Isolated cold air aisles offer better environmental control, reducing risks to sensitive IT equipment.</li>
                    </ul>
                    <p className='my-6 text-[#0F0765] text-xl'>Advanced Installation and Support</p>
                    <p>Our expert team offers end-to-end support, from initial consultation to seamless installation and post-installation maintenance.
                        <br /> <br />
                    </p>
                    <ul>
                        <li>Retrofit Projects: Upgrade existing facilities with minimal disruption to operations.</li>
                        <li>New Builds: Design and integrate containment systems into new data centre projects.</li>
                        <li>Expert Guidance: Receive support for compliance with cooling, fire safety, and energy efficiency standards.</li>
                    </ul>
                    <div className='md:flex gap-4 my-6'>
                        <img src="/images/aisle-containment/dataracks-cold-aisle-containment-2.jpg" alt="" className='w-full' />
                        <img src="/images/aisle-containment/dataracks-cold-aisle-containment-3.jpg" alt="" className='w-full md:mt-0 mt-4' />

                    </div>
                </div>
            )
        },
        {
            title: "Hot Aisle Containment",
            image: "/images/aisle-containment/dataracks-hot-aisle-containment.jpg",
            content: (
                <div>
                    <p>With more than 25 years’ experience in this space, we  understand that aisle containment is an important component of any data  centre solution. We’ve worked with a range of businesses to meet the  financial and operational requirements of such mission-critical  facilities.
                        <br /> <br />
                        Hot aisle containment provides a  highly effective form of airflow management to optimise cold air usage  and flow across your data racking and aisles.
                        <br /> <br />
                        As a pioneer  in the development and application of hot/cold aisle containment, Dataracks has unrivalled expertise in this area. We have developed  solutions – both large scale and on a more modest size, for a wide range of customers.
                        <br /> <br />
                        As a pioneer in the development and  application of hot aisle containment, Dataracks has developed and  installed solutions for a wide range of customers and footprints.  Whether you’re building a new data centre or need to retrofit your  current facility, we bring unrivalled expertise to seamlessly install  and manage your project.
                        <br /> <br />
                        Hot aisle containment (HAC) ensures the controlled flow of hot air back to the CRAC units. Dataracks offer two versions of HAC – ceiling plenum or rack chimneys. Features include:
                        <br /><br />
                        <ul className='list-disc ml-4'>
                            <li> Floor construction or air flow under voids</li>
                            <li>Ceiling construction and accessibility</li>
                            <li>Suitable for
                                Ducting</li>
                        </ul>
                        <div className='md:flex my-6 gap-4'>
                            <img src="/images/aisle-containment/dataracks-hot-aisle-containment-2.jpg" className='w-full' alt="" />
                            <img src="/images/aisle-containment/dataracks-hot-aisle-containment-3.jpg" className='w-full md:mt-0 mt-4' alt="" />

                        </div>
                    </p>
                </div>
            )
        },
        {
            title: "Active Roof",
            image: "/images/aisle-containment/dataracks-active-roof.jpg",
            content: (
                <div>
                    <p>Our range of data centre active roof designs can help enable Cold  Aisle Containment across your data centre and protect the facility, in  case of emergency.
                        <br /> <br />
                        If the worst does happen, the active  roof’s canopy automatically deploys, allowing your fire suppression  systems to access the contained aisles, minimising any damage to your  data centre.
                        <br /> <br />
                        So, How does it work? An electromagnet  controls the active roof frame. This is activated when a signal is sent  from your fire alarm panel to an interface unit.
                        <br /> <br />
                        The  interface unit accepts a variety of inputs from the fire alarm panel and feeds this controlling signal out to a series of remote interface  units. When the unit is activated, a visual and audible warning is  given.
                        <br /> <br />
                        If there is any disruption in the power, a power  failsafe operation is automatically activated. You can also use the  system’s test button to check the unit’s operations, without interfering with the main fire alarm panel.</p>
                    <img src="/images/aisle-containment/dataracks-active-roof-2.jpg" className='my-6 w-full' alt="" />
                </div>
            )
        },
        {
            title: "Shrink Roof",
            image: "/images/aisle-containment/dataracks-shrink-roof.jpg",
            content: (
                <div>
                    <p>Dataracks has introduced our new “Shrink” Panels for aisle containment.
                        <br /> <br />
                        The Shrink Panels are specifically designed roof panels for aisle  containment. So, in the case of a fire at your data centre, the Panels  will automatically shrink away from its frame allowing fire suppression  into the aisle, saving costs on changing fire suppression piping and  without obstructing the activated sprinklers.
                        <br /> <br />
                        The Shrink  Panels are an established solution in the US and increasing in  popularity in the UK and Europe to help operators comply with the fire  prevention demands from most insurance companies.
                        <br /> <br />
                        The Shrink Panels join our extensive data centre solutions product range. From cabinets to aisle containment and security cages, our products are designed and manufactured in our UK factory and are installed all  across the world, providing you with the flexibility and performance  your data centre needs.
                        <br /> <br />
                        In addition, these panels can be installed on day one or retrofitted into an existing aisle containment.</p>
                </div>
            )
        }
    ]
    return (
        <>
            <Hero title="Aisle Containment" image='/images/dataracks-aisle-header.jpg' />
            <section className='max-w-7xl mx-auto px-4 py-32'>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div><p className='md:text-5xl text-3xl font-light'>Maximize uptime & efficiency with custom Aisle Containment solutions</p></div>
                    <div className='text-[#595853]'>
                        <p>Data centres face growing pressure to reduce energy consumption without  compromising uptime. At Dataracks, we specialise in bespoke hot and cold aisle containment systems engineered to improve thermal efficiency,  enhance cooling performance, and deliver measurable cost savings.
                            <br /> <br />
                            Our custom-built solutions are designed to:
                            <br /> <br />
                            <ul className='list-disc ml-4'>
                                <li>Reduce energy usage and cooling costs.</li>
                                <li>Eliminate hot spots and optimise airflow.</li>
                                <li>Improve Power Usage Effectiveness (PUE)</li>
                                <li>Support your sustainability goals with a lower carbon footprint</li>
                            </ul>
                            <br />
                            Whether you’re upgrading an existing facility or building from the ground up,  our containment systems can be tailored to meet your specific layout and cooling requirements. We also offer a full survey and installation  service to ensure maximum performance.
                            <br /> <br />
                            You can find out more about both hot aisle and cold aisle containment below. If you’re focused on one over the other, dedicated  pages with in-depth information are available. Have questions or need a  quote? Contact us today — we’re here to help.</p>
                    </div>
                </div>

                <div className='pt-20'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {data.map((item, index) => (
                            <div key={index} className='bg-[#EAF4FF] cursor-pointer' onClick={() => { setSelectedItem(item), setShow(true) }}>
                                <img src={item.image} alt={item.title} className='w-full object-cover' />
                                <div className='p-6'>
                                    <h3 className='text-xl'>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                        <Modal show={show} image={seletedItem?.image} title={seletedItem?.title} content={seletedItem?.content} onClose={() => { setShow(false), setSelectedItem(null) }} />
                    </div>
                </div>
            </section>


        </>
    );
};

export default AisleContainment;