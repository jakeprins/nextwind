import Link from 'next/link';
import SignUpForm from '../components/forms/SignUpForm';
import Layout from 'components/home/Layout';

const SignUpPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex min-h-screen bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mt-24 text-center">
            <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
              Sign up
            </h2>
            <p className="mt-2 text-center text-gray-600 text-md">
              Already have an account?{' '}
              <Link href="/login">
                <a href="" className="text-royal-blue-500">
                  Log in
                </a>
              </Link>
            </p>
          </div>
          <div className="px-4 py-8 mt-8 bg-white shadow-lg sm:rounded-lg sm:px-10">
            <SignUpForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
