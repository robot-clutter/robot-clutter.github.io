import { ReactElement } from 'react';
import Link from 'next/link'


function Intro(): ReactElement {
  return (
    <div className="relative pt-10 px-4 sm:px-6 lg:pt-14 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-gray-50 dark:bg-gray-900 h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl">
            Learning-based robotic manipulation in cluttered environments
          </h2>
        </div>
        <div className="text-justify mt-10 text-xl">
        In this project we aim to research and develop learning-based for manipulating objects in cluttered environments. During this project a number of publication has been produced that are listed below. Furthermore, the software developed for these methods is open source and can be found in our&nbsp;
        <span className="mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline">
            <Link href="https://github.com/robot-clutter">github repos</Link>
        </span>
        &nbsp;along with its&nbsp;
        <span className="mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline">
            <Link href="https://robot-clutter.github.io/clt_core">documentation</Link>
        </span>
        .
        </div>
      </div>
    </div>
  );
}

export default Intro;
