import React from 'react'
import Image from 'react-bootstrap/Image'

const Products = () => { 
  return(
    <div>
        <h2>Our Magazines:</h2>
        <div className='Products'>
            <div>
                <a href="/jackpot-journal"><Image className='MagazineCover' src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" responsive /></a>
                <h1>Jackpot Journal</h1>
            </div>

          
            <div>
                <a href="/Up4Grab$"><Image className='MagazineCover' src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" responsive /></a>
                <h1>Up4Grab$</h1>
            </div>
        </div>
    </div>
  )
}

export default Products