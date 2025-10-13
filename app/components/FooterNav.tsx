import { Link } from "react-router";

const FooterNav = () => (
    <footer className="bg-[#EAF4FF] py-10">
        <div className="max-w-7xl my-18 px-4 mx-auto grid md:grid-cols-6 gap-1 text-[#0F0765]">
            <div className="md:col-span-2">
                <img src="/images/dataracks-logo2.svg" alt="Dataracks" className="w-36 mb-4" />
            </div>

            <div>
                <h4 className=" mb-3 text-[#595853]">Contact us</h4>
                <p>T: +44(0)1954 232020</p>
                <p>E: sales@dataracks.co.uk</p>
            </div>

            <div>
                <h4 className=" mb-3 text-[#595853]">Explore</h4>
                <ul className="space-y-1 ">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>

            <div>
                <h4 className=" mb-3 text-[#595853]">Products</h4>
                <ul className="space-y-1">
                    <li><Link to="/">Server Cabinets</Link></li>
                    <li><Link to="/about">Aisle Containment</Link></li>
                    <li><Link to="/contact">Security cages</Link></li>
                </ul>
            </div>

            <div>
                <h4 className=" mb-3 text-[#595853]">Connect with Us</h4>
                <ul className="space-y-1">
                    <li><a href="https://www.linkedin.com/company/dataracks" target="_blank">LinkedIn</a></li>
                    <li><a href="https://x.com/dataracksuk" target="_blank">Twitter</a></li>
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
