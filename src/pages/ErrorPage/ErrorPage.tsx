import { FC } from "react";
import { Link } from "wouter";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = ({}) => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <article className="text-white flex justify-center flex-col items-start">
        <h1 className="text-[120px] leading-none">404</h1>
        <p className="text-2xl">Sorry, the page can't be found</p>
        <p className="text-sm">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        <Link href="/">
          <button className="mt-4 bg-gray-800 border-2 border-dotted border-[#333] text-white focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm text-center inline-flex items-center py-1 px-4">
            <span className="-mb-[2px]">Back to homepage</span>
          </button>
        </Link>
      </article>
    </div>
  );
};

export default ErrorPage;
