// import Card from "../components/Card/Card"

//import CardBusinessSuggest from "../../components/Card/CardBusinessSuggest";

import CardDetails from "../../components/Card/CardDetails";
import CheckBox from "../../components/Checkbox/Checkbox";
import { NavLink } from "react-router-dom";
import RadioButton from "../../components/RadioButton/RadioButton"
import background from "../../assets/background.png";

function ListBusinessPage() {
  return (
    <>
      <div className="list-business-view">
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
        <div className="w-auto bg-slate-200 flex">
          <div className="">
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
            <div className="w-auto h-full px-10 flex-col bg-slate-200">
              <span className="ml-[40px] mt-[30px] inline-block text-black text-2xl font-bold">
                4 doanh nghiệp
              </span>
              <div className="relative mt-[36x] px-4 ml-5 bg-slate-200">
                <div className="relative inline-block bg-slate-200">
                  <NavLink to="/agencies/details">
                    <CardDetails></CardDetails>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[300px] h-[380] pt-3 pb-3 mt-[66px] mb-[5px] rounded-md">
            <b className="ml-4 mt-[12px] text-black text-xl font-bold flex-1">
              Lọc theo
            </b>
            <b className="ml-4 pt-5 text-black text-xl font-bold flex">
              Vị trí
            </b>
            <div className="ml-3">
              <RadioButton label={"Hồ Chí Minh"}></RadioButton>
              <RadioButton label={"Đà Nẵng"}></RadioButton>
              <RadioButton label={"Hà Nội"}></RadioButton>
              <RadioButton label={"Đà Lạt"}></RadioButton>
              <RadioButton label={"Nha Trang"}></RadioButton>
              <RadioButton label={"Quy Nhơn"}></RadioButton>
              <RadioButton label={"Cần Thơ"}></RadioButton>
            </div>
            <b className="ml-4 pt-2 text-black text-xl font-bold flex">
              Lĩnh vực
            </b>
            <div className="ml-4">
              <CheckBox label={"Marketing"}></CheckBox>
              <CheckBox label={"Công nghệ"}></CheckBox>
              <CheckBox label={"Giáo dục"}></CheckBox>
            </div>
            <b className="ml-4 pt-5 text-black text-xl font-bold flex">
              Ngân sách
            </b>
            <div className="ml-4 mt-3 w-[123px] h-[42px] flex-row justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch p-3.5 bg-white rounded-lg border border-neutral-400 justify-start items-center gap-[5px] inline-flex">
                <div className="grow shrink basis-0 text-neutral-400 text-sm font-medium font-['Inter'] leading-[14px]">
                  Từ
                </div>
              </div>
              <div> - </div>
              <div className="self-stretch p-3.5 bg-white rounded-lg border border-neutral-400 justify-start items-center gap-[5px] inline-flex">
                <div className="grow shrink basis-0 text-neutral-400 text-sm font-medium font-['Inter'] leading-[14px]">
                  Đến
                </div>
              </div>
            </div>
            <b className="ml-4 pt-5 text-black text-xl font-bold flex">
              Ngày đăng
            </b>
            <div className="ml-3">
              <RadioButton label={"Mới đây"}></RadioButton>
              <RadioButton label={"Cách đây 1 tháng"}></RadioButton>
              <RadioButton label={"Cách đây 5 tháng"}></RadioButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListBusinessPage;
