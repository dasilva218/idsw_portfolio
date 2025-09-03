import Image from "next/image";

function LogoImg() {
  return (
    <div className="relative w-14 h-14">
      <Image
        src="/logo/logo4.webp"
        alt="Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export default LogoImg;