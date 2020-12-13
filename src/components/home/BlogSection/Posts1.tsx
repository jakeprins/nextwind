const Posts1: React.FC<{
  posts: { attributes: any }[];
}> = ({ posts }) => {
  return (
    <div className="flex flex-wrap mt-4 -m-4">
      {posts?.map((post, i) => {
        return (
          <div className="p-4 md:w-1/3" key={i}>
            <div className="flex flex-col h-full overflow-hidden border-2 border-gray-200 rounded-lg">
              <img
                className="object-cover object-center w-full lg:h-48 md:h-36"
                src={post.attributes.image}
                alt="blog"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">
                  {post.attributes.category}
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  {post.attributes.title}
                </h1>
                <p className="mb-3 leading-relaxed">
                  {post.attributes.description}
                </p>
                <div className="flex flex-wrap items-center ">
                  <a
                    className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                    href={`/blog/${post.attributes.slug}`}
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts1;
