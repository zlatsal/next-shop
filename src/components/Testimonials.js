import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="container py-16 grid-cols-2">
      <div>
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
      </div>
      <div className="grid lg:grid-cols-[300px,1fr] gap-4">
        <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
          <div className="text-center flex flex-col items-center gap-1">
            <Image
              className="rounded-full inline-block"
              src="/images/user.png"
              width={80}
              height={80}
              alt="profile"
            />
            <h3 className="text-gray-500 font-black text-[20px]">Jane Doe</h3>
            <p>CEO & Founder Invision</p>
            <Image
              className="inline-block py-2"
              src="/images/quotes.svg"
              width={30}
              height={30}
              alt="quotes"
            />
            <p className="max-w-[200px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="bg-red-600 bg-[url(/cta-banner.png)] bg-cover h-[500px] rounded-2xl grid place-items-center">
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-blackish text-white p-2 rounded-md">
              25% DISCOUNT
            </button>
            <h2 className="font-extrabold text-2xl text-[#272727]">
              Summer Collection
            </h2>
            <p className="text-gray-500 text-[20px]">
              Starting at $20 <strong>Shop Now</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
