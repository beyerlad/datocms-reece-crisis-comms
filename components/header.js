import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import siteBrandBar from "media/site-brand-bar@2x.png";
import Container from "./container";
import Logo from "./logo";

export default function Header() {
  return (
    <>

      {/* header - brand bar */}
      <div className="h-4 sm:h-5 md:h-6m lg:h-7 overflow-hidden">
        <Image
          src={siteBrandBar}
          width={3580}
          height={60}
          className="min-w-full max-w-none w-auto h-full"
          alt="Pattern of vertical stripes in navy blue and light grey"
        />
      </div>

      <div className="sticky top-0 z-40 w-full border-b border-[#F4F5F6] backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white supports-backdrop-blur:bg-white/90 dark:bg-transparent">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="py-4 sm:py-5 flow-root">
              <div className="relative flex items-center">
                {/* header - logo */}
                <Link className="flex-none overflow-hidden py-2 pr-4 sm:pr-6" href="/">
                  <Logo className="w-[66px] sm:w-[110px] h-auto"/>
                </Link>

                {/* header - site name */}
                {/* border divider added here as text has variable height when stacked */}
                <div className="py-1 md:py-2.5 px-4 sm:px-6 border-l border-[#D9D9D9]">
                  <span className="text-base sm:text-lg md:text-xl font-medium leading-4 sm:leading-6 md:leading-7 tracking-wide">
                    Incident & Alert Communications
                  </span>
                </div>

                {/* header - navigation */}
                <div className="relative hidden lg:flex items-center ml-auto">
                  <nav className="text-sm leading-snug dark:text-slate-200">
                    <ul className="flex space-x-4">
                      <li>
                        <a
                          className="border rounded-lg px-4 py-2 hover:text-sky-500 dark:hover:text-sky-400 flex items-center space-x-2"
                          href="/docs/installation"
                        >
                          <ArrowLeftIcon className="w-4 h-4" />
                          <span>Back</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/?ref=top"
                          className="border rounded-lg px-4 py-2 hover:text-sky-500 dark:hover:text-sky-400 flex items-center space-x-2"
                        >
                          <span>Sort</span>
                          <ArrowsUpDownIcon className="w-4 h-4" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                    <label
                      className="sr-only"
                      for="headlessui-listbox-button-:r5:"
                      id="headlessui-label-:r4:"
                      data-headlessui-state=""
                    >
                      Theme
                    </label>
                    <button
                      type="button"
                      id="headlessui-listbox-button-:r5:"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:r4: headlessui-listbox-button-:r5:"
                    >
                      <span className="dark:hidden">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="w-6 h-6"
                        >
                          <path
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            className="stroke-slate-400 dark:stroke-slate-500"
                          ></path>
                          <path
                            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                            className="stroke-slate-400 dark:stroke-slate-500"
                          ></path>
                        </svg>
                      </span>
                      <span className="hidden dark:inline">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                            className="fill-transparent"
                          ></path>
                          <path
                            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                            className="fill-slate-400 dark:fill-slate-500"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                            className="fill-slate-400 dark:fill-slate-500"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m19 19-3.5-3.5"></path>
                    <circle cx="11" cy="11" r="6"></circle>
                  </svg>
                </button>
                <div className="ml-2 -my-1 lg:hidden">
                  <button
                    type="button"
                    className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <span className="sr-only">Navigation</span>
                    <svg width="24" height="24" fill="none" aria-hidden="true">
                      <path
                        d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    hidden=""
                    style={{
                      position: "fixed",
                      top: "1px",
                      left: "1px",
                      width: "1px",
                      height: "0px",
                      padding: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      borderWidth: "0px",
                      display: "none",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </>
  );
}
