import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className=" px-4 xl:w-[90vw] 2xl:w-[80vw] xl:mx-auto">{children}</div>;
}

export default Container;
