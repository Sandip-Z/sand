import Introduction from "./Introduction";
import Me from "./Me";

const HeaderSection = () => {
  return (
    <header className="w-full h-screen bg-gray-900 text-white p-20">
      <div className="flex">
        <div className="w-2/6">
          <Me />
        </div>
        <div className="w-4/12">two</div>
        <div className="w-4/12 text-center">
          <Introduction />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
