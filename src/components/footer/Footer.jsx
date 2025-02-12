import React from "react";

function Footer() {
  return (
    <div className="footer-container flex justify-between items-center p-12 bg-black border-t-1 border-white">
      <div className="links-container flex items-center gap-8">
        <a
          href=""
          className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
        >
          INSTAGRAM{" "}
          <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
        </a>
        <a
          href=""
          className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
        >
          LINKEDIN{" "}
          <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
        </a>
        <a
          href=""
          className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
        >
          BEHANCE{" "}
          <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
        </a>
        <a
          href=""
          className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
        >
          GITHUB{" "}
          <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
        </a>
      </div>

      <button className="text-white border-white rounded-lg border bg-transparent px-6 py-3 text-[16px] flex items-center gap-3 hover:bg-white hover:text-black transition duration-100">
        SWITCH TO DEV MODE <i className="bi bi-code-slash"></i>
      </button>
    </div>
  );
}

export default Footer;
