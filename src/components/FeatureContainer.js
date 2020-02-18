import React from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import FeaturePic1A from "../JJFeaturesPics/1Asweepslist.png"
import FeaturePic1B from "../JJFeaturesPics/1Bwinnerslist.png"
import FeaturePic2A from "../JJFeaturesPics/2Amy2cents.png"
import FeaturePic2B from "../JJFeaturesPics/2Bquotes.png"
import FeaturePic3 from "../JJFeaturesPics/3games.png"
import FeaturePic4 from "../JJFeaturesPics/4feature.png"
import FeaturePic5 from "../JJFeaturesPics/5DIY.png"
import FeaturePic6 from "../JJFeaturesPics/6recipes.png"

const FeatureContainer = () => { 
  return(
    <div className="JackpotBottom">
      <CardDeck className="JJCardBox">
    
    <Card>
        <div className="SplitBox">
      <Card.Img className="SplitImg" variant="top" src={FeaturePic1A} />
      <Card.Img className="SplitImg" variant="top" src={FeaturePic1B} />
      </div>
      <Card.Body className="Split1">
      <Card.Title className="CardTitle">SWEEPS CHECKLIST</Card.Title>
      <Card.Title className="CardTitle">LIST OF WINNERS</Card.Title>
      
      </Card.Body>
    </Card>
    <Card>
    <div className="SplitBox">
      <Card.Img className="SplitImg" variant="top" src={FeaturePic2A} />
      <Card.Img className="SplitImg" variant="top" src={FeaturePic2B} />
      </div>
    <Card.Body className="Split1">
      <Card.Title className="CardTitle">MY TWO CENTS</Card.Title>
      <Card.Title className="CardTitle">CHEF OF THE MONTH</Card.Title>
    </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={FeaturePic3} />
    <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">GAMES FOR PRIZES</Card.Title>
    </Card.Body>
    </Card>
    
</CardDeck>
<hr />
        <CardDeck className="JJCardBox">
        <Card>
      <Card.Img variant="top" src={FeaturePic4} />
      <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">SPECIAL INTEREST ARTICLES</Card.Title>
      </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src={FeaturePic5} />
    <Card.Body className="Unsplit">
      <Card.Title className="CardTitle">DIY ARTICLES</Card.Title>
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

export default FeatureContainer