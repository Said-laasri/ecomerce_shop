import React from "react";

const NavBar = () => {
  return (
    <nav className="flex sm:justify-center space-x-4 px-6">
      {[
        ["Home", "/home"],
        ["Team", "/team"],
        ["Products", "/products"],
        ["About", "/about"],
      ].map(([title, url]) => (
        <a
          key={url}
          href={url}
          className="rounded-lg px-3 py-2 text-sm font-semibold text-white  hover:text-black hover:bg-gray-300"
        >
          {title}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
