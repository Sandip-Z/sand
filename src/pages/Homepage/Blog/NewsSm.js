import PlaceholderImage from "../../../assets/placeholder-image.webp";

const NewsSm = ({ date, image, heading, subHeading, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="grid grid-rows-1 grid-cols-3">
        <div>
          <p className="absolute bg-black text-yellow-500">
            {date || new Date(Date.now()).toDateString()}
          </p>
          <img
            src={image || PlaceholderImage}
            alt="News"
            style={{ width: "140px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col col-start-2 col-end-4">
          <h3 className="text-white uppercase p-1 truncate" title={heading}>
            {heading || "Heading"}
          </h3>
          <p className="text-sm text-white p-1 px-2">
            {subHeading || "Something that describes the news"}
          </p>
        </div>
      </div>
    </a>
  );
};

export default NewsSm;
