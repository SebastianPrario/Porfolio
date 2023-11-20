import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Contact from './Contact'
import Navs  from "./Navs";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";
import Hello from "./Hello"
import SocialLinks from './SocialLinks';




function Home() {

   return (
      <Container id='home'>
       
         <Hello/>
         <Navs/>
         <Card pt={3} >
             <About />
         </Card>
        
         <Stack/> 
         <Projects/>
         <div className='pb-4 m-5 '>
            <Contact /> 
         </div>
         <SocialLinks/>
      
        
      
      </Container>
   )
}

export default Home
