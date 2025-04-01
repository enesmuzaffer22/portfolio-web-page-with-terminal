import React from "react";

function FooterLinks() {
  return (
    <>
      <a
        href="https://www.instagram.com/enesmuzafferr/"
        target="_blank"
        className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
      >
        INSTAGRAM{" "}
        <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/muzaffer-yildirim/"
        target="_blank"
        className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
      >
        LINKEDIN{" "}
        <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
      </a>
      <a
        href="https://www.behance.net/muzafferyldrm"
        target="_blank"
        className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
      >
        BEHANCE{" "}
        <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
      </a>
      <a
        href="https://github.com/enesmuzaffer22"
        target="_blank"
        className="text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100"
      >
        GITHUB{" "}
        <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
      </a>
    </>
  );
}

export default FooterLinks;
