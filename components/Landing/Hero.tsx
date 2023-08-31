import Container from "@/ui/Container/Container";
import Image from "next/image";

import LandingImage from "@/public/images/landing-hero.png";
import Link from "next/link";

function HeroContent() {
  return (
    <Container>
      <div className=" flex items-center justify-center flex-wrap-reverse gap-10 mt-10 xl:justify-between xl:mt-24">
        <div>
          <h1 className=" text-4xl font-bold max-w-lg">
            Your Pathway to Seamless{" "}
            <span className=" text-primary-active">Health Management .</span>
          </h1>
          <p className=" mt-4 max-w-xl text-lg font-medium">
            Empowering you on your health journey by revolutionizing the way you
            manage your medical records
          </p>
          <div className=" mt-10">
            <Link href={"#"} className=" hero-cta-link font-medium">
              Explore More..
            </Link>
          </div>
        </div>
        <Image src={LandingImage} alt="landing-image" width={650} />
      </div>
    </Container>
  );
}

export default HeroContent;
