import React from "react";
import { ShadowButton } from "../../components/ShadowButton/ShadowButton";

const Home = () => {
  return (
    <section
      className={`bg-white w-screen h-screen flex justify-center items-center flex-col`}
    >
      <h2
        className={`text-black uppercase font-roboto text-xl sm:text-3xl`}
        data-aos="fade-down"
      >
        My Portfolio
      </h2>
      <h1
        className={`uppercase tracking-[0.02em] leading-16 font-monoton px-4 overflow-hidden text-5xl sm:text-7xl text-center mt-3 sm:mt-6`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        mradul kuamr katiyar
      </h1>
      <p
        className={`w-4/5 leading-6 text-black font-roboto text-center text-base sm:text-2xl mt-3 sm:mt-5`}
        data-aos="fade-in"
        data-aos-delay="400"
      >
        ✨ Explore a world of creativity, innovation, and expertise! 🚀 Each
        project reflects passion and cutting-edge ideas 🌐🎨. From bold
        solutions 💡 to unique designs 🎥, we aim to inspire and ignite
        imaginations 🔥.Let’s shape a brighter, innovative tomorrow together.🌟
        Dive in and discover the magic! ✨
      </p>
      <div
        className={`flex gap-8 mt-9`}
        data-aos="fade-in"
        data-aos-delay="600"
      >
        <ShadowButton buttonText="Explore me" />
        <ShadowButton buttonText="Contact me" />
      </div>
    </section>
  );
};

export { Home };
