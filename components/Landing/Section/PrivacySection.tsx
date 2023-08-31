import Container from "@/ui/Container/Container";
import Section from "./Section";
import Card from "../Card";

import UserSvg from "@/public/svg/user.svg";
import PrivacySvg from "@/public/svg/privacy.svg"
import Image from "next/image";

function PrivacySection() {
  return (
    <Section
      title="Your Data, Your Control, Your Privacy"
      description="Rest easy knowing that your data's security is our utmost concern. Pragati.Care employs cutting-edge security protocols to ensure your information is safe and private. "
      className=" bg-landing-background py-4"
    >
      <ul className=" grid gap-16 sm:grid-cols-2 xl:grid-cols-3">
        <li>
          <Card>
            <div className=" p-2 rounded-full w-max h-max bg-primary/20">
              <Image src={UserSvg} alt="user" width={35} height={35} />
            </div>
            <h4 className=" text-xl font-extrabold">You have full control</h4>
            <p className=" text-lg font-medium">
              With complete control over who can access your records
            </p>
          </Card>
        </li>
        <li>
          <Card>
            <div className=" p-2 rounded-full w-max h-max bg-primary/20">
              <Image src={PrivacySvg} alt="privacy" width={35} height={35} />
            </div>
            <h4 className=" text-xl font-extrabold">
              Share records with privacy
            </h4>
            <p className=" text-lg font-medium">
              You can share your health records with someone without worrying
              about the privacy.
            </p>
          </Card>
        </li>
        <li>
          <Card>
            <div className=" p-2 rounded-full w-max h-max bg-primary/20">
              <Image src={UserSvg} alt="user" width={35} height={35} />
            </div>
            <h4 className=" text-xl font-extrabold">
              Share records with privacy
            </h4>
            <p className=" text-lg font-medium">
              You can share your health records with someone without worrying
              about the privacy.
            </p>
          </Card>
        </li>
      </ul>
    </Section>
  );
}

export default PrivacySection;
