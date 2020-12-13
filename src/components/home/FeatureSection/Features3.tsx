import { getIcon } from 'utils/getIcon';
import { Feature } from 'interfaces/home';

interface Props {
  features: Feature[];
}

const Features3: React.FC<Props> = ({ features }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {features?.map((feature: Feature, i: number) => {
        return (
          <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
              {getIcon(i, 10)}
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                {feature.name}
              </h2>
              <p className="text-base leading-relaxed">{feature.description}</p>
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
        );
      })}
    </div>
  );
};

export default Features3;
