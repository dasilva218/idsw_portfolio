'use client'
export default function Link({ children }: LinkProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <li >
      <button className="btn btn-ghost btn-sm" onClick={() => scrollToSection(children.section)} >{children.link}</button>
    </li>
  );

}
type LinkProps = {
  // onClick: (sectionId: string) => void;
  children: {
    section: string;
    link: string;
  }
};