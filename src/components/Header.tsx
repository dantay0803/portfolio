import React from "react";
import Navigation from "./common/Navigation";
import { MAIN_NAV_LINKS } from "../constants/navigation";

const Header = () => {
  return <Navigation links={MAIN_NAV_LINKS} />;
};

export default Header;
