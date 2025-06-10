import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

const socialLinks = [
  { href: "https://www.linkedin.com/in/saksham-tiwari-4044a817a/", icon: <FaLinkedin /> },
  { href: "https://github.com/SakshamTiwarikk?tab=repositories", icon: <FaGithub /> },
  { href: "https://drive.google.com/file/d/1VrCdPLs3UAJ3nypqX3_L0Te9zl7vpE-4/view?usp=sharing", icon: <IoDocumentTextSharp/> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
