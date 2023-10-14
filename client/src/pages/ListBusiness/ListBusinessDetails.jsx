import background from "../../assets/background.png";

function ListBusinessDetails() {
    

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
            <div className="bg-white w-[1100px] h-[1500px] ml-14 mb-14"></div>
        </div>
      </div>
    </>
  );
}

export default ListBusinessDetails;
