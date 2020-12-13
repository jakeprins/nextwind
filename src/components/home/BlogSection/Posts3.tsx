const Posts3: React.FC<{
  posts: { attributes: any }[];
}> = ({ posts }) => {
  return (
    <div className="flex flex-wrap mt-4 -m-4">
      {posts?.map((post, i) => {
        return (
          <div className="p-4 md:w-1/3" key={i}>
            <div className="flex flex-wrap py-8 md:flex-no-wrap">
              <div className="relative h-full px-8 pt-16 pb-24 overflow-hidden text-center bg-gray-200 rounded-lg">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">
                  {post.attributes.category}
                </h2>
                <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                  {post.attributes.title}
                </h1>
                <p className="mb-3 leading-relaxed">
                  {post.attributes.description}
                </p>
                <a
                  className="inline-flex items-center text-indigo-500"
                  href={`/blog/${post.attributes.slug}`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts3;
