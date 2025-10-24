import { Link } from "react-router";

const FooterNav = () => (
    <footer className="bg-[#EAF4FF] py-10">
        <div className="max-w-7xl my-18 px-4 mx-auto grid md:grid-cols-5 gap-10 text-[#0F0765]">
            <div className="">
                <img src="/images/dataracks-logo2.svg" alt="Dataracks" className="w-44 mb-4" />
            </div>

            <div>
                <h4 className=" mb-3 text-[#595853]">Solutions</h4>
                <ul className="space-y-3 ">
                    <li><Link to="/">OEM Contract & Manufacture</Link></li>
                    <li><Link to="/about">Rail Solutions</Link></li>
                    <li><Link to="/contact">Road Solutions</Link></li>
                    <li><Link to="/contact">Energy Solutions</Link></li>
                    <li><Link to="/contact">Data Centre Solutions</Link></li>
                    <li><Link to="/contact">Fixed Telecom Solutions</Link></li>
                    <li><Link to="/contact">Mobile Telecom Solutions</Link></li>
                    <li><Link to="/contact">Defense Solutions</Link></li>

                </ul>
            </div>

            <div>
                <h4 className=" mb-3 text-[#595853]">Products</h4>
                <ul className="space-y-3">
                    <li><Link to="/">Modular Security Cages</Link></li>
                    <li><Link to="/about">Aisle Containment</Link></li>
                    <li><Link to="/contact">Server & Network Cabinets</Link></li>
                    <li><Link to="/contact">Cabinet Accessories</Link></li>
                    <li><Link to="/contact">Wallboxes</Link></li>
                    <li><Link to="/contact">Retrofit Solutions</Link></li>
                    <li><Link to="/contact">Micro Data Centres</Link></li>
                    <li><Link to="/contact">Electromechanical Solutions</Link></li>
                </ul>
            </div>
            <div>
                <h4 className=" mb-3 text-[#595853]">Company</h4>
                <ul className="space-y-3 ">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/about">Services</Link></li>

                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
            <div>
                <h4 className=" mb-3 text-[#595853]">Connect with Us</h4>
                <ul className="space-y-3">
                    <li><a href="https://x.com/dataracksuk" target="_blank">X (Twitter)</a></li>
                    <li><a href="https://www.linkedin.com/company/dataracks" target="_blank">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t px-4 border-[#CFCFCF] md:flex justify-between max-w-7xl mx-auto pt-10 mt-10">
            <p>© 2025 Dataracks. All Rights Reserved.</p>

            <img src="/images/made-in-britain.jpg" alt="" />
        </div>
    </footer>
);

export default FooterNav;
