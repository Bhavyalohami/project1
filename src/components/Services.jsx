import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
