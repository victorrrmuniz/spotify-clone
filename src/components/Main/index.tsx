import { Content } from "../Content"
import { Player } from "../Player"
import { SideMenu } from "../SideMenu"
import { TopMenu } from "../TopMenu"
import { MainContainer } from "./styles"

export const Main = () => {

  return (
    <MainContainer>
      <div>
        <TopMenu />
      </div>
      <div>
        <SideMenu />
        <Content />
      </div>
      <div>
        <Player />
      </div>
    </MainContainer>
  )
}