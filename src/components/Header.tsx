import React from "react";
import Navigation from "./common/Navigation";

const LINKS = [
  {
    text: "projects",
    url: "#projects",
  },
  {
    text: "about",
    url: "#about",
  },
  {
    text: "blog",
    url: "/blog",
  },
  {
    text: "resume",
    url: "#resume",
  },
  {
    text: "contact",
    url: "#contact",
  },
];

const Header = () => {
  return <Navigation links={LINKS} />;
};

export default Header;
