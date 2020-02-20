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
      <HomePageOverView />
      <StatBar />
      <HomePageRecentMagazines />     
      <HomePageCards />
      <SocialMediaLinkBoxes />
    </div>
    )
}

export default HomePage