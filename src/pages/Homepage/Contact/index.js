import SectionHeading from "../Components/SectionHeading";
import SectionSubHeading from "../Components/SectionSubHeading";
import SectionTitle from "../Components/SectionTitle";
import ContactInformation from "./ContactInformation";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-center p-20">
      <SectionTitle title="contact me" />
      <SectionHeading heading="Ways to contact me" />
      <SectionSubHeading text="daskd ;alskd ;lakdlkasdk;ak d;ushfkjsdhfyw giuhfvj df dkl;j o" />
      <div className="flex flex-wrap my-5 mx-40 justify-around">
        <ContactInformation icon="1" information="@sandipzzz" />
        <ContactInformation icon="1" information="@sandipzzz" />
        <ContactInformation icon="1" information="@sandipzzz" />
        <ContactInformation icon="1" information="@sandipzzz" />
        <ContactInformation icon="1" information="@sandipzzz" />
      </div>
    </section>
  );
};

export default ContactSection;
