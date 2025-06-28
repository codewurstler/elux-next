import Image from "next/image";

const HomeHero = ({children}) => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
                <Image
                    src="/elux-bg.jpg"
                    alt="Hero"
                    fill
                    priority
                    className="object-cover animated-bg"
                />
            <div className="absolute inset-0 bg-white/20 animated-blur mix-blend-overlay z-10" />
            <div className="absolute inset-0 z-20 animated-gradient bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 bg-200 mix-blend-overlay opacity-65" />
            <div className="absolute inset-0 z-30 flex mt-35 md:mt-0 md:items-center justify-center">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HomeHero;