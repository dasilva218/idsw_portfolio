import LogoImg from "../logo/Logo";
import Link from "./Link";


export default function NavBar() {


  const MENU = [
    { section: 'hero', link: 'Accueil' },
    { section: 'About', link: 'À propos' },
    { section: 'Skills', link: 'Compétences' },
    { section: 'Experiences', link: 'Expériences' },
    { section: 'Projects', link: 'Projets' }
  ]

  return (
    <nav className="flex justify-center items-center md:justify-between">
      {/* <Image src={'/logo/logo4.png'} alt="logo" width={50} height={50} /> */}
      <LogoImg />
      <ul className="hidden space-x-4 md:flex">
        {
          MENU.map((item) => {
            return (
              <Link key={item.section} children={item} />
            )
          })
        }
      </ul>
    </nav>
  );
}