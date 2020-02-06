import React from 'react'
import Image from 'react-bootstrap/Image'

const Testimonials = () => { 
  return(
    <div className="TestimonialCards">
      <h1>Testimonials</h1>
        <div class="card">
          <div class="card-header">
          <b>"I've never won anything before!"</b>
        </div>
        <Image className="TestimonialPicture" src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" thumbnail />
        <div class="card-body">
          <blockquote class="blockquote mb-0">
          <p>"When I won the TV, I was so ecstatic. Then I won the $250 and couldn't belive it. Words can't express how I feel."</p>
          <footer class="blockquote-footer">Cece B. - Frostburg, MD</footer>
        </blockquote>
        </div>
      </div>
      <div class="card">
          <div class="card-header">
          <b>"I've never won anything before!"</b>
        </div>
        <Image className="TestimonialPicture" src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" thumbnail />
        <div class="card-body">
          <blockquote class="blockquote mb-0">
          <p>"When I won the TV, I was so ecstatic. Then I won the $250 and couldn't belive it. Words can't express how I feel."</p>
          <footer class="blockquote-footer">Cece B. - Frostburg, MD</footer>
        </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Testimonials