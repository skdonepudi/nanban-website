import Link from "next/link";
import Image from "next/image";
import { HiCurrencyDollar } from "react-icons/hi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { IoImage } from "react-icons/io5";
const Hero_2 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative py-20 md:pt-40 h-screen">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <figure className="h-screen w-full">
            <Image src="/images/gradient.jpg" alt="gradient" layout="fill" />
          </figure>
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <figure className="h-[630px] w-full">
            <Image
              src="/images/gradient_dark.jpg"
              alt="gradient dark"
              layout="fill"
            />
          </figure>
        </picture>

        <div className="container flex flex-col items-center justify-between mt-12">
          <div className="py-24 text-center">
            <h1 className="text-jacarta-700 font-display mb-16 text-5xl dark:text-white lg:text-2xl xl:text-6xl">
              Pause , Reflect , Revive Mother Earth
            </h1>
            <p className="dark:text-jacarta-200 text-[#767577] mb-10 text-xl normal-case">
              Building a greener future, one project at a time
            </p>
            <div className="md:inline-flex space-x-4  space-y-12 md:space-y-0 mt-10 ">
              <div>
                <Link href="">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                    Donate <HiCurrencyDollar className="inline-block text-lg" />
                  </a>
                </Link>
              </div>
              <div className="">
                <Link href="">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                    Donate crypto{" "}
                    <BsCurrencyBitcoin className="inline-block text-lg" />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/contribute">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all normal-case">
                    Contribute and get a NFT{" "}
                    <IoImage className="inline-block text-lg" />
                  </a>
                </Link>
              </div>
              {/* <Link href="/collection/explore_collection">
								<a className="text-accent shadow-accent-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white">
									Explore
								</a>
							</Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_2;
