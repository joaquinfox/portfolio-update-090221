import React, { useState } from "react";
import Link from "next/link";
import Nav from "../styles/components/nav";
export default function nav() {
  const [navView, setNavView] = useState(false);
  const toggleNav = () => {
    alert("hanga banga");
  };
  return (
    <Nav>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/book-consult">Book A Visit</Link>
        <Link href="/about">About</Link>
        <Link href="/staff-bios">Our Team</Link>
        <Link href="/faq">FAQ</Link>
      </ul>
      <div onClick={() => toggleNav()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Nav>
  );
}
