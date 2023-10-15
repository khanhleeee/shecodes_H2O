import { useEffect, useState } from "react";

import CardDetails from "../../components/Card/CardDetails";
import LocationOnIcon from "../../assets/location_on_white_24dp 1.svg";
import { NavLink } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import background from "../../assets/background.png";
import partnerUpApi from "../../config/partnerupdb";
import scale from "../../assets/scale.svg";
import world from "../../assets/world.svg";

function ListBusinessDetails() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getCompaniesDetails = async () => {
      try {
        const result = await partnerUpApi.getCompanyDetails(3);
        setDetails(result.data);
        console.log(result);
      } catch (ex) {
        console.error("Error fetching companies:", ex);
      }
    };

    getCompaniesDetails();
  }, []);

  if (details === null) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <div className="business-details">
        <div className="relative" style={{ zIndex: -1 }}>
          <div className="absolute top-0 left-20 right-19 bottom-0 flex items-center justify-center text-black text-4xl font-bold">
            <span>Kết nối&nbsp;</span>
            <span className="text-orange-600">doanh nghiệp&nbsp;</span>
            <span>ngay!</span>
          </div>
          <div className="absolute top-0 left-32 mt-11 flex items-center justify-center text-black text-sm font-bold"></div>

          <div className="absolute top-24 left-20 right-19 bottom-0 flex items-center justify-center text-black text-sm font-bold">
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </div>
          <img
            src={background}
            alt="Background Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-slate-200 w-full h-full">
          <div className="flex flex-row">
            <div className="bg-white w-[1000px] h-1250 ml-14 top-5">
              <div className="flex-row">
                <div className="w-auto">
                  <img
                    src={details.logo}
                    className="mr-4 w-16 h-18 ml-9 pt-12"
                  />
                  <div className="flex-col">
                    <b className="text-black text-xl mt-[5px] ml-10 flex">
                      {details.name}
                    </b>
                    <b className="text-black text-sm font-normal mt-[3px] ml-10 flex">
                      Innovative Marketing & Technology
                    </b>
                    <div className="w-[180px] h-[26px] justify-start items-center gap-2 inline-flex ml-10">
                      <img src={LocationOnIcon} alt="Location Icon" />
                      <b className="text-black text-sm font-normal mt-[5px] flex">
                        {details.province}
                      </b>
                    </div>
                    <div className="w-[253px] h-[26px] justify-start items-end gap-[8px] flex-row">
                      <div className="justify-start items-center gap-4 flex">
                        <img src={world} alt="World Icon" className="ml-10" />
                        <div className="text-neutral-800 text-sm font-normal font-['Inter'] leading-3">
                          Trực tuyến
                        </div>
                        <img src={scale} alt="Scale Icon" className="ml-10" />
                        <div className="text-neutral-800 text-sm font-normal font-['Inter'] leading-relaxed">
                          53
                        </div>
                        <div className="text-neutral-800 text-sm font-normal font-['Inter'] leading-relaxed flex">
                          2015
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <b className="text-black text-lg ml-9 mt-32 font-bold ">
                  Về chúng tôi
                </b>
                <h4 className="text-black text-base font-normal px-10 mt-3 mb-9">
                  {details.content}
                </h4>
                <b className="text-black text-lg ml-9 mt-32 font-bold ">
                  Giải thưởng của chúng tôi
                </b>
                <h4 className="text-black text-base font-normal px-10">
                  {details.awards &&
                    details.awards.map((award, index) => (
                      <span key={index}>
                        - {award}
                        {index !== details.awards.length - 1 && <br />}{" "}
                      </span>
                    ))}
                </h4>
                <div>
                  <b className="text-black text-lg ml-9 mt-32 font-bold flex mb-3">
                    Giải pháp Marketing - Công nghệ sáng tạo
                  </b>
                  <b className="text-black text-lg ml-9 mt-32 font-bold ">
                    TƯ VẤN CHIẾN LƯỢC
                  </b>
                </div>
                <div className="text-black text-base font-normal px-10 mt-1 mb-9">
                  <ul className="list-disc list-inside">
                    <li>Đánh giá sức khoẻ thương hiệu</li>
                    <li>Tư vấn chiến lược</li>
                    <li>Xây dựng & Quản trị kế hoạch</li>
                  </ul>
                </div>
                <b className="text-black text-lg ml-9 mt-32 font-bold ">
                  SÁNG TẠO VÀ SẢN XUẤT
                </b>
                <div className="text-black text-base font-normal px-10 mt-1 mb-9">
                  <ul className="list-disc list-inside">
                    <li>Phát triển ý tưởng sáng tạo</li>
                    <li>Triển khai chiến dịch Marketing</li>
                    <li>
                      Ứng dụng sáng tạo công nghệ tương tác vào các chiến dịch
                      Marketing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[410px] h-[560.75px] mt-7 ml-4 px-[74px] py-[38px] bg-white rounded-lg shadow flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch text-neutral-800 text-[32px] font-bold font-['Inter'] leading-[41.60px]">
                Liên hệ
              </div>
              <div className="self-stretch h-8 p-px bg-neutral-800 rounded border border-neutral-800 justify-start items-start inline-flex">
                <div className="w-[206px] self-stretch px-[59.89px] py-[7.30px] justify-center items-center flex">
                  <div className="pl-2 flex-col justify-start items-start inline-flex">
                    <div className="justify-center items-center inline-flex">
                      <div className="w-3 h-3 relative" />
                    </div>
                  </div>
                  <div className="pl-2 pr-[7.22px] flex-col justify-start items-start inline-flex">
                    <div className="justify-center items-start inline-flex">
                      <div className="text-center text-white text-[13.12px] font-normal font-['Inter'] leading-none">
                        Hẹn lịch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center inline-flex">
                <div className="text-neutral-800 text-base font-normal font-['Inter'] leading-relaxed">
                  Hoặc điền vào mẫu này và cơ quan sẽ liên lạc với bạn.
                </div>
              </div>
              <div className="self-stretch h-11 flex-col justify-start items-start gap-[5px] flex">
                <div className="self-stretch h-11 p-3.5 bg-white rounded-lg border border-neutral-400 justify-start items-center gap-[5px] inline-flex">
                  <div className="text-neutral-400 text-sm font-medium font-['Inter'] leading-[14px]">
                    Tên
                  </div>
                </div>
              </div>
              <div className="self-stretch h-11 flex-col justify-start items-start gap-[5px] flex">
                <div className="self-stretch h-11 p-3.5 bg-white rounded-lg border border-neutral-400 justify-start items-center gap-[5px] inline-flex">
                  <div className="text-neutral-400 text-sm font-medium font-['Inter'] leading-[14px]">
                    Email
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[113px] flex-col justify-start items-start gap-[5px] flex">
                <div className="self-stretch grow shrink basis-0 p-3.5 bg-white rounded-lg border border-neutral-400 justify-start items-start gap-[5px] inline-flex">
                  <div className="text-neutral-400 text-sm font-medium font-['Inter'] leading-[14px]">
                    Lời nhắn
                  </div>
                </div>
              </div>
              <div className="self-stretch h-8 p-px bg-neutral-800 rounded border border-neutral-800 flex-col justify-start items-center flex">
                <div className="pl-[73.22px] pr-[72.78px] py-[7.30px] justify-center items-center inline-flex">
                  <div className="justify-center items-start flex">
                    <div className="text-center text-white text-[13.12px] font-normal font-['Inter'] leading-none">
                      Kết nối
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch text-center text-neutral-500 text-xs font-normal font-['Inter'] leading-[18px]">
                Bằng cách nhấp vào Gửi tin nhắn, tôi đồng ý với gửi thông tin
                liên hệ của tôi để lưu trữ thêm và xử lý.
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-[402.33px] h-[128.07px] p-[25px] bg-white rounded-lg shadow flex-col justify-start items-start ml-[48px] mr-6 mt-6 flex">
              <div className="justify-start items-center gap-[7.52px]">
                <div className="text-neutral-800 text-xl font-bold font-['Inter']">
                  Ngân sách
                </div>
                <div className="w-3 h-3 relative" />
              </div>
              <div className="text-neutral-800 text-[14.88px] font-normal font-['Inter'] leading-normal">
                $1,000 - 5,000
              </div>
            </div>
            <div className="w-[402.33px] h-[128.07px] p-[25px] bg-white rounded-lg shadow flex-col justify-start items-start gap-4 ml-10 mt-6">
              <div className="justify-start items-center gap-[7.94px] inline-flex">
                <div className="text-neutral-800 text-xl font-bold font-['Inter'] leading-relaxed">
                  Thông tin Liên hệ
                </div>
                <div className="w-3 h-3" />
              </div>
              <div className="self-stretch justify-start items-start gap-[19px] inline-flex">
                <div className="justify-start items-center flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-neutral-800 text-base font-normal font-['Inter'] underline leading-normal">
                      hello@adtcreative.vn
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center flex">
                  <div />
                </div>
                <div className="justify-start items-center flex">
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div className="relative inline-block ml-[70px] bg-slate-200 flex-row">
            <span className="pl-px[20px] inline-block mt-8 text-black text-2xl font-bold">
              Gợi ý doanh nghiệp tương tự
            </span>
            <div
              className="flex flex-nowrap overflow-x-auto"
              style={{ overflowX: "auto", whiteSpace: "nowrap" }}
            >
              <NavLink to="/agencies/details">
                <CardDetails></CardDetails>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListBusinessDetails;
