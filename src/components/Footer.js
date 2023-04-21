import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const gitHubUrl = "https://github.com/dradjai"
  
  return(
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
      <p>&copy; {currentYear} David Radjai
          <br />
          <a href={gitHubUrl}
          target="_blank"
          rel="noreferrer">GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}