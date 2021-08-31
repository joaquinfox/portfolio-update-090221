import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../styles/components/nav";

export default function nav() {
  const [size, setSize] = useState(0);
  const [style, setStyle] = useState("small");
  const [reveal, setReveal] = useState(false);

  const checkSize = async () => {
    let s = await window.innerWidth;
    if (s < 600) {
      console.log(`small screen`, s);
      setStyle("small");
      // pass a style to the component
    } else {
      console.log(`big screen`, s);
      setReveal(false);
      setStyle("big");
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
      <div
        style={{
          display: reveal ? "block" : "none",
          // backgroundColor: "black",
          // float: "right",
        }}
      >
        <ul className={(style, "dropDown")}>
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
      <style jsx>{`
        .dropDown {
          border: 3px solid #0070f3;
          color: #0070f3;
          background-color: rgba(255, 255, 255, 1);
          position: absolute;
          top: 40px;
          right: 0px;
          // z-index: 0;
        }
        .dropDown > li {
          list-style: none;
          margin-top: 100%;
          letter-spacing: 2px;
        }
        .small {
          color: red;
        }
      `}</style>
    </Nav>
  );
}
