import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
import { TopMenuContainer } from "./styles"
import { FaEllipsisH } from "react-icons/fa";

export const TopMenu = () => {


  return (
    <TopMenuContainer>
      <div>
        <span>
          <button>
            <FaEllipsisH size={24} /> 
          </button>
        </span>
        <span>
          <button>
            <VscChevronLeft size={32} />
          </button>
        </span>
        <span>
          <button>
            <VscChevronRight size={32} />
          </button>
        </span>
      </div>
      <div>
        <span>Home</span>
        <span>
          <input type="text" placeholder="What do you want to play" />
        </span>
      </div>
      <div>
        <span>Bell</span>
        <span>Community</span>
        <span>Profile</span>
      </div>
    </TopMenuContainer>
  )
}