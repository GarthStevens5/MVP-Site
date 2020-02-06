import React from 'react'
import Image from 'react-bootstrap/Image'
import { MDBBox } from 'mdbreact';

const Up4Grabs = () => { 
  return(
    <div className="Up4Grabs">  
        <div className="Up4GrabsCover">  
            <Image className="MagazineCover"
            src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" responsive />           
        </div>
        <div className="Up4GrabsInfo">
            <h1>Up4Grabs</h1>
            <MDBBox classname="Up4GrabsText" display="flex" justifyContent="center" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </MDBBox>
        </div>
    </div>
  )
}

export default Up4Grabs