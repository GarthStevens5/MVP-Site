import React from 'react'
import $ from "jquery"
import Icon1 from "../UPCovers/1UP2019.png"
import Icon2 from "../UPCovers/2UP2019.png"
import Icon3 from "../UPCovers/3UP2020.png"
import Icon4 from "../UPCovers/4UP2020.png"
import UpFeatureContainer from "./UpFeatureContainer"


export class Up4Grabs extends React.Component {
  
  render(){
    $(function(){
      $("img.zoom").mouseover(
        function(){
          $(".preview").html( $("<img>").attr("src", $(this).attr("rel")) );
        }
      );
      (function() {
        var allimgs = document.images;
        for (var i = 0; i < allimgs.length; i++) {
            allimgs[i].onerror = function() {
                this.style.visibility = "hidden"; // Other elements aren't affected. 
            }
        }
    })();
    });
  return(  
    <div className="Up4Grabs">
      <div className="Up4GrabsLeft">
        <div className="placeholder">
          <div className="preview">
            <img className="img-responsive" src={Icon1} alt=""></img>
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
      <UpFeatureContainer />
    </div>)
}
}

export default Up4Grabs