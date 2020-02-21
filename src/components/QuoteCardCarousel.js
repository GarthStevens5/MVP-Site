import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Image from 'react-bootstrap/Image'

class QuoteCardCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "50vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "350px",
      width: "63vw",
      paddingTop: "80px",
      textAlign: "center",
      background: "white",
      color: "#000000",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "4px",
      borderColor: "#ob416a",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div className="QuoteCardCarousel" style={QuoteCardCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
          <div className="QuoteCard" style={QuoteCardCarousel.CARD_STYLE}>
          <Image className="TestimonialImg" src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" thumbnail />
          <h4>Marge Simpson</h4>
          <p>Wow! I cant belive I won! That never happens to me!</p>
          </div>
          <div className="QuoteCard" style={QuoteCardCarousel.CARD_STYLE}>
          <Image className="TestimonialImg" src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" thumbnail />
          <h4>Linda Belcher</h4>
          <p>Wow! I cant belive I won! That never happens to me!</p>
          </div>
          <div className="QuoteCard" style={QuoteCardCarousel.CARD_STYLE}>
          <Image className="TestimonialImg" src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" thumbnail />
          <h4>Ms. PacMan</h4>
          <p>Wow! I cant belive I won! That never happens to me!</p>
          </div>
          <div className="QuoteCard" style={QuoteCardCarousel.CARD_STYLE}>
          <Image className="TestimonialImg" src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" thumbnail />
          <h4>Meg Griffin</h4>
          <p>Wow! I cant belive I won! That never happens to me!</p>
          </div>
          <div className="QuoteCard" style={QuoteCardCarousel.CARD_STYLE}>
          <Image className="TestimonialImg" src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" thumbnail />
          <h4>Hello</h4>
          <p>Wow! I cant belive I won! That never happens to me!</p>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default QuoteCardCarousel