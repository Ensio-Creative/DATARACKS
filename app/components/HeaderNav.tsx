import { useState, useEffect } from "react";
import { Link } from "react-router";

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center z-50">
                    <img
                        src={`/images/dataracks-logo${isScrolled || menuOpen ? "2" : "1"}.svg`}
                        alt="Dataracks"
                        className="w-36"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav
                    className={`hidden md:flex space-x-8 transition ${isScrolled ? "text-[#0F0765]" : "text-white"
                        }`}
                >
                    <Link to="/" className="hover:text-primary transition">
                        Home
                    </Link>

                    {/* Products Dropdown */}
                    <div
                        className=" group"
                        onMouseEnter={() => setIsProductsOpen(true)}
                    >
                        <button className="hover:text-primary transition flex items-center space-x-1">
                            <Link to="/products" className="flex gap-1">
                                <span>Products</span>
                                <img src="/images/arrow.svg" className={`${isProductsOpen ? 'rotate-180' : ""}`} alt="" />
                                {/* <span className="text-sm"> {isProductsOpen ?  : "▼"} </span> */}
                            </Link>
                        </button>

                        {/* Dropdown Menu */}
                        {isProductsOpen && (
                            <div onMouseLeave={() => setIsProductsOpen(false)}
                                className="absolute left-0 right-0 top-full w-screen bg-white shadow-lg border-t border-[#CFCFCF]">
                                <div className="max-w-6xl ml-auto px-10 py-8 grid grid-cols-3 gap-6">
                                    {/* Product 1 */}
                                    <Link
                                        to="/products/server-cabinets"
                                        className="hover:opacity-80 transition"
                                    >
                                        <img
                                            src="/images/header/dataracks-home-server-cabinets-product.jpg"
                                            alt="Server Cabinets"
                                            className="mb-4 h-40 w-full object-cover"
                                        />
                                        <p className="text-[#0F0765]">Server Cabinets</p>
                                    </Link>

                                    {/* Product 2 */}
                                    <Link
                                        to="/products/aisle-containment"
                                        className="hover:opacity-80 transition"
                                    >
                                        <img
                                            src="/images/header/dataracks-home-aisle-containment.jpg"
                                            alt="Aisle Containment"
                                            className="mb-4 h-40 w-full object-cover"
                                        />
                                        <p className="text-[#0F0765]">Aisle Containment</p>
                                    </Link>

                                    {/* Product 3 */}
                                    <Link
                                        to="/products/security-cages"
                                        className="hover:opacity-80 transition"
                                    >
                                        <img
                                            src="/images/header/dataracks-home-security-cages-product.jpg"
                                            alt="Security Cages"
                                            className="mb-4 h-40 w-full object-cover"
                                        />
                                        <p className="text-[#0F0765]">Security Cages</p>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="hover:text-primary transition">
                        About us
                    </Link>
                    <Link to="/contact" className="hover:text-primary transition">
                        Contact us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`md:hidden p-2 rounded focus:outline-none transition z-50 ${isScrolled || menuOpen ? "text-gray-800" : "text-white"
                        }`}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col justify-between px-5 py-6">
                    <div>
                        {/* <div className="flex justify-between items-center mb-6">
                            <img src="/images/dataracks-logo2.svg" alt="Dataracks" className="w-32" />
                            <button onClick={() => setMenuOpen(false)} className="text-[#0F0765] text-sm">
                                Close
                            </button>
                        </div> */}

                        <p className="text-gray-500 text-sm mb-2 mt-20">Navigation</p>
                        <hr className="mb-4 border-gray-300" />

                        <ul className="space-y-6 text-[#0F0765]">
                            <li className="text-2xl font-light border-b border-gray-200 pb-2">
                                <Link to="/" onClick={() => setMenuOpen(false)}>
                                    Home
                                </Link>
                            </li>

                            <li className="text-2xl font-light border-b border-gray-200 pb-2">
                                <details open={isProductsOpen} onToggle={() => setIsProductsOpen(!isProductsOpen)}>
                                    <summary className="flex justify-between items-center cursor-pointer">
                                        <span>
                                            <Link to="/products" onClick={() => setMenuOpen(false)}>
                                                Products
                                            </Link>
                                        </span>
                                        <span className="text-3xl">{isProductsOpen ? "−" : "+"}</span>
                                    </summary>
                                    <ul className="ml-6 mt-3 space-y-3 text-base">
                                        <li>
                                            <Link to="/products/server-cabinets" onClick={() => setMenuOpen(false)}>
                                                Server Cabinets
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products/aisle-containment" onClick={() => setMenuOpen(false)}>
                                                Aisle Containment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products/security-cages" onClick={() => setMenuOpen(false)}>
                                                Security Cages
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li className="text-2xl font-light border-b border-gray-200 pb-2">
                                <Link to="/about" onClick={() => setMenuOpen(false)}>
                                    About us
                                </Link>
                            </li>
                            <li className="text-2xl font-light border-b border-gray-200 pb-2">
                                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-[#0F0765] text-sm space-y-2">
                        <p>T: +44(0)1954 252800</p>
                        <p>E: sales@dataracks.co.uk</p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeaderNav;
