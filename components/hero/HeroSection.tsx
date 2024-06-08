import "../../app/homepage.css";

import Cta from "../cta-button";

export default function HeroSection() {
  return (
    <>
      <div className="h-screen flex items-center relative">
        <div>
          <div className="text-7xl font-bold leading-none">Wagner Almeida.</div>
          <div
            id="home-description"
            className="text-7xl font-bold leading-none mt-4"
          >
            full-stack developer.
          </div>
        </div>
        <div
          id="arrow-down"
          className="absolute w-8 bottom-12 left-0 right-0 m-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            id="down-arrow"
          >
            <path
              d="m48.707 13.853-1.414-1.413L25 34.732 2.707 12.44l-1.414 1.413L25 37.56z"
              fill="#458588"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
