import { GetStaticProps, NextPage } from 'next';

import Layout from 'components/home/Layout';
import BlogCard from 'components/home/BlogCard';

const BlogPage: NextPage<{ posts: any[] }> = ({ posts }) => {
  return (
    <Layout>
      <div className="min-h-screen px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Blog
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              {posts.map((post, i) => {
                return <BlogCard post={post} key={i} version={1} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context) as any;

    const data = keys.map((_, index) => {
      const post = values[index];
      return post;
    });

    return data;
  })(require.context('../../content/posts', true, /\.md$/));

  return { props: { posts } };
};

export default BlogPage;
