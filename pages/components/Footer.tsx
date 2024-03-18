import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-between bg-[#D9D9D9] py-4 px-10">
      <Image src={"/assets/logo.png"} alt="logo" width="100" height="100" />
      <div className="text-sm font-bold text-black">Copyright @2023 . BlogPost</div>
    </div>
  );
}
