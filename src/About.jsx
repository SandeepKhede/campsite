import React from 'react'
import {Container,Row,Col,Card,CardGroup} from 'react-bootstrap'
import bonfire from "../src/images/bonfire.png";
import camping from "../src/images/camping.png";
import sunset from "../src/images/sunset.png";
import view from "../src/images/friend.png";


function About() {
    return (
        <>
            <section >

<Container fluid>
    <Row>
        <Col className="col-10 mx-auto " >
            <Row>
               <Col className="mt-5">
                   <div className="head">
                       {/* <h1>Traveloholic <span className="logo">Traveloholic</span></h1> */}
                       <h1><span className="logo">Traveloholic </span>Plan it ! Camp it !</h1>
                       <p> Here at Traveloholic we will provide you a hastle free camping experience and make sure you enjoy your camping trip at its fullest.</p>
                   </div>
               <CardGroup>
  <Card>
    <Card.Img variant="top" src={bonfire} />
    <Card.Body>
      <Card.Title>Bonfire</Card.Title>
      <Card.Text>
      “Life is better by the camp fire”
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Traveloholic</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={camping} />
    <Card.Body>
      <Card.Title>Camping</Card.Title>
      <Card.Text>
      “Camping – because therapy is expensive.”
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Traveloholic</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={sunset} />
    <Card.Body>
      <Card.Title>Sunset</Card.Title>
      <Card.Text>
      There is nothing more musical than a sunset.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Traveloholic</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={view} />
    <Card.Body>
      <Card.Title>Sunset</Card.Title>
      <Card.Text>
      There is nothing more musical than a sunset.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Traveloholic</small>
    </Card.Footer>
  </Card>
</CardGroup>


               </Col>
            </Row>

        </Col>
    </Row>
 </Container>
    
</section>
        </>
    )
}

export default About

