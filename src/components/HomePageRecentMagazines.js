import React from 'react'
import MagImage1 from '../magtile1.png'
import MagImage2 from '../magtile2.png'
import MagImage3 from '../magtile3.png'
import MagImage4 from '../magtile4.png'
import MagImage5 from '../magtile5.png'
import MagImage6 from '../magtile6.png'
import MagImage7 from '../magtile7.png'
import MagImage8 from '../magtile8.png'


const HomePageRecentMagazines = () => { 
  return(
    <div className="MagazineSection">
        <div className="MagazineHeader">
                <h1>Our Recent Magazines</h1>
        </div>
        <div className="MagazineRack">
            <div class="content">
                <a href="/jackpot-journal" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage1}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Jackpot Journal</h3>
                        <p class="content-text">October 2019 | $183,595.00</p>
                    </div>
                </a>
            </div>
            <div class="content">
                <a href="/jackpot-journal" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage2}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Jackpot Journal</h3>
                        <p class="content-text">November 2019 : $415,400.42</p>
                    </div>
                </a>
            </div>
            <div class="content">
                <a href="/up4grabs" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage3}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Up4Grab$</h3>
                        <p class="content-text">November 2019 : $198.525.60</p>
                    </div>
                </a>
            </div>
            <div class="content">
                <a href="/jackpot-journal" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage4}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Jackpot Journal</h3>
                        <p class="content-text">December 2019 : $202,187.00</p>
                    </div>
                </a>
            </div>
            <div class="content">
                <a href="/up4grabs" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage5}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Up4Grab$</h3>
                        <p class="content-text">December 2019 : $348,148.00</p>
                    </div>
                </a>
            </div>
            <div class="content">
                <a href="/jackpot-journal" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage6}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Jackpot Journal</h3>
                        <p class="content-text">January 2020 : $222,225.99</p>
                    </div>
                </a>
            </div>
            <div class="content">
                <a href="/up4grabs" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage7}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Up4Grab$</h3>
                        <p class="content-text">January 2020 : $202,054.57</p>
                    </div>
                </a>
            </div>
            <div class="content">
                <a href="/jackpot-journal" >
                    <div class="content-overlay"></div>
                    <img class="content-image" alt='' src={MagImage8}></img>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Jackpot Journal</h3>
                        <p class="content-text">February 2020 : $273,770.99</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HomePageRecentMagazines