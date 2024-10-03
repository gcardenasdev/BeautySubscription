import styles from './Footer.module.css'
import Instagram from '../SVG/Instagram.jsx';
import Facebook from '../SVG/Facebook.jsx';
import Twitter from '../SVG/Twitter.jsx';
import Pintrest from '../SVG/Pintrest.jsx';

function Footer(){
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.left_desktop}>
                <div className={styles.social}>
                    <Instagram fillColor="black" size={25}/>
                    <Facebook fillColor="black" size={25}/>
                    <Twitter fillColor="black" size={25}/>
                    <Pintrest fillColor="black" size={25}/>
                </div>
                <div className={styles.links}>
                    <p><a href="#About">About</a></p>
                    <p><a href="#Pricing">How It Works</a></p>
                    <p>Contact</p>
                </div>
            </div>


            <div className={styles.copyright}>
                <p>&copy; 2024 BeautyBox INC. All Rights Reserved</p>
            </div>
            
        </footer>

        </>
    );
}

export default Footer