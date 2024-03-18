import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchClick = () => {
    router.push("/posts/search");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center bg-[#D9D9D9] py-2 px-4 md:py-4 md:px-10">
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
          <Image
            src="/assets/search.png"
            alt="search"
            width={15}
            height={15}
            className="mx-2"
          />
        </div>
        <Link
          href="/posts/create"
          className="bg-[#8E8E8E] p-2 rounded-md text-white uppercase text-xs"
        >
          Create Blog Post
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleSidebar}>
          <Image src="/assets/menu.png" alt="menu" width={30} height={30} />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-85 z-50 text-white w-[40%] right-0">
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar}>
              <Image
                src="/assets/close.png"
                alt="close"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" onClick={toggleSidebar}>
              Blogs
            </Link>
            <div
              className="cursor-pointer border rounded border-gray-500 flex items-center"
              onClick={() => {
                handleSearchClick();
                toggleSidebar();
              }}
            >
              <p className="px-2 py-1 min-w-[20%]">Search</p>
              <Image
                src="/assets/search.png"
                alt="search"
                width={15}
                height={15}
                className="mx-2"
              />
            </div>
            <Link
              href="/posts/create"
              className="bg-[#8E8E8E] p-2 rounded-md text-white uppercase text-xs"
              onClick={toggleSidebar}
            >
              Create Blog Post
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
