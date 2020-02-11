import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const Winners = () => { 
  return(
    <div className="WinnersPage">
      <div className="WinnerBannerBox">  
        <Image className="WinnerBanner" src="https://msgamechanger.com.au/assets/Lotteries/GCL2019B/Admin/MSSN0294L_1400x788px_2.jpg" />
      </div>
      <hr />
      <div>
      <CardColumns>
            <Card>
                <Card.Img variant="top" className="TestimonialPicture"src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" />
                <Card.Body>
                    <Card.Title>
                        Card title that wraps to a new line
                    </Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            Supporting text
                        </small>
                    </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Img variant="top" className="TestimonialPicture"src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" />
                <Card.Body>
                <Card.Title>
                    Card title
                </Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Lorem Ipsum</small>
                </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing ARE YOU BLUE? elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                        Supporting text
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>
                        Card title
                    </Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Lorem Ipsum</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className="TestimonialPicture"src="https://aebrentals.com/wp-content/uploads/2018/06/happy-lady.png" />
                    <b>"I can't belive I won!"</b>
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Supporting text
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Card title
                        </Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Lorem Ipsum</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </div>
    </div>
  )
}

export default Winners