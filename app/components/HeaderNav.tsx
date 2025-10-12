import { useState, useEffect } from "react";
import { Link } from "react-router";

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
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
                <Link to="/" className="flex items-center">
                    <img
                        src={`/images/dataracks-logo${isScrolled ? "2" : "1"}.svg`}
                        alt="Dataracks"
                        className="w-36"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav
                    className={`hidden md:flex space-x-8 transition ${isScrolled ? "text-[#0F0765]" : "text-white"
                        }`}
                >
                    <Link to="/" className="hover:text-primary transition">Home</Link>
                    <Link to="/products" className="hover:text-primary transition">Products</Link>
                    <Link to="/about" className="hover:text-primary transition">About us</Link>
                    <Link to="/contact" className="hover:text-primary transition">Contact us</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className={`md:hidden p-2 rounded focus:outline-none transition ${isScrolled ? "text-gray-800" : "text-white"
                        }`}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Fullscreen Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-gray-800 font-medium text-lg transition-all duration-300">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-3xl font-bold text-gray-700"
                        aria-label="Close menu"
                    >
                        ✕
                    </button>

                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-primary transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-primary transition"
                    >
                        Products
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-primary transition"
                    >
                        About us
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-primary transition"
                    >
                        Contact us
                    </Link>
                </div>
            )}
        </header>
    );
};

export default HeaderNav;
