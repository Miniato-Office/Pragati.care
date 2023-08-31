import Image from "next/image";
import PragatiSvg from "@/public/pragati.svg";
import Link from "next/link";
import Container from "@/ui/Container/Container";

function Header() {
  return (
    <Container>
      <header className=" flex items-center justify-between py-2">
        <Image src={PragatiSvg} alt="pragati.care" className=" h-9" />

        <nav className=" font-semibold hidden xl:flex gap-10 items-center">
          <Link href={"/"} className=" nav-link">
            Home
          </Link>
          <Link href={"/"} className=" nav-link">
            About us
          </Link>
          <Link href={"/"} className=" nav-link">
            FAQs
          </Link>
          <Link href={"/"} className=" nav-btn-type-link">
            Login
          </Link>
          <Link href={"/"} className=" nav-link">
            Signup
          </Link>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
