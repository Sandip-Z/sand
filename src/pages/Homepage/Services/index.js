import { FaPencilRuler, FaHtml5, FaSearchDollar } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";

import SectionTitle from "../Components/SectionTitle";
import SectionHeading from "../Components/SectionHeading";
import SectionSubHeading from "../Components/SectionSubHeading";
import ServiceInformationBox from "./ServiceInformationBox";
import ServiceInformationBoxCaption from "./ServiceInformationBoxCaption";
import content from "./constants.js";

const ServicesSection = () => {
  const { title, heading, subheading } = content;
  const iconStyles = {
    color: "white",
    size: "3em",
    style: {
      margin: "auto",
      marginBottom: "15px",
    },
  };
  return (
    <section
      id="services"
      className="p-10 lg:p-20 sm:p-10 md:p-20 bg-gray-800 text-center"
    >
      <SectionTitle title={title} />
      <SectionHeading heading={heading} />
      <SectionSubHeading text={subheading} />
      <div className="grid sm:grid-cols-1 sm:grid-row-4 md:grid-cols-2 md:grid-row-2 lg:grid-cols-4 lg:grid-row-1  gap-4 my-10">
        <div>
          <ServiceInformationBox
            icon={<FaPencilRuler {...iconStyles} />}
            title="UI/UX Design"
            subtitle="120 projects"
          />
          <ServiceInformationBoxCaption
            title="9+"
            subtitle="Years of Experience"
          />
        </div>
        <div>
          <ServiceInformationBox
            icon={<FaHtml5 {...iconStyles} />}
            title="Web Development"
            subtitle="120 projects"
          />
          <ServiceInformationBoxCaption
            title="200+"
            subtitle="Satisfied Customers"
          />
        </div>
        <div>
          <ServiceInformationBox
            icon={<FaSearchDollar {...iconStyles} />}
            title="Web Search"
            subtitle="120 projects"
          />
          <ServiceInformationBoxCaption title="769 +" subtitle="Design Items" />
        </div>
        <div>
          <ServiceInformationBox
            icon={<ImStatsBars {...iconStyles} />}
            title="Marketing"
            subtitle="120 projects"
          />
          <ServiceInformationBoxCaption
            title="500 +"
            subtitle="Clients Served"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
