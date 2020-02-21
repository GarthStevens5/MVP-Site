import React from 'react'
import AboutPageText from './AboutPageText'
import HomePageOverview from './HomePageOverview'
import StatBar from './StatBar'
import QuoteCardCarousel from './QuoteCardCarousel'

const AboutPage = () => { 
  return(
    <div className="AboutBody">
        <HomePageOverview />
        <StatBar />
        <QuoteCardCarousel />
    </div>
  )
}

export default AboutPage