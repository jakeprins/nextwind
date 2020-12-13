import { Team } from 'interfaces/home';
import Team1 from './Team1';
import Team2 from './Team2';
import Team3 from './Team3';

interface Props {
  version: number;
  title: string;
  description: string;
  team: Team[];
}

const TeamSection: React.FC<Props> = ({
  title,
  description,
  team,
  version,
}) => {
  // List of different component versions. You can easily switch between versions from the CMS.
  const components = {
    1: Team1,
    2: Team2,
    3: Team3,
  };

  // Use the version prop to determine which component to render. Fallback to 1.
  const TeamList = components[version] || components[1];

  return (
    <section className="text-gray-700 body-font" id="team">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl title-font">
            {title}
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            {description}
          </p>
        </div>
        <TeamList team={team} />
      </div>
    </section>
  );
};

export default TeamSection;
