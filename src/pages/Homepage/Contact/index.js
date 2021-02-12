import {
  FaGoogle,
  FaPhoneAlt,
  FaSkype,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SectionHeading from "../Components/SectionHeading";
import SectionSubHeading from "../Components/SectionSubHeading";
import SectionTitle from "../Components/SectionTitle";
import ContactInformation from "./ContactInformation";

const ContactSection = () => {
  const iconStyles = {
    color: "white",
    style: {
      display: "flex",
      margin: "auto",
    },
  };
  return (
    <section id="contact" className="bg-gray-900 text-center p-20">
      <SectionTitle title="contact me" />
      <SectionHeading heading="Ways to contact me" />
      <SectionSubHeading text="daskd ;alskd ;lakdlkasdk;ak d;ushfkjsdhfyw giuhfvj df dkl;j o" />
      <div className="flex flex-wrap my-5 mx-40 justify-around">
        <ContactInformation
          icon={<FaGoogle {...iconStyles} />}
          information="sandipsatyal25"
          link="mailto:sandipsatyal25@gmail.com"
        />
        <ContactInformation
          icon={<FaPhoneAlt {...iconStyles} />}
          information="9811226217"
          link="tel:9811226217"
        />
        <ContactInformation
          icon={<FaLinkedin {...iconStyles} />}
          information="sandip-satyal"
          link="https://www.linkedin.com/in/sandip-satyal-478854193/"
        />
        <ContactInformation
          icon={<FaTwitter {...iconStyles} />}
          information="@__Sandip__"
          link="https://twitter.com/__Sandip__"
        />
        <ContactInformation
          icon={<FaGithub {...iconStyles} />}
          information="@Sandip-Z"
          link="https://github.com/Sandip-Z"
        />
      </div>
    </section>
  );
};

export default ContactSection;
