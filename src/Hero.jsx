import image from './image.png';

export default function HeroSection() {
    return (
        <section className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[195px] py-[80px] pb-[200px] bg-white min-h-[650px]">

            {/* Left Content */}
            <div className="max-w-lg ml-0 lg:ml-[70px] text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-black">
                    The Smartest Way To Manage Your Legal Practice.
                </h1>
                <p className="mt-4 text-base lg:text-lg text-gray-600">
                    Expand Your Reach, Streamline Your Workflow, Get Paid Faster.
                </p>
                <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 bg-[#F5C252] text-white rounded-2xl font-medium transition-all duration-300 hover:bg-[#E5B240] hover:scale-105">
                    Get Started
                </button>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0 lg:absolute lg:ml-[350px]">
                <img src={image} alt="Laptop" className="w-full max-w-[550px] mx-auto lg:ml-[450px]" />
            </div>

        </section>
    );
}
