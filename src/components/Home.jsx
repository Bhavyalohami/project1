import React from 'react';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>Dorse</h1>
            <p>Solution to all your Queries...</p>
        </main>
    </div>

    <div className="home2" id='service'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are one and only solutions to the tech problems that you face everyday. 
                We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
             Show enthusiasm and knowledge about the company and its values.
             Explain how the job aligns with your skills, career goals, and personal interests.
             </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s",}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s",}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s",}}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>
                <div style={{animationDelay:"1s",}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home