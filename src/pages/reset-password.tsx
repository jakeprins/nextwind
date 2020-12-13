import Link from 'next/link';
import ResetPasswordForm from 'components/forms/ResetPasswordForm';

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-200">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-24">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset password
          </h2>
          <p className="mt-2 text-center text-md text-gray-600">
            {"Didn't forgot? "}
            <Link href="/login">
              <a href="" className="text-blue-500">
                Login
              </a>
            </Link>
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
