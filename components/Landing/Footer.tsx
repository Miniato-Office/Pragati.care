import PragatiSvg from "@/public/pragati-footer.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-primary p-4 ">
      <div className=" grid sm:grid-cols-2 xl:grid-cols-3">
        <div>
          <Image src={PragatiSvg} alt="Pragati-svg" />
          <p className=" font-medium max-w-sm mt-2">
            Elevating Your Health Journey, One Hassle-Free Record at a Time.
          </p>
        </div>

        <div>
          <p className=" text-lg font-bold">Links</p>
          <ul className=" font-medium grid gap-3 mt-2">
            <li>
              <Link href={"#"} className=" nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href={"#"} className=" nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"#"} className=" nav-link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex items-center justify-center mt-4">
        <p>Pragati.care</p>
      </div>
    </footer>
  );
}

export default Footer;
