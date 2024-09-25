import styles from './Form.module.css'
import {motion} from 'framer-motion'
import Refresh from './Refresh.jsx'

function Form(){
return(
    <>
    <motion.section className={styles.form} id="Shop"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.5}}}
        viewport={{once: false, amount: 0.1}}
    >
        <h2>Check Out to Start Your Membership</h2>
        <form>
            <div className={styles.leftBox}>
                <div className={`${styles.formbox} ${styles.flex_column} `}>
                    <h3>Create Your Account</h3>
                    <div className={`${styles.flex_row_mobile}`}>
                        <div className={styles.flex_column}>
                            <label>Email </label>
                            <input type="email"/>
                        </div>

                        <div className={styles.flex_column}>
                            <label>Password </label>
                            <input type="password"/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.formbox} ${styles.flex_column}`}>
                    <h3>Shipping Location</h3>
                    <div className={` ${styles.flex_column} ${styles.flex_row_mobile}`}>
                        <div className={`${styles.flex_column}`}>
                            <label>Country</label>
                            <input type="text"/>
                        </div>
                        <div className={`${styles.flex_column}`}>
                            <label>State</label>
                            <input type="text"/>
                        </div>
                        <div className={`${styles.flex_column}`}>
                            <label>Zip Code</label>
                            <input type="text" pattern="[0-9]{5}"/>
                        </div>
    
                   
                    </div>

                </div>

                <div className={`${styles.formbox} ${styles.flex_column} `}>
                    <h3>Payment Info</h3>
                    <div>
                        <label className={styles.radio_container}>
                            <input type="radio" name="CREDIT_CARD"  value="CREDIT_CARD"/>
                            <div role="button" className={styles.option_btn}>
                            <div>
                                    <div>
                                        <span className={styles.checkmark}></span>
                                    </div>
                                </div>
                                <div>Credit or Debit Card</div>
                            </div>
                            
                        </label>
                        
                        <label className={styles.radio_container}>
                            <input type="radio" name="PAYPAL"  value="PAYPAL" />
                            <div role="button" className={styles.option_btn}>
                                <div>
                                    <div>
                                        <span className={styles.checkmark}>

                                        </span>
                                    </div>
                                </div>
                                <div>Paypal</div>
                            </div>
                            
                        </label>
                        
                    </div>
                    <div className={styles.flex_column}>
                    
                        <div className={styles.name}>
                            <div className={`${styles.flex_column} ${styles.first_name}`}>
                                <label>First Name</label>
                                <input type="text"/>
                            </div>
                            <div className={`${styles.flex_column} ${styles.last_name}`}>
                                <label>Last Name</label>
                                <input type="text"/>
                            </div>
                        
                        
                        </div>
                    </div>
                    <div className={styles.flex_column}>
                        <div className={`${styles.flex_column} ${styles.card_num}`}>
                            <label>Credit Card</label>
                            <input type="tel"/>
                        </div>

                        <div className={styles.cardInfo}>
                            <div>
                                <label>Expiration Date</label>
                                <div className={styles.expDate}>
                                    <input type="tel" placeholder="MM" pattern="[0-9]*" maxlength="2"/>
                                    <input type="tel" placeholder="YY" pattern="[0-9]*" maxlength="4"/>
                                </div>
                            </div>
                            <div className={styles.cvv}>
                                <label>CVV</label>
                                <div>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className={styles.zip}>
                                <label>Zip Code</label>
                                <div>
                                    <input type="text" pattern="[0-9]{5}"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className={`${styles.formbox} ${styles.flex_column} ${styles.rightBox}`}>
                <h3>Order Summary</h3>
                <select>
                    <option value="Monthly">Monthly Subscription &#160;<p>$39.99</p></option>
                    <option value="Quarterly">Quarterly Subscription &#160;<p>$140.00</p></option>
                    <option value="Annual">Annual Subscription &#160;<p>$360.00</p></option>
                </select>
                <div className={`${styles.flex_row} ${styles.space_between}`}>
                    <p>Shipping*</p>
                    <p>0.00</p>
                </div>
                <div>
                    <form className={styles.flex_column}>
                        <label className={`${styles.flex_row} ${styles.space_between}`} >
                            Promo Code
                            <p>0.00</p>
                        </label>
                    <div className={styles.flex_row}>
                        <input type="text" className={styles.promo}></input>
                        <button>{<Refresh fillColor="black" size={27}/>}</button>
                    </div>
                    
                    </form>
             
                </div>
    
               <div className={`${styles.flex_row} ${styles.space_between}`}>
                <p>Tax</p>
                <p>0.00</p>
               </div>
               <div className={`${styles.flex_row} ${styles.space_between}`}>
                <p>Total</p>
                <p>$39.99</p>
               </div>
    
        

                <input type="submit" value="Order Box"></input>
            </div>
        </form>
    </motion.section>
    </>

);


}

export default Form