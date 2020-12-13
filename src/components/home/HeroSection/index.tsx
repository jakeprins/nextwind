import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';

interface Props {
  version: number;
  title: string;
  description: string;
  image: string;
}

const HeroSection: React.FC<Props> = ({
  version,
  title,
  description,
  image,
}): JSX.Element => {
  // List of different component versions. You can easily switch between versions from the CMS.
  const components = {
    1: Hero1,
    2: Hero2,
    3: Hero3,
  };

  // Use the version prop to determine which component to render. Fallback to 1.
  const HeroComponent = components[version] || components[1];

  // Default return version 1 (with hero image on the right)
  return (
    <HeroComponent title={title} description={description} image={image} />
  );
};

export default HeroSection;
