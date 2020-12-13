import { ComponentType } from 'react';
import BlogCard from 'components/home/BlogCard';

const PostPreview: ComponentType<any> = ({ entry, widgetFor }) => {
  const post = {
    title: entry.getIn(['data', 'title']),
    description: entry.getIn(['data', 'description']),
    image: entry.getIn(['data', 'image']),
    category: entry.getIn(['data', 'category']),
    body: widgetFor('body'),
  };

  return (
    <>
      <article>
        <div className="pb-32 bg-gray-800">
          <header className="container pt-16 pb-12 mx-auto">
            <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold leading-9 text-center text-white">
                {post.title}
              </h1>
            </div>
          </header>
        </div>

        <main className="container mx-auto -mt-32 md:px-6 lg:px-32">
          <div className="max-w-4xl px-4 pb-12 mx-auto sm:px-6 lg:px-8">
            <div className="min-h-screen p-6 text-lg prose bg-white rounded-lg shadow-xl sm:p-8">
              {post.body}
            </div>
          </div>
        </main>
      </article>
      <section className="container p-12 mx-auto text-gray-700 body-font">
        <h1 className="text-2xl font-bold leading-9">Preview</h1>
        <div className="flex flex-wrap mt-4 -m-4">
          <div className="p-4 md:w-1/2">
            <BlogCard post={{ attributes: post }} version={1} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PostPreview;
