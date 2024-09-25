import CustomerMask from '/src/assets/customer-mask.jpg'
import ProductJars from '/src/assets/product-jars.jpg'
import ProductFace from '/src/assets/product-on-face.jpg'
import ProductHand from '/src/assets/product-on-hand.jpg'
import ProductBottles from '/src/assets/products-bottles.jpg'
import styles from './PictureGallery.module.css'
import {motion} from 'framer-motion'

function PictureGallery() {

    return(


        <motion.section className={styles.galleryWrapper}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.1}}
        >
                <div className={styles.header}>
                    <h2>Follow Us On Instagram</h2>
                    <a href="https://www.instagram.com/gentlebeautybox/">@BeautyBox</a>
                </div>
            <div className={styles.gallery}>

                <div className={styles.galleryMain}>
                    <motion.div className={styles.galleryMainItem}
                            whileHover={{ scale: 0.9}}
                    >
                        <img src={CustomerMask}></img>
                    </motion.div>
                    
                </div>
      
                <div className={styles.galleryGrid}>
                    <motion.div className={styles.galleryGridItem}
                            whileHover={{ scale: 0.9}}
                            
                    ><img src={ProductJars}></img></motion.div>
                    <motion.div className={styles.galleryGridItem}
                            whileHover={{ scale: 0.9}}
                            
                    ><img src={ProductFace}></img></motion.div>
                    <motion.div className={styles.galleryGridItem}
                            whileHover={{ scale: 0.9}}
                            
                    ><img src={ProductHand}></img></motion.div>
                    <motion.div className={styles.galleryGridItem}
                            whileHover={{ scale: 0.9}}
                            
                    ><img src={ProductBottles}></img></motion.div>
                </div>  
        </div>

        </motion.section>

    );

}

export default PictureGallery