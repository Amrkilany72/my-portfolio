import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="text-indigo-400 hover:text-indigo-300 underline transition duration-200"
      >
        Go back to Home
      </Link>
    </div>
  );
}
