import { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from './Image';
import { PublicationInterface } from '../../types';
import PublicationAuthors from './PublicationAuthors';
import ButtonLinks from './ButtonLinks';
import BibtexBox from './BibtexBox';

function PublicationAlt({
  title,
  authors,
  journal,
  year,
  abstract,
  abstract2,
  image,
  videos,
  code,
  bib,
  github,
  example_videos,
  failure_videos,
}: PublicationInterface): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const has_media = videos.length > 0;
  return (
    <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {mounted && (
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* <div className="hidden lg:block bg-gray-50 dark:bg-gray-900 absolute top-0 bottom-0 left-3/4 w-screen" /> */}
          <div className="mx-auto text-base max-w-prose lg:max-w-none text-center">
            <h2 className="text-base text-cyan-600 dark:text-cyan-800 font-semibold tracking-wide uppercase">
              {journal && journal + ' (' + year + ')'}
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl relative z-20">
              {title}
            </h3>
          </div>
          <div className="">
            {/* <div className="relative lg:row-start-1 lg:col-start-4 lg:col-span-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200 dark:text-gray-600"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
      
            </div> */}

            <div className="mt-8 lg:mt-0 w-full min-h-screen text-center">
              <ButtonLinks code={code} />
              <PublicationAuthors authors={authors} />
              <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                {/* <h3 className="text-gray-500 dark:text-gray-300">Abstract</h3> */}
                <p className="text-justify">{abstract}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  {/* <h3 className="text-gray-500 dark:text-gray-300">Media</h3> */}
                  {videos.map((video: string, index: number) => {
                    return <ReactPlayer key={index} className="mt-5 rounded-lg" width="auto" url={video} controls />;
                  })}
                </div>
                <Image {...image} />
              </div>
              {/* {has_media && (
                <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <h3 className="text-gray-500 dark:text-gray-300">Media</h3>
                  {videos.map((video: string, index: number) => {
                    return <ReactPlayer key={index} className="mt-5 rounded-lg" width="auto" url={video} controls />;
                  })}
                </div>
              )}
                            <Image {...image} /> */}
              <div className="mt-10 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                {/* <h3 className="text-gray-500 dark:text-gray-300">Abstract</h3> */}
                <p className="text-justify">{abstract2}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <div className="text-left ">
                    <h6>
                      Code is available on{' '}
                      <a className="cursor-pointer" href={github || ''} target="_blank" rel="noreferrer">
                        Github
                      </a>
                      . Includes:
                    </h6>
                    <ul>
                      <li>Training/testing code (with PyTorch/Python)</li>
                      <li>Simulation environments (with PyBullet)</li>
                      <li>Pre-trained models and baselines</li>
                      <li>Evaluation code (with Python)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <BibtexBox bib={bib} />
                </div>
              </div>
              <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto">
                <h3 className="font-semibold text-gray-500 dark:text-gray-300 ">Feature Video</h3>
                {videos.map((video: string, index: number) => {
                  return <ReactPlayer key={index} className="mt-5 rounded-lg" width="auto" url={video} controls />;
                })}
              </div>
              {example_videos && !!example_videos.length && (
                <div>
                  <h3 className="text-center text-xl font-semibold text-gray-500 dark:text-gray-300 mt-20">
                    Example Videos
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* <div className=" prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"> */}
                    {/* <h3 className="text-gray-500 dark:text-gray-300">Media</h3> */}
                    {example_videos.map((video: string, index: number) => {
                      return <ReactPlayer key={index} className="mt-5 rounded-lg" width="auto" url={video} controls />;
                    })}
                    {/* </div> */}
                  </div>
                </div>
              )}
              {failure_videos && !!failure_videos.length && (
                <div>
                  <h3 className="ext-center text-xl font-semibold text-gray-500 dark:text-gray-300 mt-20">
                    Failure Videos
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* <h3 className="text-gray-500 dark:text-gray-300">Media</h3> */}
                    {failure_videos.map((video: string, index: number) => {
                      return <ReactPlayer key={index} className="mt-5 rounded-lg" width="auto" url={video} controls />;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PublicationAlt;
