import React, { Fragment } from "react";
import MetisMenu from "react-metismenu";
import { useDispatch, useSelector } from "react-redux";
import { setEnableMobileMenu } from "../../redux/themeOptionsSlice";
import { MatieresPremieres, ProduitsFinals } from "./NavItems";

const Nav = (props) => {
  const dispatch = useDispatch();
  let { enableMobileMenu } = useSelector((state) => state.ThemeOptions);

  const toggleMobileSidebar = () => {
    dispatch(setEnableMobileMenu(!enableMobileMenu));
  };

  return (
    <Fragment>
      <MetisMenu
        content={ProduitsFinals}
        onSelected={toggleMobileSidebar}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />
      <MetisMenu
        content={MatieresPremieres}
        onSelected={toggleMobileSidebar}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />
    </Fragment>
  );
};

export default Nav;
