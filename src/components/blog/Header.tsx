import React from "react";
import Navigation from "../common/Navigation";

const LINKS = [
  {
    text: "All Posts",
    url: "/blog",
  },
];

const Header = () => {
  return <Navigation links={LINKS} />;
};

export default Header;
