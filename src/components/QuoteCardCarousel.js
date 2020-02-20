import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

const QuoteCardCarousel = () => { 
  return(
    <div>
        <Carousel
            slidesPerPage={2}
            arrows
            infinite
        >
            <Card>
                <Card.Img className="TestimonialPicture"src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" />
                    <b>"I can't belive I won!"</b>
            </Card>
            <Card>
                <Card.Img className="TestimonialPicture"src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" />
                    <b>"I can't belive I won!"</b>
            </Card>
            <Card>
                <Card.Img className="TestimonialPicture"src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" />
                    <b>"I can't belive I won!"</b>
            </Card>
        </Carousel>
    </div>
  )
}

export default QuoteCardCarousel