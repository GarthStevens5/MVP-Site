import React from 'react'
import Icon1 from "../UPCovers/1UP2019.png"
import Icon2 from "../UPCovers/2UP2019.png"
import Icon3 from "../UPCovers/3UP2020.png"
import Icon4 from "../UPCovers/4UP2020.png"
import FeatureContainer from "./FeatureContainer"


export class Up4Grabs extends React.Component {
  
  render(){
    
  return(  
    <div className="Up4Grabs">
      <div className="Up4GrabsLeft">
        <div className="placeholder">
          <div className="preview">
            <script src="https://unpkg.com/react-image/umd/index.js"></script>
            <img className="img-responsive" src={Icon1} alt="" rel={Icon1}></img>
          </div>
        </div>
        <div className="Up4GrabsText">
          <h1>Up4Grabs$</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className="Up4GrabsRight">
        <div className="thumbs">  
          <div className="UpThumbs">
          <img alt="" src={Icon1} rel={Icon1} className="zoom" />
          <img alt="" src={Icon2} rel={Icon2} className="zoom" />
          </div>  
          <div className="UpThumbs">
          <img alt="" src={Icon3} rel={Icon3} className="zoom" />
          <img alt="" src={Icon4} rel={Icon4} className="zoom" />
          </div>
          
        </div>
      </div>
      <hr />
      <div className="SpacerTitle">
        <h2>FEATURED IN EVERY ISSUE</h2>
      </div>
      <hr />
      <FeatureContainer />
    </div>)
}
}

export default Up4Grabs