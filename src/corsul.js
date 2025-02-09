import Card from 'react-bootstrap/Card';
import React from "react";
import Slider from "react-slick";

export default function Slider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3}
    return(
        <>
         <div className="slider-container">
         <Slider {...settings}>
         <div className="row">
                <div className="col-lg-3 m-5">
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/react.png')}  />
                </Card>
                </div>
                <div className="col-lg-3  m-5">
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/node.png')} style={{ height:'11rem' }}/>
                </Card>
                </div>
                <div className="col-lg-3  m-5">
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/express.webp')} style={{ height:'11rem' }} />
                </Card>
                </div>
                <div className="col-lg-3  m-5">
                <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/mongodb.png')} />
                </Card>
                </div>
                <div className="col-lg-3  m-5 ">
                <Card className='mr-5' style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/Visual_Studio.png')} />
                </Card>
                </div>
                <div className="col-lg-3  m-5">
                <Card className='mr-5' style={{ width: '11rem' }}>
               <Card.Img variant="top" src={require('./image/GitHub-logo.png')}  style={{ height:'11rem' }} />
                </Card>
                </div>
            </div>
            </Slider>
            </div>
        </>
    )
}