import { SearchVectorIcon } from "../icons/SearchVectorIcon";

export default function AppActionBar() {
  return (
    <div className="app-action bg-[#EEEEEE] w-full min-h-[72px] flex">
      <div className="flex-1 bg-[#005DAB] flex justify-center items-center text-white">
        <div className="flex items-center border-2 border-white rounded-[2px] w-[80%]">
          <div className="w-[20%] py-3 px-2">
            <SearchVectorIcon />
          </div>
          <input
            className="w-[80%] border-none outline-none bg-[transparent] text-[12px] text-white"
            type="text"
            placeholder="SEARCH APPS, FILES ETC"
          />
        </div>
      </div>
      <div className="flex flex-5 justify-between">
        <div className="w-[15%] h-full flex items-center">
          <div className="flex justify-center items-center flex-1">
            <img
              src="/img/tile_vector.png"
              alt="tempt tool"
              className="w-[18px] h-[18px]"
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="p-1 text-center font-semibold bg-[#FFFFFF] rounded-[4px] border-1 border-[#AFAFAF] h-[44px] w-[44px] text-[12px] text-[#79747E] shadow-[0px_1px_6px_1px_#00224226]">
              NSI
              <br />
              MNT
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="p-1 text-center font-semibold bg-[#FFFFFF] rounded-[4px] border-1 border-[#AFAFAF] h-[44px] w-[44px] text-[12px] text-[#79747E] shadow-[0px_1px_6px_1px_#00224226]">
              PRT
              <br />
              SNG
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mr-3">
          <button className="flex justify-center items-center bg-white h-[44px] w-[44px] rounded-[50%] shadow-[0px_0px_6px_#0022420D]">
            <img src="/svg/bell_icon.svg" alt="bell icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
