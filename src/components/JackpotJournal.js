import React from 'react'
import Icon1 from "../JJCovers/1JJ2019.png"
import Icon2 from "../JJCovers/2JJ2019.png"
import Icon3 from "../JJCovers/3JJ2019.png"
import Icon4 from "../JJCovers/4JJ2019.png"
import Icon5 from "../JJCovers/5JJ2019.png"
import Icon6 from "../JJCovers/6JJ2019.png"
import Icon7 from "../JJCovers/7JJ2019.png"
import Icon8 from "../JJCovers/8JJ2019.png"
import Icon9 from "../JJCovers/9JJ2019.png"
import Icon10 from "../JJCovers/10JJ2019.png"
import Icon11 from "../JJCovers/11JJ2019.png"
import Icon12 from "../JJCovers/12JJ2019.png"
import FeatureContainer from "./FeatureContainer"
import $ from "jquery"


export class JackpotJournal extends React.Component {
  
  render(){
    var view = function(e){
    $(".preview").html( $("<img>").attr("src", $(e.target).attr("rel")) );
};

$("img.zoom").mouseover(view);
view({target: $("img.zoom")[0]});
  return(  
    <div className="JackpotJournal">
      <div className="JackpotLeft">
        <div className="placeholder">
          <div className="preview">
            <script src="https://unpkg.com/react-image/umd/index.js"></script>
            <img className="img-responsive" src={Icon1} alt="" rel="/static/media/1JJ2019.95cb5aaf.png"></img>
          </div>
        </div>
        <div className="JackpotText">
          <h1>Jackpot Journal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className="JackpotRight">
        <div className="thumbs">    
          <img alt="" src={Icon1} rel={Icon1} className="zoom" />
          <img alt="" src={Icon2} rel={Icon2} className="zoom" />
          <img alt="" src={Icon3} rel={Icon3} className="zoom" />
          <img alt="" src={Icon4} rel={Icon4} className="zoom" />
          <img alt="" src={Icon5} rel={Icon5} className="zoom" />
          <img alt="" src={Icon6} rel={Icon6} className="zoom" />
          <img alt="" src={Icon7} rel={Icon7} className="zoom" />
          <img alt="" src={Icon8} rel={Icon8} className="zoom" />
          <img alt="" src={Icon9} rel={Icon9} className="zoom" />
          <img alt="" src={Icon10} rel={Icon10} className="zoom" />
          <img alt="" src={Icon11} rel={Icon11} className="zoom" />
          <img alt="" src={Icon12} rel={Icon12} className="zoom" />
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

export default JackpotJournal