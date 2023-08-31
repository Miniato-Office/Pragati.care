import type React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className=" boxshadow-card bg-white py-9 px-10 grid gap-5 h-full">
      {children}
    </div>
  );
}

export default Card;
