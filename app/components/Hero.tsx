const Hero = ({ image, title }: { image?: string; title?: string }) => {
    return (!title ?
        <section className="bg-[#B5B7D2] text-white">
            <div className="max-w-7xl mx-auto flex justify-between pt-80 pb-20 px-6">
                <h1 className="text-4xl md:text-5xl w-1/2 leading-snug">
                    Precision-Engineered Data Centre Solutions, Built in the UK
                </h1>
                <button className="mt-auto border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#3B3B3B] transition">
                    Explore our products
                </button>
            </div>
        </section> : <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-[#0F07654D]"></div>

            <div className="relative max-w-7xl mx-auto py-68 px-6">
                <h1 className="text-4xl md:text-5xl w-1/2 mx-auto leading-snug text-center text-white">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
