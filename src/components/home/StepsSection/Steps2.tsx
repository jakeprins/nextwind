import { Step } from 'interfaces/home';
import { getIcon } from 'utils/getIcon';

interface Props {
  steps: Step[];
}

const Steps2: React.FC<Props> = ({ steps }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        {steps?.map((step, i) => {
          return (
            <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
                {i + 1}
              </div>
              <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
                  {getIcon(i, 12)}
                </div>
                <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                  <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                    {step.name}
                  </h2>
                  <p className="leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Steps2;
