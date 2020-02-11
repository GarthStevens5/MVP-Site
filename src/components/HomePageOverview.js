import React from 'react'
import Card from 'react-bootstrap/Card'
import Staff from '../staff.png'
import HoverImage from "react-hover-image"
import Icon1 from "src/icon1.png"
import Icon1B from "src/icon1b.png"

const HomePageOverview = () => { 
  return(
    <div className="HomePageOverview">
        <div className="OVContainer">
            <div className="OVLeft">
            <h2>MOUNTAIN VIEW PUBLISHERS</h2>
            <p>OUR MISSION: To entertain, educate and enrich the lives of our subscribers with award-winning opportunities, contests, games and valuable content.</p>
            <div>
                <div className="OVBoxMaster" >
                <div className="OVBoxPair1">
                <div className="OVBox1">
                    <HoverImage
                        src={Icon1}
                        hoverSrc={Icon1B}
                    />
                <div className="OVBox2">
                    <Card bg="primary" text="white"    className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <h4>Data Verification</h4>
                            <p>
                            We carefully review and verify all rules and regulations, so you don’t have to!
                            </p>
                        </blockquote>
                    </Card>
                </div>
                </div>
                <div className="OVBoxPair2">
                <div className="OVBox3">
                <Card bg="primary" text="white"    className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <h4>Information Provider</h4>
                        <p>
                        We publish our findings into a convenient, entertaining, and easy-to-follow prize guide that subscribers can enjoy for mere pennies a day
                        </p>
                    </blockquote>
                </Card>
                </div>
                <div className="OVBox4">
                <Card bg="primary" text="white"    className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <h4>Customer Care</h4>
                        <p>
                        With a courtesy staff at your beck and call and MVP’s 100% Risk-Free Guarantee, our products and services are second to none.
                        </p>
                    </blockquote>
                </Card>
                </div>
                </div>
                </div>
            </div>
            </div>
            <hr />
            <div className="OVRight">
                <img className="StaffPic" alt="" src={Staff}></img>
                    <p className="OVMotto">Mountain View Publishers (MVP) proudly publishes an exclusive line of entertainment magazines. Each month our subscribers enjoy a comprehensive and interactive guide with informative articles, puzzles, recipes, arts & crafts projects as well as complete information on how to participate in free-to-enter, third-party, cash and prize opportunities being offered to the public.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomePageOverview