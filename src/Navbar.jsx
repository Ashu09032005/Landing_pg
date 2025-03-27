
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white h-[92px]">
            <div className="text-2xl font-extrabold text-yellow-600">Jurident</div>
            <ul className="flex space-x-8 text-gray-700 font-bold">
                <li className="hover:text-yellow-600 cursor-pointer">Why Jurident</li>
                <li className="hover:text-yellow-600 cursor-pointer">How it works</li>
                <li className="hover:text-yellow-600 cursor-pointer">AI Drafting</li>
                <li className="hover:text-yellow-600 cursor-pointer">Help</li>
            </ul>
            <div className="flex space-x-4">
                <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:opacity-80">Explore Jurident</button>
                <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 hover:text-white">Book a Demo</button>
            </div>
        </nav>
    );
};