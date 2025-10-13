const Hero = ({ image, title }: { image?: string; title?: string }) => {
    return (!title ?
        <section className="bg-[#B5B7D2] text-white relative">
            <video autoPlay muted loop className="h-[80vh] w-full object-cover">
                <source src="/images/dataracks-video_091236.mp4" />
            </video>
            <div className="absolute inset-0 bg-[#0F07654D]"></div>
            <div className="max-w-7xl absolute top-0 mx-auto md:flex justify-between pt-96 pb-20 px-6">
                <h1 className="text-4xl md:text-5xl md:w-1/2 leading-snug">
                    Precision-Engineered Data Centre Solutions, Built in the UK
                </h1>
                <button className="mt-auto border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#3B3B3B] transition">
                    Explore our products
                </button>
            </div>
        </section> : <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-[#0F07654D]"></div>

            <div className="relative max-w-7xl mx-auto md:py-68 py-40 md:px-6">
                <h1 className="text-4xl md:text-5xl w-1/2 mx-auto leading-snug  text-center text-white">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
