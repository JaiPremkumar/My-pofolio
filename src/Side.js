import Card from 'react-bootstrap/Card';
import React from "react";
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Container from 'react-bootstrap/esm/Container';

export default function Side(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <Container>
        <h1>Techologies</h1>
         <div className="slider-container">
         <Slider {...settings}>
         
                <div >
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/react.png')}  />
                </Card>
                </div>
                <div >
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/node.png')} style={{ height:'11rem' }}/>
                </Card>
                </div>
                <div >
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/express.webp')} style={{ height:'11rem' }} />
                </Card>
                </div>
                <div >
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/mongodb.png')} />
                </Card>
                </div>
                <div >
                <Card  style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/Visual_Studio.png')} />
                </Card>
                </div>
                <div  >
                <Card  style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/GitHub-logo.png')}  style={{ height:'11rem' }} />
                </Card>
                </div>
            
            </Slider>
            </div>
        </Container>
    )
}