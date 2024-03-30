import TMainFunctionBox from "@/components/TMainFunctionBox";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col gap-8 justify-center items-center px-6 py-6">
      <span className="font-bold text-2xl">Select a Function</span>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <TMainFunctionBox
          className="rounded-2xl border-custom-green border-2 p-8 flex flex-col gap-4 shadow-lg shadow-black/20 col-span-1 cursor-pointer"
          onClick={() => navigate("/riskinvestigationinput")}
          iconUrl="/risks 1.svg"
          title="Risk Investigation"
          description="Gather and analyze real-time public and private data, including criminal, legal, financial, and online social profiles across major platforms, for comprehensive background checks with detailed insights into personal and professional histories."
        />
        <TMainFunctionBox
          className="rounded-2xl border-custom-purple border-2 p-8 flex flex-col gap-4 shadow-lg shadow-black/20 col-span-1 cursor-pointer"
          onClick={() => navigate("/personsearch")}
          iconUrl="/people 1.svg"
          title="Person Search"
          description="Unparalleled access to more than 3.1 billion profiles with People Search, crafted to transform your sales, investment intelligence, and recruitment processes. Simply specify your criteria, and let us effortlessly find the talent, leads, or precise profiles you need."
        />
        <TMainFunctionBox
          className="rounded-2xl border-custom-blue border-2 p-8 flex flex-col gap-4 shadow-lg shadow-black/20 col-span-1 cursor-pointer"
          onClick={() => navigate("/contactenrichment")}
          iconUrl="/contact-mail 1.svg"
          title="Contact Enrichment"
          description="Elevate your data intelligence with Contact Enrichment, offering access to over 40.8 billion data points. Meticulously uncover a wide array of personal information, including emails, phone numbers, residential addresses, +100 social media platforms, and any relevant online articles they are mentioned in."
        />
      </div>
    </div>
  );
};

export default Home;
