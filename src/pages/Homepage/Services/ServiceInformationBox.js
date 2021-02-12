const ServiceInformationBox = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-gray-900 p-10 text-center flex flex-col">
      {icon}
      <h3 className="text-gray-200">{title}</h3>
      <h6 className="text-gray-400">{subtitle}</h6>
    </div>
  );
};

export default ServiceInformationBox;
