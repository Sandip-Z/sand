const ServiceInformationBoxCaption = ({ title, subtitle }) => {
  return (
    <div className="my-5">
      <p className="text-yellow-500 text-2xl">{title}</p>
      <small className="text-white text-base">{subtitle}</small>
    </div>
  );
};

export default ServiceInformationBoxCaption;
