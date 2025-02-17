import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Side from "./Side";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCode } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Home(){
  
    return(
        <div >
        <Container fluid className="bg-dark" >
            <div className="row ">
                <div className="col-lg-8">
                <h1 className="text-light mt-5">PREM KUMAR J</h1>
                <h2 className="text-light">MERN Fullstack Developer</h2>
                <p  className="text-light" style={{fontFamily:'monospace'}}>
                I am a MERN Full Stack Developer with a certification from GUVI,
                 seeking a full-time opportunity in software development. 
                 I possess strong skills in Node.js, React.js, and MongoDB, and I'm 
                 eager to contribute to building robust, scalable applications that meet business needs.
                </p>
                 <Button variant="light"><a href="/Resume.pdf"  target="_blank" rel="noopener noreferrer">resume</a></Button>
            </div>

          <div className="col-lg-4">
                <Card className='m-5' style={{ width: '18rem',borderRadius:'50%',margin:'auto' }}>
                <Card.Img variant="top" src={require('./image/pngwing.com (37).png')}/>
                </Card>
          </div>
          </div>
        </Container>
         <Container fluid className="bg-light">
            <h1>ABOUT</h1>
            <div className="row ">
                <div className="col-lg-3">
                <h1 className=" mt-5">PREM KUMAR J</h1>
                <h2 >MERN Fullstack Developer</h2>
                <p style={{fontFamily:'monospace'}}>
                I am a MERN Full Stack Developer with a certification from GUVI,
                 seeking a full-time opportunity in software development.
                 I possess strong skills in Node.js, React.js, and MongoDB, and I'm 
                eager to contribute to building robust, scalable applications that meet business needs.
                </p>
               
            </div>
            <div className="col-lg-3">
              <Card className="card" style={{ width: '15rem',height:'11rem' }}>
      <Card.Body>
        <Card.Title><FaCode /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Language</Card.Subtitle>
        <Card.Text style={{fontFamily:'monospace'}}>
           Html, CSS, Javascript, React, Node, MongoDB, Expressjs
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-3 ">
              <Card className="card" style={{ width: '15rem',height:'11rem' }}>
      <Card.Body>
        <Card.Title><BsBookFill /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Education</Card.Subtitle>
        <Card.Text style={{fontFamily:'monospace'}}>
          B.E Mechanical Engineering
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            <div className=" col-lg-3">
              <Card className="card" style={{ width: '15rem',height:'11rem' }}>
      <Card.Body>
        <Card.Title><GoProjectSymlink /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Project</Card.Subtitle>
        <Card.Text style={{fontFamily:'monospace'}}>
        Built  3 project
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            </div>
            </Container>
       
        <Container fluid className="bg-light">
            <h1>Certification</h1>
            <div className="row ">
                <div className="col-lg-4 col-sm-8 col-">
                
                <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./image/guvi.png')}/>
                </Card>
            </div>

          <div className="col-lg-8">
                <h1 className="text-dark mt-5 pt-5 justify-content-end">WEB FULLSTACK DEVELOPMENT CERTIFICATION IN GUVI</h1> 
          </div>
          </div>
        </Container>
    
        <Container fluid className="bg-light ">
            <h1>Project`s Work Details</h1>
            <div className="row justify-content-center aligen-item-center ">
                <div className="col-lg-3 col-sm-8 m-5">
                <Card className='m-5 bg-dark card' style={{ width: '18rem',height:"25rem" }}>
                <Card.Body>
        <Card.Title className="mb-2 text-light">React</Card.Title>
        <Card.Subtitle className="mb-2 text-light">MovieSearchApp</Card.Subtitle>
        <Card.Text className="mb-2 text-light" style={{fontFamily:'monospace'}}>
          Developed an MovieSearchApp web application with responsive design using IMDB API 
          and deployed the application on netlify.
         Gained experience in react with state management, handling client side logic and firebase. 

        </Card.Text>
         <a href="https://darling-sunburst-f6462c.netlify.app/" target="_blank" rel="noopener noreferrer">
         <Button variant="primary">see more...</Button>
         </a>
      </Card.Body>
                </Card>
                </div>
                <div className="col-lg-3 m-5">
                <Card className='m-5 bg-dark card' style={{ width: '18rem',height:'25rem' }}>
                <Card.Body>
        <Card.Title className="mb-2 text-light">React</Card.Title>
        <Card.Subtitle className="mb-2 text-light">addToCart</Card.Subtitle>
        <Card.Text className="mb-2 text-light" style={{fontFamily:'monospace'}}>
           Developed an AddToCart web application with responsive design and state management 
          on hooks and deployed the application on netlify
         Gained experience in react with state management, handling client side logic and firebase.
        </Card.Text>
         <a href="https://symphonious-profiterole-4f7676.netlify.app/"  target="_blank" rel="noopener noreferrer">
         <Button variant="primary">see more...</Button></a>
      </Card.Body>
                </Card>
                </div>
                <div className="col-lg-3 col-sm-8 m-5">
                <Card className='m-5 bg-dark card' style={{ width: '18rem',height:"25rem" }}>
                <Card.Body>
        <Card.Title className="mb-2 text-light">MERN Fullstack</Card.Title>
        <Card.Subtitle className="mb-2 text-light">Online Food Delivery</Card.Subtitle>
        <Card.Text className="mb-2 text-light" style={{fontFamily:'monospace'}}>
           Developed an Online Food delivery web application with user authentication, 
           product management and payment integration using the stripe API, 
           managed state across the application with redux in client side. 
           
        </Card.Text>
         <a href="https://food-delivery-frontend-three-bice.vercel.app/"  target="_blank" rel="noopener noreferrer">
         <Button variant="primary">see more...</Button></a>
      </Card.Body>
                </Card>
                </div>
                </div>
                </Container>
                <Container fluid className="bg-light ">
            <h1>Project's</h1>
            <div className="row justify-content-center aligen-item-center ">
                <div className="col-lg-3 col-sm-8 m-5">
                <Card className='m-5 card' style={{ width: '18rem' }}>
               <Card.Img variant="top" src={require('./image/movieApp.png')} style={{ height:'18rem' }} />
               
               <Button variant="dark" style={{ zIndex:2,marginTop:-10 }}>
                <a href="https://darling-sunburst-f6462c.netlify.app/"  target="_blank" rel="noopener noreferrer">MovieSearchApp</a></Button>
                <Button variant="dark" style={{ zIndex:2,marginTop:-10 }}>
                <a href="https://github.com/JaiPremkumar/Movie-App"  target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                </Card>
                </div>
                <div className="col-lg-3 m-5">
                <Card className='m-5 card' style={{ width: '18rem' }}>
               <Card.Img variant="top" src={require('./image/cart.png')} style={{ height:'18rem' }}/>
               
               <Button variant="dark" style={{ zIndex:2,marginTop:-10 }}>
                <a href="https://symphonious-profiterole-4f7676.netlify.app/"  target="_blank" rel="noopener noreferrer">addToCart</a></Button>
                 <Button variant="dark" style={{ zIndex:2,marginTop:-10 }}>
                <a href="https://github.com/JaiPremkumar/shop-cart"  target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                </Card>
                </div>
                <div className="col-lg-3 col-sm-8 m-5">
                <Card className='m-5 card' style={{ width: '18rem' }}>
               <Card.Img variant="top" src={require('./image/Screenshot6.png')} style={{ height:'18rem' }} />
               
               <Button variant="dark" style={{ zIndex:2,marginTop:-10 }}>
                <a href="https://food-delivery-frontend-three-bice.vercel.app/"  target="_blank" rel="noopener noreferrer">online-Food-Delivery</a></Button>
                <Button variant="dark" style={{ zIndex:2,marginTop:-10 }}>
                <a href="https://github.com/JaiPremkumar/backend-food-delivery"  target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                </Card>
                </div>
                
            </div>
        </Container>
        <Side/>
                <Container fluid className="bg-dark">
            <div className="row  ">
                <div className="col-lg-6 ">
                <a href="https://github.com/JaiPremkumar"  target="_blank" rel="noopener noreferrer">
                <h1 className="text-light m-5 ">GitHub</h1></a>
                
            </div>

          <div className="col-lg-6">
          <a href="https://www.linkedin.com/in/prem-jai-40614b350/"  target="_blank" rel="noopener noreferrer">
          <h1 className="text-light m-5">LINKEDIN</h1></a>
          </div>
          </div>
        </Container>
       
            <Container fluid className="bg-dark">
            <h1>Contact</h1>
            <div className="row ">
                <div className="col-lg-12">
                <Card style={{ width: '18rem',backgroundColor:'transparent',border:'none' }}>
      <Card.Body>
      <Card.Title className="text-light">Contact</Card.Title>
        <Card.Title className="text-light"><MdEmail /></Card.Title>
        <Card.Subtitle className="mb-2 text-light">prem.jai411@gmail.com</Card.Subtitle>
        <Card.Text className="text-light">
        I possess strong skills in Node.js, React.js, and MongoDB
        </Card.Text>
        <a href="https://www.instagram.com/prem.jai1/profilecard/"  target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="m-1" /></a>
        <a href="https://www.linkedin.com/in/prem-jai-40614b350/"  target="_blank" rel="noopener noreferrer"><FaLinkedin  className="m-1"/></a>
        <a href="https://github.com/JaiPremkumar"  target="_blank" rel="noopener noreferrer"><FaGithub  className="m-1"/></a>
      </Card.Body>
    </Card>
            </div>
            </div>
            </Container>
            
        </div>
    )
}