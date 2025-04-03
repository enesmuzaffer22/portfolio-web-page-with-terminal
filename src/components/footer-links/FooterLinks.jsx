import React from "react";

function FooterLinks({ animateUp = false }) {
  const links = [
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/enesmuzafferr/",
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/muzaffer-yildirim/",
    },
    {
      name: "BEHANCE",
      url: "https://www.behance.net/muzafferyldrm",
    },
    {
      name: "GITHUB",
      url: "https://github.com/enesmuzaffer22",
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className={`text-white flex items-center gap-2 group opacity-75 hover:opacity-100 transition ease-in duration-100 ${
            animateUp ? "text-[20px]" : ""
          }`}
          style={
            animateUp
              ? {
                  animation: `fadeInUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }
              : {}
          }
        >
          {link.name}{" "}
          <i className="bi bi-arrow-up-right-circle text-[16px] text-white group-hover:rotate-45 transition ease-in duration-100"></i>
        </a>
      ))}
    </>
  );
}

export default FooterLinks;
