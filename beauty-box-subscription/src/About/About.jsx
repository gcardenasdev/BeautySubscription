import beautybox from '../assets/beauty-box.jpg'
import Bag from '../SVG/Bag.jsx'
import Truck from '../SVG/Truck.jsx';
import Heart from '../SVG/Heart.jsx';
import Card from './Card.jsx';
import {motion} from 'framer-motion'


function About(){

    return(

        <>
        
            <motion.section className="about container" id="About"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.5}}}
                viewport={{once: false, amount: 0.1}}
            >
                    <div className="about-header flex-mobile">
                        <img src={beautybox}></img>

                        <div className="about-description flex-mobile">
                            <h2>About Our Box</h2>
                            <p>Our beauty Box is a curated selection of gentle beauty products for your sensitive skin needs. 
                                Every product has been rigurously tested to meet our strict sensitive skin standards.</p>
                        </div>

                    </div>
                
                    <div className="card-container">
                        <Card icon={<Bag fillColor="black" size={48}/>} title="Become a Subscriber" description="Choose your membership from our monthly, quarterly, and annual plans."/>
                        <Card icon={<Truck  fillColor="black" size={48}/>} title="Monthly Deliveries" description="You will receive a monthly box with three full sized products for you to enjoy plus a variety of products for you to try!"/>
                        <Card icon={<Heart fillColor="black" size={48}/>} title="Enjoy Healthier Skin" description="Every product we send you is formulated for sensitive skin for a healthier you!"/>
                    </div>
                
            </motion.section>

        </>

    );

}

export default About