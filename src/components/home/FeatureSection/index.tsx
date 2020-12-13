import { Feature } from 'interfaces/home';
import Features1 from './Features1';
import Features2 from './Features2';
import Features3 from './Features3';

interface Props {
  title: string;
  description: string;
  features: Feature[];
  version: number;
}

const FeatureSection: React.FC<Props> = ({
  title,
  description,
  features,
  version,
}) => {
  // List of different component versions. You can easily switch between versions from the CMS.
  const components = {
    1: Features1,
    2: Features2,
    3: Features3,
  };

  // Use the version prop to determine which component to render. Fallback to 1.
  const FeatureList = components[version] || components[1];

  return (
    <section className="text-gray-700 body-font" id="features">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl title-font">
            {title}
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            {description}
          </p>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
        <FeatureList features={features} />
        <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
          Start Free
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
