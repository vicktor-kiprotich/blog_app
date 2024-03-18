import { blogData } from "@/utilities/data/blogData";
import ArticleCard from "./components/ArticleCard";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-start">
        <h1 className="text-4xl font-bold">The Accessibility Blog</h1>
        <p className="text-gray-500">The voice of the excluded</p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogData.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
