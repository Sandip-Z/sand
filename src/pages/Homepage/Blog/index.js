import SectionHeading from "../Components/SectionHeading";
import SectionSubHeading from "../Components/SectionSubHeading";
import SectionTitle from "../Components/SectionTitle";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="bg-gray-800 text-center p-10 lg:p-20 sm:p-10 md:p-20 "
    >
      <SectionTitle title="Latest News" />
      <SectionHeading heading="My latest articles" />
      <SectionSubHeading text="dkakdl;akdlasdka kda l;adk;lakd;las k d;lakd;las k;dlkasdka;sldk;laskd;la skd;lakd;lkadsa;slkd;laskd;laskd;l a" />
      <div className="grid my-10 gap-5 grid-rows-3 grid-cols-3">
        <div className="bg-yellow-500 col-start-1 col-end-2 row-start-1 row-end-4">
          1
        </div>
        <div className="bg-green-500 row-start-1 row-end-4 col-start-2 col-end-3">
          2
        </div>
        <div className="bg-red-500">3</div>
        <div className="bg-indigo-500">4</div>
        <div className="bg-blue-500">5</div>
      </div>
    </section>
  );
};

export default BlogSection;
