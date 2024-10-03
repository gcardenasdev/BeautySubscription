import backgroundVideo from '../assets/heroVideo.mp4'
import styles from './Hero.module.css'
import {motion} from 'framer-motion'

function Hero() {
    return(

        <>
        <motion.section className={styles.hero}>
             <video autoPlay loop muted>
                <source src={backgroundVideo} typr="video/mp4"/>
            </video>
            <div className={styles.overlay_text}>
                <h1>Gentle Beauty at Your Doorstep</h1>
                <p>A curated monthly box with the best products for your sensitive skin</p>
                <a href="#Shop"><button className={styles.hero_btn}>Get Yours Now</button></a>
            </div>

        </motion.section>
           
        </>
    );
}

export default Hero