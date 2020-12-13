interface Post {
  attributes: {
    title: string;
    image: string;
    category: string;
    description: string;
    date?: Date;
    slug?: string;
  };
}

const BlogCard: React.FC<{ post: Post; version: number }> = ({
  post,
  version,
}) => {
  const { attributes } = post;

  if (version === 2) {
    return (
      <div className="flex flex-wrap py-8">
        <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
          <span className="font-medium tracking-widest text-gray-900 title-font">
            {attributes.category}
          </span>
          <span className="mt-1 text-sm text-gray-500">
            {attributes.date &&
              new Date(attributes.date).toLocaleDateString().split('T')[0]}
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
            {attributes.title}
          </h2>
          <p className="leading-relaxed">{attributes.description}</p>

          <a
            className="inline-flex items-center mt-4 text-indigo-500"
            href={`/blog/${attributes.slug}`}
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
    );
  }

  if (version === 3) {
    return (
      <div className="flex flex-wrap py-8 md:flex-no-wrap">
        <div className="relative h-full px-8 pt-16 pb-24 overflow-hidden text-center bg-gray-200 rounded-lg">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">
            {attributes.category}
          </h2>
          <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
            {attributes.title}
          </h1>
          <p className="mb-3 leading-relaxed">{attributes.description}</p>
          <a
            className="inline-flex items-center text-indigo-500"
            href={`/blog/${attributes.slug}`}
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
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden border-2 border-gray-200 rounded-lg">
      <img
        className="object-cover object-center w-full lg:h-48 md:h-36"
        src={attributes.image}
        alt="blog"
        loading="lazy"
      />
      <div className="p-6">
        <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">
          {attributes.category}
        </h2>
        <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
          {attributes.title}
        </h1>
        <p className="mb-3 leading-relaxed">{attributes.description}</p>
        <div className="flex flex-wrap items-center ">
          <a
            className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
            href={`/blog/${attributes.slug}`}
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
  );
};

export default BlogCard;
