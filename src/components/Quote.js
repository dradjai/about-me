import { useState } from "react";
import { Container, Row , Col} from "react-bootstrap";

const randomGenerator = arr => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

const quotes = [ 
  {saying: "It is not the critic who counts: not the man who points out how the strong man stumbles or where the doer of deeds could have done better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood, who strives valiantly, who errs and comes up short again and again, because there is no effort without error or shortcoming.", author: "Teddy Roosevelt"}, 
  { saying: "The only true wisdom is in knowing you know nothing.", 
  author: "Socrates"} 
]

export default function Quote() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    const setter = index < quotes.length-1 ? index + 1 : 0;
    return setIndex(setter);
  }



  return(
    <Container onClick={nextQuote} className="quote-container">
      <Row className="text-center">

        <Col>
        <p><q>{quotes[index].saying}</q></p> - {quotes[index].author}
        </Col>
      </Row>
    </Container>
  )
}