import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../styles/components/nav";

export default function nav() {
  const [size, setSize] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const checkSize = async () => {
    let s = await window.innerWidth;
    if (s < 600) {
      console.log(`small screen`, s);
    } else {
      console.log(`big screen`, s);
      setReveal(false);
    }
    setSize(s);
  };

  useEffect(() => {
    checkSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  const toggleNav = () => {
    setReveal(!reveal);
    if (reveal) {
      setDropdownWidth(`25%`);
      setOpacity(1);
    } else {
      setDropdownWidth("0px");
      setOpacity(0);
    }
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

      <div onClick={() => toggleNav()} style={{ cursor: "pointer" }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <ul style={{ width: dropdownWidth, opacity: opacity }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/book-consult">Book A Visit</Link>
          </li>
          <li>
            {" "}
            <Link href="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link href="/staff-bios">Our Team</Link>
          </li>
          <li>
            {" "}
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <style jsx>{``}</style>
    </Nav>
  );
}
