import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push("/posts/search");
  };

  return (
    <div className="flex flex-row justify-between items-center bg-[#D9D9D9] py-4 px-6 md:px-10">
      <Link href="/">
        <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/">Blogs</Link>
        <div
          className="cursor-pointer border rounded border-gray-500 flex items-center"
          onClick={handleSearchClick}
        >
          <p className="px-2 py-1 min-w-[20%]">Search</p>
          <Image src="/assets/search.png" alt="search" width={15} height={15} className="mx-2"/>
        </div>
        <Link
          href="/posts/create"
          className="bg-[#8E8E8E] p-2 rounded-md text-white uppercase text-xs"
        >
          Create Blog Post
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <Image src="/assets/menu.png" alt="menu" width={30} height={30} />
      </div>
    </div>
  );
}
