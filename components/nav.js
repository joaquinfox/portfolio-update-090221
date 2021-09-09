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
      setDropdownWidth(`auto`);
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
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/for-employers">For Employers</Link>
      </ul>

      <div
        className="nav-icon"
        onClick={() => toggleNav()}
        style={{ cursor: "pointer" }}
      >
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
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            {" "}
            <Link href="/for-employers">For Employers</Link>
          </li>
        </ul>
      </div>
      <style jsx>{``}</style>
    </NavStyles>
  );
}
