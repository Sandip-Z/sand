const ContactInformation = ({ icon, information }) => {
  return (
    <div className="mx-5 my-5 p-5 flex bg-gray-700 hover:shadow-2xl rounded">
      <div className="mx-2">{icon}</div>
      <div>
        <p>{information}</p>
      </div>
    </div>
  );
};

export default ContactInformation;
