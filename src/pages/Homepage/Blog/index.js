import NewsSm from "./NewsSm";
import NewsLg from "./NewsLg";

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
          <NewsLg />
        </div>
        <div className="bg-green-500 row-start-1 row-end-4 col-start-2 col-end-3">
          <NewsLg />
        </div>
        <div className="bg-gray-900">
          <NewsSm
            heading="this is a very large and needs to be chopped"
            subHeading="what to say about subHeading jhan what to say about jhan what to say about subHeading jhan"
            link="https://www.facebook.com"
            image="https://res.cloudinary.com/practicaldev/image/fetch/s--P-zvMTgt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/qyix6eyhrnc8x9c44yp2.jpg"
          />
        </div>
        <div className="bg-gray-900">
          <NewsSm image="https://opusdesign.us/wp-content/uploads/2019/11/Blog-Banner_imageplaceholder.jpg" />
        </div>
        <div className="bg-gray-900">
          <NewsSm />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
