import Link from 'next/link';
import LoginForm from '../components/forms/LoginForm';
import Layout from 'components/home/Layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="mt-8 mx-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mt-24">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in
            </h2>
            <p className="mt-2 text-center text-md text-gray-600">
              {"Don't have an account? "}
              <Link href="/signup">
                <a href="" className="text-royal-blue-500">
                  Sign up
                </a>
              </Link>
            </p>
          </div>
          <div className="mt-8 bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
