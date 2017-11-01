import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

const Header = (props) => {
  let headerProps = props.props.app;
  console.log(headerProps)
  return (
    <NavBar>{headerProps.title}</NavBar>
  );
};

Header.propTypes = {};

export default Header;