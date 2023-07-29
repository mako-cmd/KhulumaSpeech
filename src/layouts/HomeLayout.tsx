import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/Mobileheader";
import { useState } from "react";
import Footer from "../components/Footer";

export default function HomeLayout() {
  let header = <Header />;
  if (isMobileDevice()) {
    header = <MobileHeader />;
  }
  return (
    <>
      {header}
      <Outlet />
      <Footer />
    </>
  );
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
