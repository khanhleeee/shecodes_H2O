import "./Card.css";

import { useEffect, useState } from "react";

import Category from "../../assets/category.svg";
import LocationOnIcon from "../../assets/location_on_white_24dp 1.svg";
import Spinner from "../Spinner/Spinner";
import Time from "../../assets/time.svg";

// import Apis from "../../config/Apis";




// import { endpoints } from "../../config/Apis";

// import { useSearchParams } from "react-router-dom";

// import reboagency from "../../assets/reboagency.png";

function CardDetails() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
   fetch(
     "https://partnerup-api.azurewebsites.net/api/companies?pageIndex=1&pageSize=10"
   )
     .then((res) => res.json())
     .then(({ c }) => setCompanies(c));
  });

  if (companies === null) {
    return <Spinner />;
  }

  return (
    <>
      
        {companies?.map((c) => {
          <div className="form-card" key={c.id}>
            <div className="p-4 flex items-center">
              <img src={c.logo} alt="REBO agency" className="mr-4" />
              <div className="flex flex-col">
                <h5 className="title">{c.name}</h5>
                <p className="child-title">Thiết kế</p>
              </div>

              <div className="ml-36 w-[47px] h-[49px] p-[10.98px] bg-red-200 rounded-[109.80px] flex-col justify-center items-center gap-[10.98px] inline-flex">
                <div className="text-center text-black text-base font-medium font-['SF Pro Display'] uppercase leading-relaxed">
                  4.8
                </div>
              </div>
            </div>
            <div className="flex-row flex gap-2 px-2">
              <div className="w-[129.68px] h-[37.54px] px-[11.54px] ml-3.5 py-[5.77px] bg-white bg-opacity-20 rounded-[23.09px] border border-lime-950 justify-start items-center gap-[3.85px] inline-flex">
                <img src={LocationOnIcon} alt="Location Icon" />
                <div className="grow shrink basis-0 text-center text-lime-950 text-base font-normal font-['SF Pro Display'] leading-relaxed">
                  {c.province}
                </div>
              </div>
              <div className="w-[129.68px] h-[37.54px] px-[11.54px] ml-5.5 py-[5.77px] bg-white bg-opacity-20 rounded-[23.09px] border border-lime-950 justify-start items-center gap-[3.85px] inline-flex">
                <img src={Category} alt="Category Icon" />
                <div className="grow shrink basis-0 text-center text-lime-950 text-base font-normal font-['SF Pro Display'] leading-relaxed">
                  {c.establishedYear}
                </div>
              </div>
              <div className="w-[129.68px] h-[37.54px] px-[11.54px] ml-7.5 py-[5.77px] bg-white bg-opacity-20 rounded-[23.09px] border border-lime-950 justify-start items-center gap-[3.85px] inline-flex">
                <img src={Time} alt="Category  Icon" />
                <div className="grow shrink basis-0 text-center text-lime-950 text-base font-normal font-['SF Pro Display'] leading-relaxed">
                  2022
                </div>
              </div>
            </div>
            <span className="w-96 ml-8 mt-3">{c.description}</span>
            <div className="p-6 mt-2">
              <div className="w-[80px] h-7 px-2 py-1 bg-blue-50 rounded-xl border border-blue-400 justify-center items-center gap-[5px] inline-flex">
                <div className="text-sky-900 text-sm font-medium font-['DM Sans'] leading-[14px]">
                  Giao diện
                </div>
              </div>
              <div className="w-auto ml-4 h-7 px-2 py-1 bg-blue-50 rounded-xl border border-blue-400 justify-center items-center gap-[5px] inline-flex">
                <div className="text-sky-900 text-sm font-medium font-['DM Sans'] leading-[14px]">
                  Website&App
                </div>
              </div>
            </div>
          </div>;
        })}
      
    </>
  );
}

export default CardDetails;
