const ContactInformation = ({ icon, information, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="mx-5 my-5 p-5 flex bg-gray-700 hover:shadow-2xl rounded">
        <div className="flex mx-2">{icon}</div>
        <div>
          <p className="text-white">{information}</p>
        </div>
      </div>
    </a>
  );
};

export default ContactInformation;
