import React ,{ useRef,useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import sunrise from "../src/images/sunrise.png";
import emailjs from 'emailjs-com';

function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) =>{
       
        e.preventDefault();
        emailjs.sendForm("service_9nygjkw", "template_jbxmvrq", formRef.current, "user_7PaWFLH2TUc4Zai2lN3Rj")
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <>
       
            <section id="header"className="d-flex align-items-center">
        
<Container fluid>
     
    <Row>
        <Col className="col-10 mx-auto" >
    
        <Row>
        
           <Col className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
               <h1 className="title">Call us at <strong className="brand-name">999999999</strong></h1>
               <h1 className="my-3 para">Have any other Quations?</h1>
               <form ref={formRef} onSubmit={handleSubmit}  >
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <input type="number" placeholder="Mobile Number" name="user_phone"/>
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
           </Col>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={sunrise} className="img-fluid animated" alt="home img" />
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

export default Contact
