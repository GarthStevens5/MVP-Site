import React from 'react'
import Staff from '../staff.png'

const HomePageOverview = () => { 
  return(
    <div className="HomePageOverview">
        <div className="OVContainer">
            <div className="OVLeft">
            <h2>MOUNTAIN VIEW PUBLISHERS</h2>
            <p>OUR MISSION: To entertain, educate and enrich the lives of our subscribers with award-winning opportunities, contests, games and valuable content.</p>
            <div>
                <div className="OVBox1">

                </div>
                <div className="OVBox2">

                </div>
                <div className="OVBox3">

                </div>
                <div className="OVBox4">
                    
                </div>
            </div>
            </div>
            <div className="OVRight">
                <img className="StaffPic" alt="" src={Staff}></img>
                    <h4>us</h4>
                    <p>Mountain View Publishers (MVP) proudly publishes an exclusive line of entertainment magazines. Each month our subscribers enjoy a comprehensive and interactive guide with informative articles, puzzles, recipes, arts & crafts projects as well as complete information on how to participate in free-to-enter, third-party, cash and prize opportunities being offered to the public.</p>
            </div>
        </div>
    </div>
  )
}

export default HomePageOverview