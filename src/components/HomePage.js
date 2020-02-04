import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
const HomePage = () => { 
    return(
    <div className="HomePage">
      <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://4.bp.blogspot.com/-TqD0znXVsDQ/XER4S-_3QEI/AAAAAAAAL3E/NJB0do8WuTwihg4UYv93IWGS2Mq_P83CQCLcBGAs/s1600/1500x500-Twitter-Header02.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/93/ed/17/93ed175d22fa85e009e67c18963ccb94.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/75/bc/c0/75bcc0a6776deddf11a99eae543b7f29.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://cdn140.picsart.com/318217748091201.jpg?type=webp&to=crop&r=256" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Lorem ipsum</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1539946309076-4daf2ea73899?ixlib=rb-1.2.1&w=1000&q=80" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Lorem ipsum</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://static.scientificamerican.com/sciam/cache/file/EAF12335-B807-4021-9AC95BBA8BEE7C8D_source.jpg?w=590&h=800&74A94564-944F-4349-96BD18788411EAA6" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Lorem ipsum</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
    )
}

export default HomePage