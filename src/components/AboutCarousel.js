import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function AboutCarousel() {

  return(
    <Container>
      <Row>
        <Col sm={12} className="carousel-container">
        <Carousel>
         
          <Carousel.Item>
          <img src="/images/PuntaCana.jpg?random=1"
                  className="d-block w-100"
                  alt="slide1"/>
          <Carousel.Caption>
            <h2>Punta Cana</h2>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img src="/images/Tallahassee.jpg?random=2"
                  className="d-block w-100"
                  alt="slide2"/>
          <Carousel.Caption>
            <h2>Tallahassee</h2>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img src="/images/Tulum.jpg?random=3"
                  className="d-block w-100"
                  alt="slide3"/>
          <Carousel.Caption>
            <h2>Tulum</h2>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img src="/images/Kids.jpg?random=4"
                  className="d-block w-100"
                  alt="slide4"/>
          <Carousel.Caption>
            <h2>My Children</h2>
          </Carousel.Caption>
          </Carousel.Item>






        </Carousel>
        </Col>

      </Row>

    </Container>
  )
}