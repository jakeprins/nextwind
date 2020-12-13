import { useEffect, useState } from 'react';
import Posts1 from './Posts1';
import Posts2 from './Posts2';
import Posts3 from './Posts3';

const BlogSection: React.FC<{
  version: number;
  title: string;
  description: string;
  slugs: string[];
}> = ({ title, description, slugs, version }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsPromises = await slugs.map(async (slug) => {
        return import(`../../../content/posts/${slug}.md`);
      });

      Promise.all(postsPromises).then(setPosts);
    };

    getPosts();
  }, [slugs]);

  // List of different component versions. You can easily switch between versions from the CMS.
  const components = {
    1: Posts1,
    2: Posts2,
    3: Posts3,
  };

  // Use the version prop to determine which component to render. Fallback to 1.
  const BlogPostList = components[version] || components[1];

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl title-font">
            {title}
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            {description}
          </p>
        </div>
        <BlogPostList posts={posts} />
      </div>
    </section>
  );
};

export default BlogSection;
