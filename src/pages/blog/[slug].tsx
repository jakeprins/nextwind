import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from 'components/home/Footer';

const BlogDetailPage: React.FC<{ content: any }> = ({ content }) => {
  const { title, image } = content.attributes;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={image} />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gray-900 pb-32">
          <header className="py-16 md:py-24 container mx-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl leading-9 font-bold text-white text-center">
                {title}
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32 mx-auto md:px-6 lg:px-32 pb-16">
          <div className="max-w-4xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div>
              <nav className="sm:hidden">
                <Link href="/blog">
                  <a
                    href="#"
                    className="flex items-center text-sm mb-2 leading-5 font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out"
                  >
                    <svg
                      className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back
                  </a>
                </Link>
              </nav>
              <nav className="hidden sm:flex items-center text-sm leading-5 font-medium mb-2">
                <Link href="/">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-150 ease-in-out"
                  >
                    Home
                  </a>
                </Link>
                <svg
                  className="flex-shrink-0 mx-2 h-5 w-5 text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="/blog">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-150 ease-in-out"
                  >
                    Blogs
                  </a>
                </Link>
              </nav>
            </div>
            <div className="bg-white rounded-lg shadow-xl py-8 md:py-12 px-8 text-lg">
              <article
                className="prose lg:prose-lg mx-auto"
                dangerouslySetInnerHTML={{ __html: content.html }}
              ></article>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await import(`../../content/posts/${params.slug}.md`);

  return { props: { content: content.default } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../../content/posts', true, /\.md$/));

  const paths = postSlugs.map((slug) => {
    return `/blog/${slug}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetailPage;
