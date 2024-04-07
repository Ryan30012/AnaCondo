"use client";
import "/styles/global.css";
import { useSession } from "next-auth/react";

const Homepage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Status is loading...</p>;
  //if (!session) return <p>Not signed in</p>;
  return (
    <>
      <section className="bg-center bg-no-repeat bg-gradient-to-r from-teal-500 to-lime-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Get access to all your condo management needs in one system
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            All in one tool for condo owners, renters, condominium employees and
            condomium management companies for managing their property.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/SignUp"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-900 hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="SignIn"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
