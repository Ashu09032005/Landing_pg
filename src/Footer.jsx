import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";
import Logo from "../src/assets/JuridentLogo.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex justify-between items-start gap-8">

                {/* Left-aligned Logo & Address */}
                <div className="w-1/4 min-w-[220px]">
                    <img src={Logo} alt="Valsco Tech Logo" className="w-[120px] h-[50px]" />
                    <p className="mt-2 text-gray-400">Valsco Technology</p>
                    <p className="text-gray-400">J-3 Shatabdi Enclave</p>
                    <p className="text-gray-400">Noida-201301, Uttar Pradesh</p>
                    <p className="mt-2 text-gray-400">connect@valscotech.com</p>
                    <p className="mt-4 text-gray-400 font-semibold">Join our community</p>
                    <div className="flex space-x-4 mt-2">
                        <TbBrandDiscord size={24} />
                        <FaTwitter size={24} />
                        <CiYoutube size={24} />
                        <FaInstagram size={24} />
                    </div>
                </div>

                {/* Centered Use Cases (Text Right-Aligned) */}
                <div className="w-1/4 min-w-[180px] text-left">
                    <h3 className="text-lg font-semibold">Use Cases</h3>
                    <ul className="mt-4 text-gray-400 space-y-2">
                        <li>Case Management</li>
                        <li>Legal Research & Assistance</li>
                    </ul>
                </div>

                {/* Right-aligned Company Section */}
                <div className="w-1/4 min-w-[180px] text-left">
                    <h2 className="text-lg font-semibold">Company</h2>
                    <ul className="mt-4 text-gray-400 space-y-2">
                        <li className="cursor-pointer hover:text-gray-400">About Us</li>
                        <li className="cursor-pointer hover:text-gray-400">Careers</li>
                        <li className="cursor-pointer hover:text-gray-400">FAQs</li>
                        <li className="cursor-pointer hover:text-gray-400">Teams</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <hr className="border-gray-700 my-6" />
            <p className="text-center text-gray-400">
                © 2025, Valsco Technologies. All Rights Reserved
            </p>
        </footer>
    );
}
