import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function About() {
  

  return (
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>

            <Card className="container-card" style={{ width: "18rem" }}>
              <Card.Img src="../images/ProfilePic.jpeg" alt="Profile" />
              <Card.Body>
                <Card.Title className="card-title-about">David Radjai</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      
          <Col>
          <h1 className="mt-3">About Me</h1>
          <p>I was born in Long Island New York and grew up in South Florida. I have 2 kids - an 8 year old son and 5 year old daughter. My 3 passions outside of spending time and traveling with my family are Florida State Football, playing Golf and Coding - and not in that order. After completing this course I plan to use my new skills to contribute and work on different projects.  I love learning new technologies.  I hope to find a job where I can join a dynamic team, work on projects, learn and build on my skills.  
          </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}