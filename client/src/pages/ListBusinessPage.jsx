// import Card from "../components/Card/Card"

import CardDetails from "../components/Card/CardDetails";
import background from "../assets/background.png";

function ListBusinessPage() {
  return (
    <>
      <div className="list-business-view ">
        <div className="relative">
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
        <div className="body-list-business">
          <div className="w-4/6 h-full px-10 flex-col">
            <span className="absolute mt-16 ml-20 flex items-center justify-center text-black text-2xl font-bold">
              3177 doanh nghiệp
            </span>
            <div className="absolute mt-36 px-4 ml-16">
              <div className="relative inline-block">
                <CardDetails></CardDetails>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListBusinessPage;
