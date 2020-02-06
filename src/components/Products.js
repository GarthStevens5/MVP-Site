import React from 'react'
import Image from 'react-bootstrap/Image'

const Products = () => { 
  return(
    <div>
        <h2>Our Magazines:</h2>
        <div className='Products'>
            <Image className='MagazineCover' src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" responsive />
          
            <Image className='MagazineCover' src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" responsive />
        </div>
    </div>
  )
}

export default Products