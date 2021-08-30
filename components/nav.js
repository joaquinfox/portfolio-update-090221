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
  // return (
  //   <>
  //     <h1 className={style}>window</h1>
  //     <h2>{size} PX</h2>
  //     <style jsx>{`
  //       .small {
  //         color: red;
  //       }
  //     `}</style>
  //   </>
  // );

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
        <ul className={style}>
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
          background-color: black;
        }
      `}</style>
    </Nav>
  );
}
