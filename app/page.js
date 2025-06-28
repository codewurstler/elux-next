import HomeHero from "@/app/components/HomeHero";
import LogoSVG from "@/app/components/LogoSVG";
import Link from "next/link";
import {SocialIcon} from "react-social-icons";

export default function Home() {
  return (
      <>
          <HomeHero>
              <div className="w-xl fancy-hover rounded-xl transition-all duration-500">
                  <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                      <LogoSVG/>
                  </Link>
              </div>
              <div className="absolute bottom-6 left-6">
                  <iframe style={{ borderRadius: '12px' }}
                          src="https://open.spotify.com/embed/artist/5me0Irg2ANcsgc93uaYrpb?utm_source=generator&theme=0"
                          width="100%" height="352" frameBorder="0" allowFullScreen=""
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"></iframe>
              </div>
              <ul className="menu absolute bottom-6 right-6">
                  <li>
                      <SocialIcon url="www.instagram.com" className="fancy-hover transition-all rounded-full" />
                  </li>
                  <li>
                      <a className="tooltip tooltip-left fancy-hover transition-all rounded-xl" data-tip="Details">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#fff">
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </a>
                  </li>
                  <li>
                      <a className="tooltip tooltip-left fancy-hover transition-all rounded-xl" data-tip="Stats">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#fff">
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                      </a>
                  </li>
              </ul>
          </HomeHero>
      </>
  );
}
