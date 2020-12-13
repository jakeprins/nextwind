import { Step } from 'interfaces/home';
import { getIcon } from 'utils/getIcon';

interface Props {
  image: string;
  steps: Step[];
}

const Steps1: React.FC<Props> = ({ image, steps }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {steps?.map((step, i) => {
              return (
                <div className="relative flex pb-12" key={i}>
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    {i !== steps.length - 1 && (
                      <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                    )}
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    {getIcon(i)}
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-bold tracking-wider text-gray-900 title-font">
                      {step.name}
                    </h2>
                    <p className="leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img
            className="object-cover object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0"
            src={image}
            alt="step"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps1;
