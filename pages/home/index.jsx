import ProjectDesc from "@/components/projectDesc";
import React from "react";
import ImageTitle from "@/components/imageTitle";
import Hero_2 from "@/components/hero";

const Home_1 = () => {
  const banner = "/images/banner.jpg";
  return (
    <div className="">
      <Hero_2 />
      <ProjectDesc
        left={true}
        title={"Planting Trees"}
        tagline={"Growing a Greener Future"}
        description={
          "The Planting Trees project is a crucial initiative taken up by Selah Earth Foundation aimed at increasing the forest cover and improving the environment. The project involves planting a variety of trees in areas where deforestation has taken place or where new forests are needed. "
        }
        imageSrc="images/planting.jpg"
      />
      <ProjectDesc
        left={false}
        title={"Lake Rejuvenation"}
        tagline={"Bringing Back the Sparkle to Our Lakes"}
        description={
          "The project aims to address issues such as water pollution, eutrophication, loss of aquatic habitats and biodiversity, and other environmental problems faced by the lakes. The organization works closely with local communities, government agencies, and other stakeholders to identify the specific needs of each lake, and to develop and implement strategies to improve its health."
        }
        imageSrc="images/lake.jpeg"
      />
      <ProjectDesc
        left={true}
        title={"Organic and Sustainable Farming"}
        tagline={"Sowing the Seeds of Change"}
        description={
          "The project aims to address the challenges faced by farmers and the environment due to the widespread use of chemical fertilizers, pesticides, and other harmful inputs. The organization works closely with farmers and local communities to provide training, resources, and support for the adoption of sustainable farming practices. "
        }
        imageSrc="images/farming.jpeg"
      />
    </div>
  );
};

export default Home_1;
