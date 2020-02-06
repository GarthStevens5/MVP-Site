import React from 'react'
import Image from 'react-bootstrap/Image'
import { MDBBox } from 'mdbreact';

const JackpotJournal = () => { 
  return(
    <div className="JackpotJournal">  
        <div className="JackpotCover">  
            <Image className="MagazineCover"
            src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" responsive />           
        </div>
        <div className="JackpotInfo">
            <h1>Jackpot Journal</h1>
            <MDBBox classname="JackpotText" display="flex" justifyContent="center" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </MDBBox>
        </div>
    </div>
  )
}

export default JackpotJournal