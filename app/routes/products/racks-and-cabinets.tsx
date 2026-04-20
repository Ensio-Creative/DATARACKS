import React, { useState } from 'react';
import Hero from '~/components/Hero';


import Modal from '~/components/Modal';
import type { Route } from './+types/racks-and-cabinets';
export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Server Cabinets | Dataracks"
        },
    ];
};

const ServerCabinets = () => {
    const [show, setShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState<{ title: string; image: string; content: any } | null>(null);

    const serverData = [
        {
            title: '303 Eco Cabinets',
            image: '/images/server-cabinets/dataracks-303-eco-cabinets.jpg',
            content: (<div>
                <p>
                    The award-winning Dataracks 303 Eco cabinet range is manufactured from steel for maximum structural rigidity and supports best practice cable management. The patented award
                    winning Eco Server Cabinet that includes a unique twist and lock mechanism. It is suitable for use with virtually all hardware brands without adapting components. Cabinets fully conform with EU recommendations on Energy Efficiency.
                </p>
                <p className='my-6 text-[#0F0765] text-xl'>Wide Range</p>
                <ul className='list-disc ml-4'>
                    <li>Standard heights 27U, 42U & 48U </li>
                    <li>Wide variety of custom built heights from 18U to 58U</li>
                    <li>Four widths 600, 800, 750 and 1000mm</li>
                    <li>Four standard depths 600, 800, 1000 and 1200mm</li>
                    <li>Multiple door options, split(wardrobe), colocation, vented glass and vented steel</li >
                    <li>The 42u cabinet is 1975mm</li>
                    <li>The 48u cabinet is 2240mm</li>
                </ul>
                <p className='my-6 text-[#0F0765] text-xl'>Benefits</p>
                <ul className='list-disc ml-4'>
                    <li>UK-built to the highest standards with best practice airflow and security incorporated in the design</li>
                    <li>EU code of conduct airflow compliant comes bundled with air dams, infill plates and blanking panels as standard (blanking panels not fitted)</li>
                    <li>Optional Highflow vented steel doors for maximum air flow</li>
                    <li>Painted Ash Grey to help improve</li>
                </ul>
                <div className='grid grid-cols-3 gap-4 mt-12'>
                    <img src="/images/server-cabinets/dataracks-303-eco-cabinets-1.jpg" alt="" />
                    <img src="/images/server-cabinets/dataracks-303-eco-cabinets-2.jpg" alt="" />
                    <img src="/images/server-cabinets/dataracks-303-eco-cabinets-3.jpg" alt="" />
                </div>
            </div>
            ),
        },
        {
            title: 'Split & Colocation Cabinets',
            image: '/images/server-cabinets/dataracks-split-&-colocation-cabinets.jpg',
            content: (<div>
                <p>The award-winning Dataracks 303 Eco Colocation Cabinets are easy to  install and compatible with your existing server hardware and  rack-mounted equipment.
                    <br /> <br />
                    This range of cabinets is  manufactured from steel for maximum structural rigidity and its  user-friendly design supports best practice cable management.
                    <br /> <br />
                    We offer a wide range of colocation/split cabinets, including:
                    <br /> <br />
                </p>
                <ul className='list-disc ml-4'>
                    <li>2, 3 and 4 part split options available as standard.</li>
                    <li>Standard heights – 42U and 48U</li>
                    <li>Two widths – 600mm and 800mm</li>
                    <li>Standard depths – 1,000 and 1,200mm</li>
                    <li>The overall height of the 42U cabinet is 1,975mm</li>
                    <li>The overall height of the 48U cabinet is 2,240mm</li>
                </ul>
            </div>)
        },
        {
            title: 'Specialist & Custom Made Cabinets',
            image: '/images/server-cabinets/dataracks-specialist-&-custom-made-cabinets.jpg',
            content: (<div>
                <p>At Dataracks, we go beyond “off the shelf” to create the very best tailored cabinet solutions for our customers.
                    <br /> <br />
                    Our in-house team of CAD designers can bring your ideas to life, providing  you with high-quality custom-made server racks that meet your exact  needs, timeframes, and budget. Moreover, we provide an end-to-end  service, where our expert team designs, manufactures, and installs your  bespoke solution, working with you every step of the way.
                    <br /> <br />
                    Whether you need a specific size, colour, or more complex solution, we work  across a range of industries and to your exact requirements. Every  solution is built in our UK factory to the highest standards. So, if  you’d like to find out more about our custom-made server racks, please  contact one of our team today.</p>
            </div>)
        },
        {
            title: 'Patching Rack',
            image: '/images/server-cabinets/dataracks-patching-rack.jpg',
            content: (<div>
                <p>The new Dataracks High-Density Patching Rack is designed to handle  the complexities of your cable infrastructure project in any  environment.
                    <br /> <br />
                    Our patching racks maximise the room in your  installation, providing you with the perfect balance between your  available floor space and cable management area.
                    The large cable openings and cable management fingers also allow for the easy management of large bundles of cables.
                    <br /> <br />
                    Features include:
                    <br /> <br />
                    <ul className='list-disc ml-4'>
                        <li>Heights – 42U & 48U</li>
                        <li>Dimensions – 1000mm wide x 1000mm deep; 1000mm wide x 500mm deep</li>
                        <li>Weight loading tested up to 1500kg (evenly distributed)</li>
                    </ul>
                </p>
            </div>)
        },
        {
            title: 'Chimney Cabinets',
            image: '/images/server-cabinets/dataracks-chimney-cabinets.jpg',
            content: (<div>
                <p>Our Dataracks 303 Eco-server Chimney Cabinets direct the heat  straight away from your cabinet. The chimney is secured to the top-rear  of the cabinet, so the hot air is directed away from the cabinet and  into a plenum above.
                    <br /> <br />
                    These cabinets are compatible with all major hardware brands, without any adapting components  required. Additionally, they are also highly flexible, allowing you to  adjust the height for your installation.
                    <br /> <br />
                    Our cabinets comply with  EU recommendations on energy efficiency and our lock cable management  mechanism supports best practice cable management.</p>
            </div>)
        },
        {
            title: 'Cabinet Extensions',
            image: '/images/server-cabinets/dataracks-cabinet-extension.jpg',
            content: (<div>
                <p>Regardless of your cabinet type or size, we manufacture a vast range of cabinet  extensions from our UK-based factory to the highest standards and to  meet your exact requirements.
                    <br /> <br />
                    We have created cabinet extensions for a range of installations, including Rittal, APC, Minkels and many more.
                    <br /> <br />
                    If you would like to find out more, please contact one of our expert team today.</p>
            </div>)
        },
        {
            title: '505 Cabinets',
            image: '/images/server-cabinets/dataracks-505-cabinets.jpg',
            content: (<div>
                <p>Maximise your IT performance with our advanced Micro Data Centre (MDC) solutions. Designed for efficiency and scalability, these compact,  self-contained systems provide all the cooling, security, and power  supply features needed to support your 19-inch racks. Ideal for  businesses with limited space, our MDCs offer exceptional flexibility  and can be installed almost anywhere without requiring specialist  builds.
                    <br /> <br />
                    Our Micro Data Centres deliver a cost-effective and scalable solution for diverse environments, including:
                    <br /> <br />
                    <ul className='list-disc ml-4'>
                        <li>Offices</li>
                        <li>Hospitals and GP surgeries</li>
                        <li>Retail spaces</li>
                        <li>Industrial locations</li>
                        <li>Academic institutions</li>
                        <li>Remote sites</li>
                    </ul>
                    <br />
                    Each MDC is environmentally independent, requiring no external cooling  infrastructure. Its compact design ensures seamless integration into any space, offering both convenience and performance.
                </p>
                <p className='my-6 text-[#0F0765] text-xl'>Key Benefits</p>
                <ul className='list-disc ml-4'>
                    <li>Reduced Costs: Save on infrastructure with a compact, self-contained design.</li>
                    <li>Futureproof: Scale your MDC to meet evolving IT needs.</li>
                    <li>Fast Deployment: Quick to install and commission, enabling rapid deployment.</li>
                    <li>Energy Efficient: Optimised power and cooling systems ensure lower energy consumption.</li>
                    <li>Secure Operations: Advanced access controls and monitoring provide peace of mind.</li>
                    <li>Environmentally Friendly: Minimal environmental impact and low operational costs.</li>
                </ul>
                <p className='my-6 text-[#0F0765] text-xl'>Standard MDC Features</p>
                <ul className='list-disc ml-4'>
                    <li>Pre-assembled 19” rack cabinet modules for IT equipment</li>
                    <li>10-25 kW N+1 cooling systems</li>
                    <li>Integral dual-feed UPS (Uninterruptible Power Supply)</li>
                    <li>Intelligent multi-way PDU (Power Distribution Unit)</li>
                    <li>Optional fire suppression systems</li>
                    <li>Intelligent control hub for full remote monitoring and management</li>
                    <li>Electronic RFID access with alarm systems, remote monitoring, and access log reporting</li>
                </ul>
                <p className='my-6 text-[#0F0765] text-xl'>Advanced Installation and Support</p>
                <p>Our team of experts ensures seamless installation and commissioning of your Micro Data Centre:
                    <br />
                    <ul className='list-disc ml-4'>
                        <li>
                            Consultation: Tailored designs based on your unique operational needs.
                        </li>
                        <li>Manufacturing: High-quality construction for reliability and longevity.</li>
                        <li>Installation: Delivered and installed by experienced professionals for rapid deployment.</li>
                        <li> Ongoing Support: Continuous monitoring and maintenance services available.</li>
                    </ul>
                </p>
            </div>)
        },
        {
            title: 'ETSI Cabinets',
            image: '/images/server-cabinets/dataracks-ETSI-cabinet.jpg',
            content: (
                <div>
                    <p>This UK-built cabinet range is specifically designed to comply with ETSI standards and still meet your individual requirements.
                        <br /> <br />
                        You can also choose from a range of accessories, including a choice of  steel or glass front door, side cable management extensions and  adjustable brackets for 19” equipment.
                        <br /> <br />
                        Fully compliant with the EN 300 119-3 specifications, our highly versatile ETSI cabinets are available in the following sizes:
                        <br /> <br />
                        <ul className='list-disc ml-4'>
                            <li>45U standard: 600mm wide x 300mm deep x 2200mm height.</li>
                            <li>45U double depth: 600mm wide x 600mm deep x 2200mm height.</li>
                            <li> Other sizes are also available.</li>
                        </ul>
                        <br />
                        Whether you need your ETSI cabinets to work with your existing facility or in a new facility, our expert team are available to discuss your  installation.
                        <br /><br />
                        <strong>Features</strong> <br /> <br />
                        <ul className='list-disc ml-4'>
                            <li>UK-built to the highest standards.</li>
                            <li>Compliant with EN 300 119-3 specifications.</li>
                            <li>2 x ETSI mounting angles, drop in, removable side, rear panels and roof with optional front door.</li>
                        </ul>
                    </p>
                </div>
            )
        },
        {
            title: '606 Cabinets',
            image: '/images/server-cabinets/dataracks-606-cabinets.jpg',
            content: (
                <div>
                    <p>The highly cost-effective Dataracks 606 Mini Cabinet is the latest addition to our award-winning range.
                        <br /> <br />
                        This free-standing enclosure is designed to the highest standards. It is  also suitable for small office and home environments, including under  desk applications as well.
                        <br /> <br />
                        So, the features include:
                        <br /> <br />
                        <ul className='list-disc ml-4'>
                            <li>Available in 12U and 18U heights</li>
                            <li>600mm x 600mm frame size</li>
                            <li> Fully adjustable 19” mounting angles fitted front and rear</li>
                            <li> Cable access in the top and bottom of the cabinet</li>
                            <li>Lockable glass or steel front doors.</li>
                            <li>Strong yet lightweight welded frame, with a load rating of 100kg</li>
                        </ul>
                    </p>
                </div>
            )
        }
    ]

    return (
        <>
            <Hero title="Racks & Cabinets" image='/images/dataracks-server-cabinets-header.jpg' />
            <section className='max-w-7xl mx-auto px-4 py-32'>
                <div className='grid md:grid-cols-3 gap-6'>
                    {serverData.map((item, index) => (
                        <div key={index} className='cursor-pointer' onClick={() => { setSelectedItem(item), setShow(true) }}>
                            <div className='border border-[#CFCFCF] p-4'>
                                <img src={item.image} alt={item.title} className='w-full object-cover' />

                            </div>
                            <div className='p-4'>
                                <h3 className='text-lg mb-2'>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                    <Modal image={selectedItem?.image} title={selectedItem?.title} show={show} content={selectedItem?.content} onClose={() => { setSelectedItem(null), setShow(false) }} />
                </div>
            </section>
        </>
    );
};

export default ServerCabinets;