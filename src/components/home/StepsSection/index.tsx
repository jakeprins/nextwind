import { Step } from 'interfaces/home';
import Steps1 from './Steps1';
import Steps2 from './Steps2';
import Steps3 from './Steps3';

interface Props {
  version: number;
  image: string;
  steps: Step[];
}

const StepsSection: React.FC<Props> = ({ version, steps, image }) => {
  // List of different component versions. You can easily switch between versions from the CMS.
  const components = {
    1: Steps1,
    2: Steps2,
    3: Steps3,
  };

  // Use the version prop to determine which component to render. Fallback to 1.
  const StepsComponent = components[version] || components[1];

  // Default return version 1, with hero image on the right
  return <StepsComponent steps={steps} image={image} />;
};

export default StepsSection;
