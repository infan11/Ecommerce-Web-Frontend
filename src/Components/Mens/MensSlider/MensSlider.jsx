const MensSlider = () => {
    return (
        <div>
            <div
                className="hero h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] w-full"
                style={{
                    backgroundImage: "url(https://i.ibb.co/9HDhqfk/MENS-COLLECTION.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="flex justify-center items-center h-full">
                    <div className="text-center max-w-xs sm:max-w-md">
                        <h1 className="mb-5 text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold">
                            MENS COLLECTION
                        </h1>
                        <p className="mb-5 text-xs sm:text-sm md:text-lg lg:text-xl text-white">
                            POWERED BY | APT COMMERCE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MensSlider;
