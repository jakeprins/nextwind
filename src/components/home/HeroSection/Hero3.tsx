interface Props {
  title: string;
  description: string;
  image: string;
}

const Hero3: React.FC<Props> = ({ title, description, image }): JSX.Element => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <img
          className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
          alt="hero"
          src={image}
          loading="lazy"
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Button
            </button>
            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
