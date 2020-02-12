import React from 'react'
import Image from 'react-bootstrap/Image'
import HoverImage from "react-hover-image"
import Icon1 from "../icon1.png"
import Icon1B from "../icon1b.png"
import Icon2 from "../icon2.png"
import Icon2B from "../icon2b.png"
import Icon3 from "../icon3.png"
import Icon3B from "../icon3b.png"
import Icon4 from "../icon4.png"
import Icon4B from "../icon4b.png"

export class JackpotJournal extends React.Component {
  render(){ 
  return(
    <div className="JackpotJournal">
      <div className="JackpotLeft">
        <div className="JackpotCover">
            <Image className="MagazineCover"
            src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" responsive />           
        </div>
        <div className="JackpotText">
          <h1>Jackpot Journal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className="JackpotRight">
      <div>
        <HoverImage className="JJIcon"
            src={Icon1}
            hoverSrc={Icon1B}
        />
        <HoverImage className="JJIcon"
            src={Icon2}
            hoverSrc={Icon2B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon4}
            hoverSrc={Icon4B}
            div></HoverImage>
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
        <HoverImage className="JJIcon"
            src={Icon3}
            hoverSrc={Icon3B}
        />
      </div>
    </div>
    </div>
  )
}
}

export default JackpotJournal