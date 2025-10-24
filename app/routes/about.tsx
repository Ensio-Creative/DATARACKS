import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/about';
import Marquee from "react-fast-marquee";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "About Us | Dataracks"
    },
  ];
}


const about = () => {
  const team = [
    { name: 'Dave Smith', position: 'Chief Executive Officer', image: 'dave' },
    { name: 'Jeremy Hartley', position: 'Managing Director', image: 'jeremy' },
    { name: 'Celia Yu MAAT', position: 'Finance Manager', image: 'celia' },
    { name: 'Marc Hartley', position: 'Accounts Manager', image: 'marc' },
    { name: 'Clare Berry', position: 'Accounts Manager', image: '' },
    { name: 'Nicola Hartley', position: 'Installation Manager', image: 'nicola' },
    { name: 'Nick Hussey', position: 'Production Manager', image: 'nick' },
    { name: 'Gavin Wetton', position: 'HR Consultant', image: 'gavin' },
    { name: 'Samuel Johnson', position: 'Marketing Manager', image: 'samuel' },
    { name: 'Carlos Leal', position: 'Project Manager', image: 'carlos' },
    { name: 'Michelle Day', position: 'Design Engineer', image: '' },
    { name: 'Will James', position: 'Design Engineer', image: 'will' },
    { name: 'Alex Fournere', position: 'Design Engineer', image: 'alex' },
    { name: 'Keith Richardson', position: 'Co-Head of Assembly', image: 'keith' },
    { name: 'Rosie Jackson', position: 'Co-Head of Assembly', image: 'rosie' },
    { name: 'James Fenn', position: 'Head of Punching & Folding', image: 'james' },
    { name: 'Simon Minns', position: 'Head of Welding', image: 'simon' },
    { name: 'Ashley Barnes', position: 'Head of Paint shop', image: 'ashley' },
    { name: 'Carl Barnes', position: 'Installation Team Leader', image: 'carl' },
    { name: 'Karin Fox', position: 'Health & Safety Officer', image: 'karin' },
  ]
  return (
    <>
      <Hero title="About Us" image='/images/about-img.jpg' />
      <div className='flex'>
        <div className='p-32 w-1/2'>
          <p className='md:text-5xl text-3xl font-light'>About Dataracks</p>

          <p className='text-[#595853]'>From pioneering products to leading designs, Dataracks has provided a range of solutions to our clients for over 35 years.
            <br /> <br />
            We introduced the industry’s first purpose-built data racks in 1989. Then, we rewrote the book on data centre cooling and efficiency in 2007 with  our cold aisle containment solutions.
            <br /> <br />
            We’re immensely proud of our achievements in the industry and continue to  innovate, setting new standards in data centre solutions.</p>
        </div>
        <div className='w-1/2 bg-[#F5F5F5] p-20'>
          <div className='flex flex-col gap-8'>
            <div className=' py-4'>
              <p className='text-7xl font-light'>35+</p>
              <p className='text-xs text-[#595853]'>Years of experience</p>
            </div>
            <div className='border-t border-t-[#0F0765] py-4'>
              <p className='text-7xl font-light'>1000+</p>
              <p className='text-xs text-[#595853]'>Clients</p>
            </div>
            <div className='border-t border-t-[#0F0765] py-4'>
              <p className='text-7xl font-light'>12</p>
              <p className='text-xs text-[#595853]'>Industry awards</p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative py-40 my-32'>
        <img className='max-w-5xl left-0 right-0 mx-auto absolute top-0 bottom-0 my-auto z-10' src="/images/dataracks-about.jpg" alt="" />

        <Marquee>
          <p className='md:text-8xl text-4xl font-light'>Data centre and telecom solutions - Data centre and telecom solutions</p>
        </Marquee>
        <Marquee direction='right'>
          <p className='md:text-8xl text-4xl font-light'>Data centre and telecom solutions - Data centre and telecom solutions</p>
        </Marquee>
      </div>

      <section className='max-w-7xl mx-auto px-4 py-20'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <p className='md:text-5xl text-3xl font-light mb-4'>Quality Products and Services</p>
            <p className='text-[#595853]'>Our range of products is extensive and we tailor every project to the needs of our clients.  We’ve provided solutions for the likes of Microsoft, EE, and Vodafone.
              <br /> <br />
              From advanced cooling systems to optimized cable management, our latest  innovations are engineered to meet the evolving demands of the data  centre and telecommunications sectors. Each product is designed and  manufactured in our UK facility, ensuring the highest standards of  quality and precision.
              <br /> <br />
              No job is too big or too small for our expert team.</p>
          </div>
          <img src="/images/dataracks-quality-products.jpg" alt="" />
        </div>
      </section>
      {/* <div className='border-t border-t-[#CFCFCF] max-w-7xl mx-auto'></div> */}
      {/* <section className=' px-4 py-20 bg-[#EAF4FF]'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10'>
          <img src="/images/dataracks-green-credentials.jpg" alt="" />
          <div>
            <p className='md:text-5xl text-3xl font-light mb-4'>Green Credentials</p>
            <p className='text-[#595853]'>From our UK factory to your data centre, our eco-credentials run across everything we do at Dataracks.
              <br /> <br />
              We won the Ethical/Green Business of the Year 2018 FSB award for the East  of England and were a UK finalist for the same award thanks to our  commitment to minimising resource consumption at our factory and using  sustainable materials in our products.
              <br /> <br />
              We’re a leading data centre and telecoms manufacturer with high environmental ambitions and hope to be carbon neutral in the next three years.</p>
          </div>
        </div>
      </section> */}

      <section className="bg-[#F5F5F5] py-20">
        <div className=" max-w-7xl mx-auto px-4 md:flex">
          <img
            src="/images/dataracks-green-credentials.jpg"
            alt="Data centre"
            className="md:w-[48%] object-cover md:h-[492px] md:-mr-20 z-10"
          />
          <div className="md:bg-white ml-auto md:pr-20 md:pl-32 md:py-20 py-10 max-w-3xl text-left md:mt-18 md:h-[60%]">
            <h3 className="text-4xl font-light mb-4">Green Credentials</h3>
            <p className='text-[#595853]'>From our UK factory to your data centre, our eco-credentials run across everything we do at Dataracks.
              <br /> <br />
              We won the Ethical/Green Business of the Year 2018 FSB award for the East  of England and were a UK finalist for the same award thanks to our  commitment to minimising resource consumption at our factory and using  sustainable materials in our products.
              <br /> <br />
              We’re a leading data centre and telecoms manufacturer with high environmental ambitions and hope to be carbon neutral in the next three years.</p>
          </div>
        </div>

      </section>



      {/* <section className='bg-[#EAF4FF]'>
        <div className='max-w-7xl mx-auto px-4 py-20'>
          <p className='md:text-5xl text-3xl font-light text-center'>Meet Our Team</p>

          <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 mt-10'>
            {team.map((member, index) => (
              <div key={index} className='bg-white'>
                <img src={`/images/team/${member.image || 'user'}.jpg`} alt={member.name} className=' object-cover' />
                <div className='p-4'>
                  <p className=''>{member.name}</p>
                  <p className='text-sm'>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className='max-w-7xl mx-auto px-4 py-20'>
        <div className='grid md:grid-cols-2 md:gap-10 gap-4'>
          <div>
            <p className='md:text-5xl text-3xl font-light '>Why Partner with Us</p>

          </div>
          <div>
            {["Unmatched Expertise: Over 25 years in the industry.",
              "Proven Track Record: Successful implementations across a wide range of industries.",
              "Innovative Solutions: Cutting-edge designs tailored to meet the demands of modern data centres.",
              "Exceptional Customer Service: Dedicated support from consultation no completion"].map((point, index) => (
                <div key={index} className='flex items-start border-y border-y-[#CFCFCF] py-4'>
                  <p className='text-[#595853]'>{point}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default about;