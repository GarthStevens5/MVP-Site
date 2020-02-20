import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Promo1 from '../promo1.png'
import Promo2 from '../promo2.png'
import Promo3 from '../promo3.png'

const HomePageCards = () => { 
  return(
    <div className="CardBoxWhole">
        <CardDeck className="HomePageCardBox">
    
    <Card>
      <Card.Img variant="top" src={Promo2} />
      <Card.Body>
      <Card.Title>PUZZLE PRIZE CONTESTS</Card.Title>
      <Card.Text>
      Each month we feature over a dozen puzzle contests in our publications, including crossword and word search puzzles, Sudoku, coloring pages, Scrabble, Word Jumble, mazes and other brain teasers. These incentivized games are not only challenging and entertaining, they allow our readers to win a variety of fabulous prizes, such as LED Smart TVs, tablets and other devices, top-of-the-line electronics, and even cash!
      </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Click here to see Official Rules.</small>
      </Card.Footer>
    </Card>
    <Card>
    <Card.Img variant="top" src={Promo3} />
    <Card.Body>
      <Card.Title>24 KARAT GOLD KEEPSAKE</Card.Title>
      <Card.Text>
      One of our most popular promotional prizes, our 24 Karat Gold Keepsake is an attractive good luck charm made from 99.99% pure gold. Since MVP introduced this promotion, we have awarded hundreds of thousands of keepsakes to lucky participants. This “Gift of Gold” is absolutely free and requires no purchase to receive.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Click here to see Official Rules.</small>
    </Card.Footer>
    </Card>
    <Card>
    <Card.Img variant="top" src={Promo1} />
    <Card.Body>
      <Card.Title>MY TWO CENTS</Card.Title>
      <Card.Text>
      Our readers are our greatest asset, and our interactive prize guides allow our readers to create their very own contests. Based on feedback we received from our readers, we have created several new promotions, including our tasty Chef of the Month contest and our creative Short Story contest.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Click here for more information.</small>
    </Card.Footer>
    </Card>
</CardDeck>
    </div>
  )
}

export default HomePageCards