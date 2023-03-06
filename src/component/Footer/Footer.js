import React from "react";

const Footer = () => {
  const about = [
    {
      name: "About",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Jobs",
      link: "#",
    },
    {
      name: "Press",
      link: "#",
    },
    {
      name: "Privacy",
      link: "#",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {about.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.link}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;
