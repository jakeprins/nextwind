const Posts2: React.FC<{
  posts: { attributes: any }[];
}> = ({ posts }) => {
  return (
    <div className="flex flex-wrap mt-4">
      {posts?.map((post, i) => {
        return (
          <div className="flex flex-wrap py-8 md:flex-no-wrap">
            <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
              <span className="font-medium tracking-widest text-gray-900 title-font">
                {post.attributes.category}
              </span>
              <span className="mt-1 text-sm text-gray-500">
                {post.attributes.date &&
                  new Date(post.attributes.date)
                    .toLocaleDateString()
                    .split('T')[0]}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
                {post.attributes.title}
              </h2>
              <p className="leading-relaxed">{post.attributes.description}</p>
              <a
                className="inline-flex items-center mt-4 text-indigo-500"
                href={`/blog/${post.attributes.slug}`}
              >
                Learn More
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
        );
      })}
    </div>
  );
};

export default Posts2;
