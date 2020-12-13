interface Props {
  title: string;
  description: string;
  plans: Array<{
    name: string;
    description: string;
    price: string;
    usps: { name: string }[];
  }>;
}

const PricingSection: React.FC<Props> = ({ title, description, plans }) => {
  return (
    <section className="text-gray-700 body-font" id="pricing">
      <div className="px-5 py-24 mx-auto md:max-w-5xl lg:max-w-6xl">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl sm:text-3xl title-font">
            {title}
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            {description}
          </p>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          {plans?.map((plan, i) => {
            return (
              <div className="w-full p-4 md:w-1/3" key={i}>
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                  <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                    {plan.name}
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>{plan.price}</span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /mo
                    </span>
                  </h1>
                  <div className="my-2">
                    {plan.usps?.map((usp, i) => {
                      return (
                        <p
                          className="flex items-center mb-2 text-gray-600"
                          key={i}
                        >
                          <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-green-500 rounded-full">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          {usp}
                        </p>
                      );
                    })}
                  </div>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                    Start free
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-gray-500">
                    {plan.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
