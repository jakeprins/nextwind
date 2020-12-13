import { Team } from 'interfaces/home';

interface Props {
  team: Team[];
}

const Team2: React.FC<Props> = ({ team }) => {
  return (
    <div className="flex flex-wrap -m-2">
      {team?.map((team, i) => {
        return (
          <div className="w-full p-2 lg:w-1/4 md:w-1/2" key={i}>
            <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img
                alt="team"
                className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full"
                src={team.image}
                loading="lazy"
              />
              <div className="flex-grow">
                <h2 className="font-medium text-gray-900 title-font">
                  {team.name}
                </h2>
                <p className="text-gray-500">{team.position}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team2;
