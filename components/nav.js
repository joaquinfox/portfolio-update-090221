import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavStyles from "../styles/components/nav";

export default function Nav() {
  const [size, setSize] = useState(0);
  const [reveal, setReveal] = useState(true);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const checkSize = async () => {
    let s = await window.innerWidth;

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
    <NavStyles>
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
        <ul
          style={{
            width: dropdownWidth,
            opacity: opacity,
            display: reveal ? "none" : "block",
          }}
        >
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
    </NavStyles>
  );
}
