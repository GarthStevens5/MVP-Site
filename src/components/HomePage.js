import React from 'react'
import HomePageCarousel from './HomePageCarousel'
import HomePageCards from './HomePageCards'
import HomePageRecentMagazines from './HomePageRecentMagazines'
import StatBar from './StatBar'
import HomePageOverView from './HomePageOverview'
import SocialMediaLinkBoxes from './SocialMediaLinkBoxes'




const HomePage = () => { 
    return(
    <div className="HomePage">
      <HomePageCarousel />
      <hr />
      <hr />
      <HomePageOverView />
      <hr />
      <hr className="HRBoarder" />
      <StatBar />
      <hr className="HRBoarder" />
      <hr />
      <HomePageRecentMagazines />
      <hr />
      <hr />      
      <HomePageCards />
      <hr />
      <hr />
      <SocialMediaLinkBoxes />
      <hr />
      <hr />
    </div>
    )
}

export default HomePage