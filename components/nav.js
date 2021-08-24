import Link from "next/link";
export default function nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/book-consult">Book A Visit</Link>
      <Link href="/about">About</Link>
      <Link href="/staff-bios">Our Team</Link>
      <Link href="/faq">FAQ</Link>
    </nav>
  );
}
