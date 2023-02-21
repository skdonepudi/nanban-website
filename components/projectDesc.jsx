import Image from "next/image";
import Link from "next/link";

const ImageComponent = ({ imageSrc }) => {
  return (
    <div className="lg:w-[55%]">
      <div className="relative  group  ">
        <img
          src={imageSrc}
          width="200"
          height="200"
          className="mx-auto mt-8 w-[80%] rotate-[8deg] rounded-[10rem] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out "
        />
        <img
          src="/images/3D_elements.png"
          alt=""
          className="animate-fly absolute top-0  "
        />
      </div>
    </div>
  );
};


const Description = ({ title, tagline, description }) => {
  return (
    <div className="py-20 lg:w-[45%] lg:pl-16">
      <h2 className="text-jacarta-700 font-display mb-6 text-2xl dark:text-white">
        {title}
      </h2>
      <p className="dark:text-jacarta-300 mb-8 text-lg leading-normal normal-case">
        {tagline}
      </p>
      <p className="dark:text-jacarta-300 mb-10 normal-case">{description}</p>
      <div className="flex justify-center sm:space-x-10">
        <Link href={title==="Planting Trees"?"/contribute":{ pathname: "/nft", query: { cls: title.toLowerCase().split(" ").join("-")} }}>
          <a
            href="#"
            className="inline-block normal-case rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          >
            Contribute and get a NFT
          </a>
        </Link>
      </div>
    </div>
  );
};

export default function ProjectDesc({
  left,
  title,
  tagline,
  description,
  imageSrc,
}) {
  return (
    <div id={title==="Planting Trees"?"section1":""}>
      <section className="dark:bg-jacarta-800 relative pt-12  lg:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image

            src="/images/gradient_light.jpg"
            alt="gradient"
            layout="fill"
          />
        </picture>
        <div className="container">
          {left ? (
            <div className="lg:flex lg:justify-between">
              <ImageComponent imageSrc={imageSrc} />
              <Description
                title={title}
                tagline={tagline}
                description={description}
              />
            </div>
          ) : (
            <div className="lg:flex flex flex-col-reverse lg:flex-row lg:justify-between ">
              <Description
                title={title}
                tagline={tagline}
                description={description}
              />
              <ImageComponent imageSrc={imageSrc} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
