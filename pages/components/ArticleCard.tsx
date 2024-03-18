import Link from "next/link";
import React from "react";

type Post = Partial<{
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  content: string;
  slug: string;
}>;

type ArticleCardProps = {
  post: Post;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <Link href={`/posts/${post?.id}`}>
    
          <img
            src={post?.image}
            alt={post?.title}
            className="w-full h-40 object-cover"
          />
     
      </Link>
      <div className="p-4">
        <Link href={`/posts/${post?.id}`}>
       
            <h4 className="text-xl font-semibold">{post?.title}</h4>
        
        </Link>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-500">{post?.date}</p>
          <p className="text-gray-500">{post?.time} read</p>
        </div>
        <p className="mt-2 text-gray-600">
          {post?.content?.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
