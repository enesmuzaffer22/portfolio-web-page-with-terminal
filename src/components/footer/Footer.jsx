import { useState } from "react";
import FooterLinks from "../footer-links/FooterLinks";

function Footer(props) {
  const [isOpen, setIsOpen] = useState(false);

  const shellOpen = () => {
    props.toggleShell(true);
  };

  return (
    <div>
      {/* Social links container with animation from bottom to top */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out overflow-hidden z-20 flex flex-col`}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transformOrigin: "bottom",
          transform: isOpen ? "scaleY(1)" : "scaleY(0)",
          height: "calc(var(--vh, 1vh) * 100)",
        }}
      >
        {/* Close button at the top right */}
        <div className="absolute top-0 right-0 p-8 sm:p-12">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[24px]"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Centered social links */}
        <div className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            {isOpen && <FooterLinks animateUp={true} />}
          </div>
        </div>
      </div>

      <div className="footer-container flex justify-center sm:flex lg:justify-between items-center p-8 sm:p-12 bg-black bg-opacity-50 backdrop-blur-sm border-t-1 border-white relative z-10">
        <div className="links-container hidden sm:flex items-center gap-8">
          <FooterLinks />
        </div>

        <button
          onClick={shellOpen}
          className="text-white border-white rounded-lg border bg-transparent px-6 py-3 text-[16px] hidden items-center gap-3 lg:flex"
        >
          SWITCH TO SHELL <i className="bi bi-code-slash"></i>
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
