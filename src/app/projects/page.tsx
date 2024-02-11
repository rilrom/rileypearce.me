import Heading from "components/Heading";
import Card from "components/Card";

import placeholder from "../../../public/images/placeholder-image.png";

export default function Projects() {
  return (
    <>
      <Heading>Projects</Heading>

      <div className="flex flex-col mt-8 space-y-4 w-full">
        <Card
          image={placeholder}
          alt="Placeholder image"
          link="https://github.com/rilrom/primitives"
          heading="Primitives"
          description="Accessible and customizable components that you can copy and paste
          into your apps."
        />
      </div>
    </>
  );
}
