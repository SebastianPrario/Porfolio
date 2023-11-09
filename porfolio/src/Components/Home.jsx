import { animateScoll as scroll} from "react-scroll";
import { greetingText, greetingTitle, aboutOne, projects } from '../constants';
import Projects from './Projects'
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import { Link } from "react-scroll";
import Carousel from 'react-bootstrap/Carousel';
import { FaReact, FaBootstrap ,FaJs, FaNodeJs, FaGithub} from "react-icons/fa";
import {BiLogoPostgresql, BiLogoTypescript} from "react-icons/bi";
import {BsLinkedin} from "react-icons/bs";
import {SiMercadopago} from "react-icons/si";
import {MdOutlineAlternateEmail} from "react-icons/md";
import { ListGroup , Container} from 'react-bootstrap';
 

function Home() {

   return (
      <Container>
         <Nav   className='d-md-flex fixed-top  justify-content-center bg-info' 
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item >
            <Nav.Link>
            <Link to="home">Inicio</Link>
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link>
                  <Link to="sobremi">Sobre Mí</Link>
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>
            <Link to="tech">Tecnologías</Link>
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>
            <Link to="misproyectos">Proyectos</Link>
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>
            <Link to="contact">Contactame</Link>
               </Nav.Link>
            </Nav.Item>
         </Nav>
      
         <div  id="home" className='row my-5 justify-content-center '>
            <div className='col-12  '>
               <Card className="border-0">
                  <Card.Body>
                     <Card.Title className='d-none d-md-block display-1'>{greetingTitle}</Card.Title>
                     <Card.Title className='d-block d-md-none display-6 my-auto'>{greetingTitle}</Card.Title>
                     <Card.Text className='mb-3 
                    display-3'>
                        {greetingText}
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>
         </div>
      <div className='row  my-2  justify-content-center' id="sobremi">
         <div className='col-12'>
      <Card>
         <Card.Body className='bg-dark col-12 justify-content-center mt-3 mb-1'>
            <Card.Title className='display-1 text-light col-4 mx-auto mb-4'>Sobre Mí</Card.Title>
            <Card.Text className='display-7 col-7 fs-5 text-light mx-auto mb-4'>
               {aboutOne}
            </Card.Text>
         </Card.Body>
      </Card>
      </div>
      </div>
    
      <div style={{ width: '100%', height: '500px' }}className='row my-5 justify-content-center' id="tech">
       
      <Card className='border-primary mt-5'>
         <Card.Body >
            <Card.Title className=' display-1 '>Stack Tecnológico </Card.Title>
            <ListGroup horizontal  className="list-group-flush justify-content-center">
               <ListGroup.Item><FaBootstrap size={50} color='blue'/></ListGroup.Item>
               <ListGroup.Item><FaJs  size={50} color='red'/></ListGroup.Item>
               <ListGroup.Item><FaNodeJs size={50} color='#171010'/></ListGroup.Item>
               <ListGroup.Item><FaReact size={50}color='#10ec10'/></ListGroup.Item>
               <ListGroup.Item><BiLogoPostgresql size={50}color='#d120b7'/></ListGroup.Item>
               <ListGroup.Item><FaGithub size={50}color='#e6ab17'/></ListGroup.Item>
               <ListGroup.Item><BiLogoTypescript size={50}color='#22bbd5'/></ListGroup.Item>
               <ListGroup.Item><SiMercadopago size={50}/></ListGroup.Item>
            </ListGroup>
        
         </Card.Body>
      </Card>
      </div>
      <Carousel id="misproyectos">
         {projects.map(p => (
         <Carousel.Item key={p.name}> 
         <Projects
         name={p.name}
         info={p.info}
         tecno={p.tecno}
         deploy={p.deploy}
         img={p.img}
         text="First slide" />
         </Carousel.Item>
         ))}
      </Carousel>
      <div className="my-5">
           <hr></hr>
      </div>
      <div className="row mt-3 mb-10" id='contact'>
         <h1>Contactarme</h1>
         <Card className='border-primary my-auto'>
         <Card.Body >
           <ListGroup   className="list-group-flush justify-content-center">
               <ListGroup.Item>
                <Card.Link href='https://www.linkedin.com/in/sebastianprario/'>
                <BsLinkedin size={50}color='#090909'/>
                </Card.Link>
               </ListGroup.Item>
               <ListGroup.Item>
                <Card.Link href='https://github.com/Sebastianprario/'>
                <FaGithub size={50}color='#110d01'/>
                </Card.Link>
               </ListGroup.Item>
               <ListGroup.Item> 
               <div className="row justify-content-center">   
               <div className="col-4 text-end">
               <MdOutlineAlternateEmail size={40} color='#171010'/>
               </div>
               <div className="fs-4 text-start col-8">
                  Sebastianprario@hotmail.com
               </div></div>
               </ListGroup.Item>             
               </ListGroup>
              </Card.Body>
      </Card>
       
      </div>
      <div className="my-5">
           <hr></hr>
      </div>
    
   </Container>
   )
}

export default Home
