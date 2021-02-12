import SectionTitle from "../Components/SectionTitle";
import SectionHeading from "../Components/SectionHeading";
import SectionSubHeading from "../Components/SectionSubHeading";

const Introduction = () => {
  return (
    <div>
      <SectionTitle title="Introduction" />
      <SectionHeading heading="Software Engineer, React Enthusiast" />
      <SectionSubHeading text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      <button className="my-5">Learn More</button>
    </div>
  );
};

export default Introduction;
