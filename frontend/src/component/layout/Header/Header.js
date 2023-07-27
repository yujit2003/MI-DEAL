import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "rgb(8, 72, 88)",
  logoHoverSize: "10px",
  logoHoverColor: "rgb(255, 255, 255)",
  link1Text: "Login/Registration",
  link2Text: "Products",
  link3Text: " My Cart",
  link4Text: "Search",
  link1Url: "/login",
  link2Url: "/products",
  link3Url: "/cart",
  link4Url: "/search",
  link1Size: "1.3vmax",
  link1Color: "rgb(0, 0, 0)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#39a8e9",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgb(255, 255, 255)",
  searchIconColor: "rgb(255, 255, 255)",
  cartIconColor: "rgb(255, 255, 255)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "blue",
  cartIconColorHover: "rgb(255, 255, 255)",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
