import React from 'react'
import Staff from '../staff.png'
import HoverImage from "react-hover-image"
import Icon1 from "../icon1.png"
import Icon1B from "../icon1b.png"
import Icon2 from "../icon2.png"
import Icon2B from "../icon2b.png"
import Icon3 from "../icon3.png"
import Icon3B from "../icon3b.png"
import Icon4 from "../icon4.png"
import Icon4B from "../icon4b.png"

class HomePageOverview extends React.Component {
    render(){
        return(
        <div className="HomePageOverview">
            <div className="OVContainer">
                <div className="OVLeft">
                <h2>MOUNTAIN VIEW PUBLISHERS</h2>
                <p>OUR MISSION: To entertain, educate and enrich the lives of our subscribers with award-winning opportunities, contests, games and valuable content.</p>
                <div>
                    <HoverImage className="OVIcon"
                        src={Icon1}
                        hoverSrc={Icon1B}
                    />
                    <HoverImage className="OVIcon"
                        src={Icon2}
                        hoverSrc={Icon2B}
                    />
                    <HoverImage className="OVIcon"
                        src={Icon3}
                        hoverSrc={Icon3B}
                    />
                    <HoverImage className="OVIcon"
                        src={Icon4}
                        hoverSrc={Icon4B}
                    />
                </div>
                <div>     
            </div>
        </div>
            <hr />
                <div className="OVRight">
                    <img className="StaffPic" alt="" src={Staff}></img>
                        <p className="OVMotto">Mountain View Publishers (MVP) proudly publishes an exclusive line of entertainment magazines. Each month our subscribers enjoy a comprehensive and interactive guide with informative articles, puzzles, recipes, arts & crafts projects as well as complete information on how to participate in free-to-enter, third-party, cash and prize opportunities being offered to the public.</p>
                </div>
            </div>
        </div>
  )
        }
}

export default HomePageOverview