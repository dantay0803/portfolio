import React from "react";
import Navigation from "../common/Navigation";
import { BLOG_NAV_LINKS, SITE_CONFIG } from "../../constants/navigation";

const Header = () => {
  return (
    <Navigation links={BLOG_NAV_LINKS} logoUrl={SITE_CONFIG.blogLogoUrl} />
  );
};

export default Header;
