import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


//Why Bocacode, Projects, Ideal Workplace
export default function Grid() {

  return (
    <Container className="container-grid  ">
      <Row>
        <Col sm={12} md={4}>
          <Card style={{ width: "18rem" }} className="card-container1">
            <Card.Body>
              <Card.Title className="card-title1">Why Bocacode</Card.Title>
          
              <Card.Text>
                I love the fact that it's local and in person.  It's a much more personable experience.  I feel a more interactive environment is essential when learning in depth and complex concepts.  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
        <Card style={{ width: "18rem" }} className="card-container2">
            <Card.Body>
              <Card.Title className="card-title2">Projects</Card.Title>

              <Card.Text>
               I have a project in mind to streamline the mortgage pre-approval process.  This is an app to help customers get an estimate on how much they would be preappvoed for.  There is also a mortgage advisor app that I've been thinking about where both retail customers and realtors could utilize.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
        <Card style={{ width: "18rem" }} className="card-container3">
            <Card.Body>
              <Card.Title className="card-title3">Ideal Workplace</Card.Title>
              <Card.Text>
                My ideal workplace is somewhere with a vibrant culture where I feel comfortable and I'm able to work on a dynamic team where I can expand my knowledge and grow.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}