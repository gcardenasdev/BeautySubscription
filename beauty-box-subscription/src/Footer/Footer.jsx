import styles from './Footer.module.css'
import Instagram from '../Instagram.jsx';
import Facebook from '../Facebook.jsx';
import Twitter from '../Twitter.jsx';
import Pintrest from '../Pintrest.jsx';

function Footer(){
    return(
        <>
        <footer className="footer container">
            <div className={styles.social}>
                <Instagram fillColor="black" size={25}/>
                <Facebook fillColor="black" size={25}/>
                <Twitter fillColor="black" size={25}/>
                <Pintrest fillColor="black" size={25}/>
            </div>
            <div className={styles.links}>
                <p>About</p>
                <p>How It Works</p>
                <p>Contact</p>
            </div>

            <div className={styles.copyright}>
                <p>&copy; 2024 BeautyBox INC. All Rights Reserved</p>
            </div>
            
        </footer>

        </>
    );
}

export default Footer