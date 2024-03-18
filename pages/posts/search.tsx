import { useState } from "react";
import Link from "next/link";
import { blogData } from "@/utilities/data/blogData";
import ArticleCard from "../components/ArticleCard";
import Image from "next/image";
import BackButton from "../components/backButton";

const BlogSearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogData = blogData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen container mx-auto p-4">
    <BackButton/>
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-4xl font-bold">Search Blogs</h1>
        <div className="w-full max-w-md flex border border-gray-300 rounded my-6">
          <input
            type="text"
            placeholder="Search for a blog post..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none"
          />
          <button className="px-4 py-2 rounded">
          <Image src="/assets/search.png" alt="logo" width={15} height={15} />
          </button>
        </div>
        <p className="text-gray-500">
          Showing {filteredBlogData.length} Results for "{searchTerm}"
        </p>
      </div>
      {filteredBlogData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBlogData.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center my-8">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <p className="text-gray-500">No blog posts found.</p>
        </div>
      )}
    </div>
  );
};

export default BlogSearchScreen;
