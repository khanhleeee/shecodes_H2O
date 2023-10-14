import "./Card.css";

import { useEffect, useState } from "react";

import Category from "../../assets/category.svg";
import LocationOnIcon from "../../assets/location_on_white_24dp 1.svg";
import Spinner from "../Spinner/Spinner";
import Time from "../../assets/time.svg";
import partnerUpApi from "../../config/partnerupdb";

// import Apis from "../../config/Apis";

// import { endpoints } from "../../config/Apis";

// import { useSearchParams } from "react-router-dom";

// import reboagency from "../../assets/reboagency.png";

function CardDetails() {
  const [companies, setCompanies] = useState([]);

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const result = await partnerUpApi.getCompanyList({
          params: {
            pageIndex: 1,
            pageSize: 10,
          },
        });
        setCompanies(result.data);
        
      } catch (ex) {
        console.error("Error fetching companies:", ex);
      }
    };

    getCompanies();
  }, []);

  if (companies === null) {
    return <Spinner></Spinner>;
  }

  const rows = chunkArray(companies, 2);


  return (
    <>
      {rows.map((row, index) => (
        <div key={index} className="flex flex-row">
          {row.map((c) => (
            <div className="form-card mr-8" key={c.id}>
              <div className="p-4 flex items-center ">
                <img src={c.logo} className="mr-4 w-8 h-8" />
                <div className="flex flex-col">
                  <h5 className="title">{c.name}</h5>
                  <p className="child-title">{c.categories}</p>
                </div>

                <div className="ml-36 w-[49px] h-[49px] p-[10.98px] bg-red-200 rounded-[109.80px] flex-col justify-center items-center gap-[10.98px] inline-flex">
                  <div className="text-center text-black text-sm font-normal font-['SF Pro Display'] uppercase leading-relaxed">
                    4.8
                  </div>
                </div>
              </div>
              <div className="flex-row flex gap-2 px-2">
                <div className="w-[136px] h-[37.54px] px-[9px] ml-3.5 py-[5.77px] bg-white bg-opacity-20 rounded-[23.09px] border border-lime-950 justify-start items-center gap-[2px] inline-flex">
                  <img src={LocationOnIcon} alt="Location Icon" />
                  <div className="grow shrink basis-0 text-center text-lime-950 text-sm font-sm font-['SF Pro Display'] leading-relaxed">
                    {c.province}
                  </div>
                </div>
                <div className="w-[100.68px] h-[37.54px] px-[11.54px] ml-5.5 py-[5.77px] bg-white bg-opacity-20 rounded-[23.09px] border border-lime-950 justify-start items-center gap-[3.85px] inline-flex">
                  <img src={Category} alt="Category Icon" />
                  <div className="grow shrink basis-0 text-center text-lime-950 text-sm font-sm font-['SF Pro Display'] leading-relaxed">
                    ${c.budget}+
                  </div>
                </div>
                <div className="w-[80.68px] h-[37.54px] px-[11.54px] ml-7.5 py-[5.77px] bg-white bg-opacity-20 rounded-[23.09px] border border-lime-950 justify-start items-center gap-[3.85px] inline-flex">
                  <img src={Time} alt="Category  Icon" />
                  <div className="grow shrink basis-0 text-center text-lime-950 text-sm font-sm font-['SF Pro Display'] leading-relaxed">
                    {c.establishedYear}
                  </div>
                </div>
              </div>
              <span className="ml-8 mt-3 block max-w-[320px] overflow-hidden">
                {c.description}
              </span>
              <div className="p-6 mt-2">
                <div className="w-auto h-7 px-2 py-1 bg-blue-50 rounded-xl border border-blue-400 justify-center items-center gap-[5px] inline-flex">
                  <div className="text-sky-900 text-sm font-normal font-['DM Sans'] leading-[14px]">
                    {c.services[0]}
                  </div>
                </div>
                <div className="w-auto ml-4 h-7 px-2 py-1 bg-blue-50 rounded-xl border border-blue-400 justify-center items-center gap-[5px] inline-flex">
                  <div className="text-sky-900 text-sm font-normal font-['DM Sans'] leading-[14px]">
                    {c.services[1]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default CardDetails;
