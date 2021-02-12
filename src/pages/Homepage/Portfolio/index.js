import SectionTitle from "../Components/SectionTitle";
import SectionHeading from "../Components/SectionHeading";
import SectionSubHeading from "../Components/SectionSubHeading";

const PortfolioSection = () => {
  return (
    <section className="bg-gray-900 text-center p-10 lg:p-20 sm:p-10 md:p-20 ">
      <SectionTitle title="Portfolio" />
      <SectionHeading heading="My Master Piece Collection" />
      <SectionSubHeading text="lorem ipad sdjkakdjlaksjd lkasjfklsjf klsdjflksdfj sdlkjf lksdjflksd jflksjdfjs dkljflksd j fljsdlj gkl" />
      <div className="grid grid-rows-2 grid-cols-3 my-10 gap-5">
        <div className="bg-yellow-500">1</div>
        <div className="bg-green-500 col-start-2 col-end-3 row-start-1 row-end-3">
          2
        </div>
        <div className="bg-red-500 row-start-1 row-end-3 col-start-3 col-end-4">
          3
        </div>
        <div className="bg-blue-500">4</div>
      </div>
    </section>
  );
};

export default PortfolioSection;
