import React, { Fragment, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { Slider } from "react-burgers";

import AppMobileMenu from "../AppMobileMenu";

import { setEnableClosedSidebar } from "../../redux/themeOptionsSlice";
const HeaderLogo = () => {
  let { enableClosedSidebar } = useSelector((state) => state.ThemeOptions);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    active: false,
    mobile: false,
    activeSecondaryMenuMobile: false,
  });

  const toggleEnableClosedSidebar = () => {
    dispatch(setEnableClosedSidebar(!enableClosedSidebar));
  };

  return (
    <Fragment>
      <div className="app-header__logo" style={{ backgroundColor: "#43425d" }}>
        <div className="logo-src" />
        {/*  <h3>E-Learning</h3> */}
        <div className="header__pane ml-auto">
          <div onClick={toggleEnableClosedSidebar}>
            <Slider
              width={26}
              lineHeight={2}
              lineSpacing={5}
              color="#6c757d"
              active={state.active}
              onClick={() => setState({ ...state, active: !state.active })}
            />
          </div>
        </div>
      </div>
      <AppMobileMenu />
    </Fragment>
  );
};

export default HeaderLogo;
