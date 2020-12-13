import Link from 'next/link';
import SignUpForm from '../components/forms/SignUpForm';
import Layout from 'components/home/Layout';
import { GetServerSideProps } from 'next';
import { db } from 'config/firebase';
import { getTeamName } from 'services/team';

const SignUpPage: React.FC<{
  teamId?: string;
  teamName?: string;
  email?: string;
}> = ({ teamId, teamName, email }) => {
  return (
    <Layout>
      <div className="min-h-screen flex bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mt-24">
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Sign up
            </h2>
            {teamName ? (
              <h3 className="mt-3 text-center text-3xl leading-9 font-extrabold text-gray-900">{`and join ${teamName}`}</h3>
            ) : (
              <p className="mt-2 text-center text-md text-gray-600">
                Already have an account?{' '}
                <Link href="/login">
                  <a href="" className="text-royal-blue-500">
                    Log in
                  </a>
                </Link>
              </p>
            )}
          </div>
          <div className="mt-8 bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            <SignUpForm teamId={teamId} email={email} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { teamId, email } = context.query;
  let teamName;

  if (!teamId) {
    return { props: {} };
  }

  if (teamId) {
    teamName = await getTeamName(teamId as string);
  }

  return {
    props: { teamId, teamName, email: email || '' },
  };
};

export default SignUpPage;
