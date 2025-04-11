import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';

export default function Headline() {
  return (
    <div className="grid grid-cols-6 gap-4 mt-12">
      <div className="col-span-3 flex gap-4 items-center shadow-lg shadow-zinc-200 p-4 rounded-lg bg-white ">
        <div>
          <Image
            alt="Image"
            src={'https://studio.lyzr.ai/agent-creation.svg'}
            width={200}
            height={200}
          />
        </div>
        <div className="w-2/3 flex flex-col gap-y-3 justify-center items-start h-full ">
          <h1 className="text-lg text-zinc-800 font-semibold">
            Create your Own Eternity Chain
          </h1>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Aliqua velit sint cupidatat aute consectetur quis fugiat quis
            adipisicing do adipisicing. Adipisicing ut voluptate officia culpa
            esse aliquip proident. Consequat quis nostrud id aliqua amet elit
            deserunt nostrud consequat.
          </p>

          <button className="bg-zinc-800 text-white text-sm font-semibold leading-relaxed px-4 py-2 rounded-lg">
            Build Eternity
          </button>
        </div>
      </div>
      <div className="col-span-2 border border-zinc-200 p-4 rounded-lg bg-white ">
        Sample Video
      </div>
      <div className="col-span-1 border flex flex-col justify-between border-zinc-200 p-4 rounded-lg bg-white ">
        <h1 className="text-lg font-semibold text-zinc-800">Resources</h1>

        <ul>
          <li className="flex justify-between items-center">
            <p>API Documentation</p>
            <ArrowTopRightIcon className="w-4 h-4" />
          </li>
          <li className="flex justify-between items-center">
            <p>Join our Community</p>
            <ArrowTopRightIcon className="w-4 h-4" />
          </li>
          <li className="flex justify-between items-center">
            <p>Join us on Github</p>
            <ArrowTopRightIcon className="w-4 h-4" />
          </li>
        </ul>
      </div>
    </div>
  );
}
