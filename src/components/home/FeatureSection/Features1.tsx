import { getIcon } from 'utils/getIcon';
import { Feature } from 'interfaces/home';

interface Props {
  features: Feature[];
}

const Features1: React.FC<Props> = ({ features }) => {
  return (
    <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
      {features?.map((feature: Feature, i: number) => {
        return (
          <div
            className="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0"
            key={i}
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
              {getIcon(i, 8)}
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                {feature.name}
              </h2>
              <p className="text-base leading-relaxed">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features1;
