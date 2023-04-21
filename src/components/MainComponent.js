import { useState, useEffect } from "react"
import About from "./About";
import Quote from "./Quote";
import Grid from "./Grid";
import AboutCarousel from "./AboutCarousel";
import Footer from "./Footer";

//About, Quote, Grid, Carousel, Footer

export default function MainComponent() {
  const[about, setAbout] = useState();
  const[quote, setQuote] = useState();
  const[grid, setGrid] = useState();
  const[carousel, setCarousel] = useState();
  const[footer, setFooter] = useState();
 


useEffect(() => {
  setAbout(<About/>)
  setQuote(<Quote/>)
  setGrid(<Grid/>)
  setCarousel(<AboutCarousel/>)
  setFooter(<Footer/>)


}, [])
 
  

  return(
    <section>
      {about} {quote}  {grid} {carousel} {footer}
    </section>
      
  
  )
}