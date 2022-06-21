import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import front from "../src/images/camp.jpg";

function Home() {
    return (
        <>
            <section id="header"className="d-flex align-items-center">

            <Container fluid>
                <Row>
                    <Col className="col-10 mx-auto" >
                    <Row>
                       <Col className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h1 className="title">Explore Yourself with <strong className="brand-name">Traveloholic</strong></h1>
                           <h1 className="my-3 para">Spending time in open air, gazing out at stars, feeling so close to nature is the joy of camping.</h1>
                           <div className="mt-3">
                           <a className="btn" href="/contact" >
                                Get Started
                            </a>
                           </div>
                       </Col>
                       <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={front} className="img-fluid animated" alt="home img" />
                       </div>
                       
                       {
                       /* <Col className="col-lg-6 order-1 order-2 header-img">
                           <img src={front} className="img-fluid animated" alt="home img" />
                       </Col> */}
                    </Row>
                    </Col>
                </Row>
             </Container>
                
            </section>
        </>
    )
}

export default Home
