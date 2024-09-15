import React from 'react';
import Typewriter from 'typewriter-effect';
import image from '../../../assets/banner/Black Men Clothing Promo Instagram Post.png';

const PromotionalsOffer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="hero h-[600px] w-full mt-10 mb-10 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/c3JJ9fb/Banner.png)",
        }}
      >
        <div className="hero-overlay backdrop-blur-sm"></div>
        <div className="flex flex-col md:flex-row gap-5 px-4 md:px-10 items-center justify-center">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            className="hero-content bg-fixed flex items-center justify-center md:order-1 order-2"
          >
            <div className="max-w-md text-center md:text-left">
              <div className="text-[23px] font-bold bg-clip-text md:w-80 lg:w-[500px] text-transparent text-white text-center creative-gradient-button mt-3">
                <Typewriter
                  options={{
                    strings: ['Men Summer Collection'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="mb-5 text-5xl font-bold uppercase bg-white w-80 mx-auto md:mx-0 rounded px-7 py-10 text-center mt-5">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 creative-gradient-button">
                  50% OFF
                </h2>
              </div>
              <button className="btn w-72 p-3 creative-gradient-button text-white font-bold mt-5">
                ORDER NOW
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            className="hero-content flex items-center justify-center text-neutral-content text-center bg-fixed md:order-2 order-1"
          >
            <div className="max-w-md">
              <img
                className="imageborderRounded w-full h-auto"
                src={image}
                alt="Product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalsOffer;
