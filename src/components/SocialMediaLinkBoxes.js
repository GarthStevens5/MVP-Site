import React from 'react'
import SMLink1 from '../SocialMediaLinks/bbb.png'
import SMLink2 from '../SocialMediaLinks/facebook.png'
import SMLink3 from '../SocialMediaLinks/pinterest.png'

const SocialMediaLinkBoxes = () => { 
  return(
    <div className="SocialMediaLinkBoxes">
        <div className="Stat1">
            <img alt="" src={SMLink1}></img>
        </div>
        <div className="Stat2">
        <img alt="" src={SMLink2}></img>
        </div>
        <div className="Stat3">
        <img alt="" src={SMLink3}></img>
        </div>
    </div>
  )
}

export default SocialMediaLinkBoxes