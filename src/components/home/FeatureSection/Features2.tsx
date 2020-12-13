import { getIcon } from 'utils/getIcon';
import { Feature } from 'interfaces/home';

interface Props {
  features: Feature[];
}

const Features2: React.FC<Props> = ({ features }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {features?.map((feature: Feature, i: number) => {
        return (
          <div className="p-4 md:w-1/3" key={i}>
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
                  {getIcon(i, 5)}
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  {feature.name}
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  {feature.description}
                </p>
                <a className="inline-flex items-center mt-3 text-indigo-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
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

export default Features2;
