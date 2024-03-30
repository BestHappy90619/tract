import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { DEBUG_MODE } from "@/utils/Constants";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser, isLoggedIn } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      DEBUG_MODE && console.log("current user: ", currentUser?.name);
    } else {
      DEBUG_MODE &&
        console.log("redirect to 'sign in' page... ", currentUser?.name);
      navigate("/signin");
    }
  }, [isLoggedIn]);

  return (
    <div className="w-full min-h-screen flex flex-col gap-8 justify-center items-center px-6">
      <span className="font-bold text-2xl">Select a Function</span>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <div className="rounded-2xl border-custom-green border-2 p-8 flex flex-col gap-4 drop-shadow-lg col-span-1 cursor-pointer">
          <div className="flex justify-center h-20">
            <img src="/risks 1.svg" alt="Risk Investigation" />
          </div>
          <span className="font-semibold text-xl text-center">
            Risk Investigation
          </span>
          <p className="text-center">
            Gather and analyze real-time public and private data, including
            criminal, legal, financial, and online social profiles across major
            platforms, for comprehensive background checks with detailed
            insights into personal and professional histories.
          </p>
        </div>
        <div className="rounded-2xl border-custom-purple border-2 p-8 flex flex-col gap-4 drop-shadow-lg  col-span-1 cursor-pointer">
          <div className="flex justify-center h-20">
            <img src="/people 1.svg" alt="Person Search" />
          </div>
          <span className="font-semibold text-xl text-center">
            Person Search
          </span>
          <p className="text-center">
            Unparalleled access to more than 3.1 billion profiles with People
            Search, crafted to transform your sales, investment intelligence,
            and recruitment processes. Simply specify your criteria, and let us
            effortlessly find the talent, leads, or precise profiles you need.
          </p>
        </div>
        <div className="rounded-2xl border-custom-blue border-2 p-8 flex flex-col gap-4 drop-shadow-lg  col-span-1 cursor-pointer">
          <div className="flex justify-center h-20">
            <img src="/contact-mail 1.svg" alt="Contact Enrichment" />
          </div>
          <span className="font-semibold text-xl text-center">
            Contact Enrichment
          </span>
          <p className="text-center">
            Elevate your data intelligence with Contact Enrichment, offering
            access to over 40.8 billion data points. Meticulously uncover a wide
            array of personal information, including emails, phone numbers,
            residential addresses, +100 social media platforms, and any relevant
            online articles they are mentioned in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
