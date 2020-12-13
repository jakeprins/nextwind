import Spinner from 'components/icons/Spinner';

interface ButtonProps {
  title?: string;
  isLoading?: boolean;
}

const Button = ({
  isLoading = false,
  title,
  children,
  ...buttonProps
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-royal-blue-600 hover:bg-royal-blue-500 focus:outline-none focus:border-royal-blue-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 transition duration-150 ease-in-out"
      {...buttonProps}
    >
      {isLoading ? (
        <Spinner width="20" fill="white" className="animate-spin" />
      ) : (
        title
      )}
      {children}
    </button>
  );
};

export default Button;
