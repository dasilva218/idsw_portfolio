import logoImg from "@/assets/logos/logo4.webp";
import Image from "next/image";


function Logo() {
  return (
    <div className="relative w-14 h-14">
      <Image
        src={logoImg}
        alt="Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export default Logo;