import Link from "next/link";
import { footerMenuList, socialIcons } from "../data/footer_data";

const footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-jacarta-900 page-footer p-6 bg-white">
        <div className="container">
          <div className="grid grid-cols-3 gap-x-7  md:gap-y-14 pt-12 pb-12 md:grid-cols-12">
            <div className="col-span-3 md:col-span-4">
              {/* <!-- Logo --> */}
              <Link href="#">
                <a className="mb-3 inline-block">
                  <div className="text-2xl font-bold">
                    Selah Earth Foundation
                  </div>
                </a>
              </Link>
              <p className="dark:text-jacarta-300 mb-8">
                Reviving the earth, restoring the hope
              </p>
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2 mb-5 md:col-start-7">
              <ul className="dark:text-jacarta-300 flex flex-col space-y-5 md:space-y-6">
                <li>
                  <Link href="#">
                    <a className="hover:text-accent dark:hover:text-white">
                      Our Projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="hover:text-accent dark:hover:text-white">
                      Donate
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-full sm:col-span-3 mb-5 md:col-span-2">
              <ul className="dark:text-jacarta-300 flex flex-col space-y-5 md:space-y-6">
                <li>
                  <Link href="#">
                    <a className="hover:text-accent dark:hover:text-white">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="hover:text-accent dark:hover:text-white">
                      Donate cryptocurrency
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-full sm:col-span-3 md:col-span-2">
              <ul className="dark:text-jacarta-300 flex flex-col space-y-5 md:space-y-7">
                <li>
                  <Link href="#">
                    <a className="hover:text-accent dark:hover:text-white">
                      Dontate and get a NFT
                    </a>
                  </Link>
                </li>
                <li>
                  <div className="flex space-x-5">
                    {socialIcons.map((item) => {
                      const { id, href, text } = item;
                      return (
                        <Link href={href} key={id}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer"
                          >
                            <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                              <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                            </svg>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 pb-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© 2023 Selah Earth Foundation</span>
            </span>

            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <Link href="#">
                  <a className="hover:text-accent dark:hover:text-white">
                    Terms and conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-accent dark:hover:text-white">
                    Privacy policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
