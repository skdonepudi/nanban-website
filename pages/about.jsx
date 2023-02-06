import Meta from "@/components/Meta";

function About() {
  return (
    <>
      <Meta title="About || Selah Earth" />
      <section className="dark:bg-jacarta-800 relative pt-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <div className="mx-auto max-w-3xl py-16 ">
            <h1 className="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white text-center">
              About Us
            </h1>
            <p className="dark:text-jacarta-300 text-lg leading-normal">
              <span className="pr-8"></span>At Selah Earth, we believe that
              change starts from the ground up. That's why we're focused on
              building a better future for the earth, one project at a time. We
              promote sustainable practices, such as planting trees, practicing
              organic farming, and cleaning water bodies. These small steps can
              have a significant impact, helping to restore the earth's natural
              balance and protect our planet for future generations. But we
              don't stop there. We also believe in the power of community and
              the importance of working together to create lasting change.
              That's why we engage with local communities, encouraging everyone
              to participate and make a difference. Whether by planting a tree,
              cleaning up a local waterbody, or simply spreading the word about
              the importance of sustainability, everyone has a role to play in
              transforming the world from the roots up.
            </p>
            <br />
            <p className="dark:text-jacarta-300 text-lg leading-normal">
              <span className="pr-8"></span>If you believe that a better future
              is possible and that we can create change, join us in our mission
              to revive the earth and restore hope. Together, we can make a
              difference and create a more sustainable future for our planet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
