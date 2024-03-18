import BackButton from "@/pages/components/backButton";
import { blogData } from "@/utilities/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return (
      <div className="flex justify-center items-center">
        <Image src={"/assets/logo.png"} alt="logo" width="100" height="100" />
        <p>Loading...</p>
      </div>
    );
  }

  if (!id) {
    return null;
  }

  const post = blogData.find(
    (post: { id: number | number[] }) =>
      post.id === Number.parseInt(id as string)
  );
  console.log("POST", post);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="container mb-4">
        {" "}
        <BackButton/>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">{post.title}</h1>
        <div className="flex justify-center text-gray-500 my-2">
          <p className="px-2">{post.date}</p>
          <p>{post.time} read</p>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg"
        />
        <div className="my-4">
          <p className="text-wrap leading-8 tracking-wide">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
