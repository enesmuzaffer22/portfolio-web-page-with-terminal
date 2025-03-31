import { useState } from "react";
import FooterLinks from "../footer-links/FooterLinks";

function Footer(props) {
  const [isOpen, setIsOpen] = useState(false);

  const shellOpen = () => {
    props.toggleShell(true);
  };

  return (
    <div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } social-container flex-col absolute top-0 left-0 w-screen h-screen bg-black z-20`}
      >
        <div className="flex w-full p-12 justify-end z-30">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-[24px]"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="social-links flex flex-col items-center gap-8 h-screen absolute w-full justify-center">
          <FooterLinks />
        </div>
      </div>

      <div className="footer-container flex justify-center sm:flex lg:justify-between items-center p-12 bg-black border-t-1 border-white">
        <div className="links-container hidden sm:flex items-center gap-8">
          <FooterLinks />
        </div>

        <button
          onClick={shellOpen}
          className="text-white border-white rounded-lg border bg-transparent px-6 py-3 text-[16px] hidden items-center gap-3 hover:bg-white hover:text-black transition duration-100 lg:flex"
        >
          SWITCH TO DEV MODE <i className="bi bi-code-slash"></i>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white flex flex-col gap-2 sm:hidden"
        >
          <i className="bi bi-chevron-up"></i>SOCIAL MEDIA
        </button>
      </div>
    </div>
  );
}

export default Footer;
