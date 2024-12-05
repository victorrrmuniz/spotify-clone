import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
import { TopMenuContainer } from "./styles"
import { FaEllipsisH, FaUsers } from "react-icons/fa";
import { BsBell } from "react-icons/bs";

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
        <button>
          <BsBell size={24} />
        </button>
        <button>
          <FaUsers size={24} />
        </button>
        <button>
          <img src="src/assets/eu3.jpeg" alt="Profile" />
        </button>
      </div>
    </TopMenuContainer>
  )
}