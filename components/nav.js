import Link from "next/link";
import Nav from "../styles/components/nav";
export default function nav() {
  return (
    <Nav>
      <Link href="/">Home</Link>
      <Link href="/book-consult">Book A Visit</Link>
      <Link href="/about">About</Link>
      <Link href="/staff-bios">Our Team</Link>
      <Link href="/faq">FAQ</Link>
    </Nav>
  );
}
