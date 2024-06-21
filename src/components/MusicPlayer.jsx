import { RxTrackPrevious } from "react-icons/rx";
<RxTrackPrevious />;
import { CgPlayTrackNextO } from "react-icons/cg";
import logo from "../images/passport.png";
import { ImPrevious } from "react-icons/im";
import { FaPlay } from "react-icons/fa";
import { MdOutlineLoop } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

import { GiSpeaker } from "react-icons/gi";

import { GiSpeakerOff } from "react-icons/gi";
<GiSpeakerOff />
import { FaVolumeHigh } from "react-icons/fa6";

import { MdOutlineZoomIn } from "react-icons/md";

import { CgMiniPlayer } from "react-icons/cg";


import { FaVolumeMute } from "react-icons/fa";
const Music = () => {
  return (
    <div className="h-[10%] flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <img src={logo} alt="song" className=" h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <div className="text-[5px] sm:text-xs">
          <p>Song One</p>
          <p>God is love</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-[6px] sm:text-xs" >
        <div className="flex justify-center gap-3 pl-1">
          <span>
            <FaVolumeMute />
          </span>
          <span>
            <ImPrevious />
          </span>
          <span>
            <FaPlay />
          </span>
          <span>
            <CgPlayTrackNextO />
          </span>
          <span>
            <MdOutlineLoop />
          </span>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p>0:00</p>
          <div className="w-[55vw] max-w-[500px] bg-grey-300 rounded-full cursor-pointer">
            <hr className="bg-green-500 rounded-full h-0.5" />
          </div>
          <p>2:02</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center opacity-65 gap-1">
        <span><FaPlay/></span>
        <span><FaMicrophone /></span>
        <span><GiSpeaker /></span>
        <span><FaVolumeHigh /></span>
        <div className="w-20 bg-slate-50"></div>
        <span><CgMiniPlayer/></span>
        <span><MdOutlineZoomIn /></span>

        
      </div>
    </div>
  );
};

export default Music;
