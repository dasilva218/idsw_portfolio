import Image from "next/image";

function Hero() {
  return (
    <section  id="hero">
      <div className="h-full flex flex-col justify-center items-center ">
        <div className="bg-black">
          <Image
            src="/heroBg.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
      </div>
    </section>

  );
}

export default Hero;