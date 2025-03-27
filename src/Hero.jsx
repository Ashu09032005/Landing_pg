import image from './image.png';
export default function HeroSection() {
    return (
        <section className="w-full max-w-[100%] mx-auto flex items-center justify-between px-[195px] py-[80px] bg-white ">

            {/* Left Content */}
            <div className="max-w-lg">
                <h1 className="text-5xl font-bold leading-tight text-black">
                    The Smartest Way To Manage Your Legal Practice.
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Expand Your Reach, Streamline Your Workflow, Get Paid Faster.
                </p>
                <button className="mt-6 px-6 py-3 bg-[#F5C252] text-white rounded-2xl font-medium transition-all duration-300 hover:bg-[#E5B240] hover:scale-105">
                    Get Started
                </button>
            </div>

            {/* Right Image */}
            <div className="relative">
                <img src={image} alt="Laptop" className="w-[400px] drop-shadow-lg" />


            </div>

        </section>
    );
}
