import React from "react";
import Image from "next/image";

function Header() {
  return (
    <section className="bg-slate-400 container mx-auto flex flex-col px-12 py-4  mt-11">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold">
            Hello, I'm Febriansyah
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            atque deleniti aperiam tempora, odit nobis fuga minima. Culpa, vel
            aperiam rem unde itaque maxime nihil eos, non magnam soluta
            necessitatibus.
          </p>
        </div>
        <div className="col-span-5">
          <Image
            src="/images/me-foto.png"
            alt="me image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
