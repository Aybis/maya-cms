import React from 'react';

export default function Content() {
  return (
    <div className="mt-12">
      <ul className="flex gap-x-2 bg-zinc-200 w-fit px-1.5 py-1.5 rounded-lg">
        <li className="text-sm font-semibold text-zinc-700 bg-white px-2 py-1 rounded-sm">
          Trends Eternity
        </li>
        <li className="text-sm font-light text-zinc-500 px-2 py-1 rounded-sm">
          Featured Agents
        </li>
      </ul>

      <div className="mt-8 flex overflow-x-scroll gap-4">
        {/* Card */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex-1 p-4 bg-white rounded-lg shadow-none shadow-zinc-200 box-content w-2/3  hover:shadow-lg hover:shadow-zinc-300/30 transition-all duration-300"
          >
            <h1 className="text-lg font-semibold text-zinc-800">
              Heading Card
            </h1>
            <p className="text-sm text-zinc-700 mt-1">
              Esse sit irure commodo nulla nostrud adipisicing sit culpa
              voluptate voluptate quis incididunt.
            </p>

            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-1 items-center">
                <div className="rounded-full h-5 w-5 bg-zinc-400" />
                <p className="text-xs text-zinc-400">Name</p>
              </div>

              <div className="flex gap-0.5 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-thumbs-up mr-2 size-4"
                >
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <p>24</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                #hashtag1
              </span>
              <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                #hashtag2
              </span>
              <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                #hashtag3
              </span>
              <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                #hashtag4
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
