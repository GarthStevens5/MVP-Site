import React from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import FeaturePic1 from "../UPFeatures/AskVetM2.png"
import FeaturePic2 from "../UPFeatures/FanM2.png"
import FeaturePic3 from "../UPFeatures/FeatureM2.png"
import FeaturePic4 from "../UPFeatures/FurryM2.png"
import FeaturePic5 from "../UPFeatures/GamesM2.png"
import FeaturePic6 from "../UPFeatures/HacksM2.png"

const UpFeatureContainer = () => { 
  return(
    <div className="JackpotBottom">
      <CardDeck className="JJCardBox">
    
    <Card>
    <Card.Img variant="top" src={FeaturePic1} />
      <Card.Body className="Unsplit" >
      <Card.Title className="CardTitle">ASK A VET</Card.Title>
      </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={FeaturePic2} />
    <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">MVP FAN FEEDBACK</Card.Title>
    </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={FeaturePic3} />
    <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">FEATURED ARTICLES</Card.Title>
    </Card.Body>
    </Card>
    
</CardDeck>
<hr />
        <CardDeck className="JJCardBox">
        <Card>
      <Card.Img variant="top" src={FeaturePic4} />
      <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">COLORING PAGES</Card.Title>
      </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={FeaturePic5} />
    <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">GAMES</Card.Title>
    </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={FeaturePic6} />
    <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">RECIPES</Card.Title>
    </Card.Body>
    </Card>
        </CardDeck>
    </div>
  )
}

export default UpFeatureContainer