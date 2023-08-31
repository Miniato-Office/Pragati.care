import Container from "@/ui/Container/Container";
import type React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  title: string;
  className?: string;
  description?: string;
  children?: React.ReactNode;
}

function Section({ title, description, children, className }: SectionProps) {
  return (
    <section className={twMerge([className])}>
      <Container>
        <h3 className=" text-2xl font-bold max-w-lg">{title}</h3>
        <p className=" max-w-2xl text-lg font-medium mt-3">{description}</p>

        <div className=" my-5">{children}</div>
      </Container>
    </section>
  );
}

export default Section;
