import Card from "@/components/Landing/Card";
import Header from "@/components/Landing/Header";
import HeroContent from "@/components/Landing/Hero";
import Section from "@/components/Landing/Section/Section";
import PrivacySection from "@/components/Landing/Section/PrivacySection";

import Image from "next/image";

import CusrsorSvg from "@/public/svg/cursor.svg";
import BottleSvg from "@/public/svg/bottle.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" bg-[#E9EBFF] h-max">
        <Header />
        <HeroContent />
      </div>
      <div className=" mt-16 grid gap-10">
        <Section
          title="Elevate Your Health Management Game"
          description="With Pragati.Care, you have the power to effortlessly access and manage your complete medical history, appointments, and prescriptions – all from a single, user-friendly platform."
        >
          <ul className=" grid gap-16 sm:grid-cols-2 xl:grid-cols-3">
            <li>
              <Card>
                <div className=" p-2 h-max bg-primary/25 w-max rounded-full">
                  <Image src={CusrsorSvg} width={35} alt="clicks-svg" />
                </div>
                <h4 className=" text-xl font-extrabold">
                  Book doctor appointments
                </h4>
                <p className=" text-lg font-medium">
                  Imagine scheduling appointments with just a few clicks.
                </p>
              </Card>
            </li>
            <li>
              <Card>
                <div className=" p-2 bg-primary/25 h-max w-max rounded-full">
                  <Image src={BottleSvg} width={35} alt="clicks-svg" />
                </div>
                <h4 className=" text-xl font-extrabold">Timely medication</h4>
                <p className=" text-lg font-medium">
                  Receiving timely medication reminders, and seamlessly sharing
                  your records with healthcare specialists.
                </p>
              </Card>
            </li>
            <li>
              <Card>
                <div className=" p-2 bg-primary/25 w-max h-max rounded-full">
                  <Image src={BottleSvg} width={35} alt="clicks-svg" />
                </div>
                <h4 className=" text-xl font-extrabold">Lab reports</h4>
                <p className=" text-lg font-medium">
                  Manage and find all your medical report at one click.
                </p>
              </Card>
            </li>
          </ul>

          <div className=" mt-5">
            <h4 className=" italic text-sm font-bold text-center">
              {" "}
              Pragati.Care streamlines every step, ensuring that you can focus
              on what truly matters – your well-being.
            </h4>
          </div>
        </Section>
        <PrivacySection />
      </div>
    </main>
  );
}
