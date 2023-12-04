import { FaCirclePlay } from "react-icons/fa6";
import { IoMdSkipForward } from "react-icons/io";
import './player.css'

export const Player = () => {
  return (
    <div className="buttons">
        <div>
            <IoMdSkipForward className="back"/>
        </div>
        <div>
            <FaCirclePlay className="play-btn"/>
        </div>
        <div>
            <IoMdSkipForward className="forward"/>
        </div>

    </div>
  )
}
