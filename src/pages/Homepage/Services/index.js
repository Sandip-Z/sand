import SectionTitle from "../Components/SectionTitle";
import SectionHeading from "../Components/SectionHeading";
import SectionSubHeading from "../Components/SectionSubHeading";
import content from "./constants.js";

const ServicesSection = () => {
  const { title, heading, subheading } = content;
  return (
    <section id="services">
      <SectionTitle title={title} />
      <SectionHeading heading={heading} />
      <SectionSubHeading text={subheading} />
      <div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
      </div>
    </section>
  );
};

export default ServicesSection;
