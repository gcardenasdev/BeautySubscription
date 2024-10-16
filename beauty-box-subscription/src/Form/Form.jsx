import styles from './Form.module.css'
import {motion} from 'framer-motion'
import Refresh from './Refresh.jsx'
import { useState } from 'react';
import axios from 'axios';



import {Link, useNavigate, useNavigation} from 'react-router-dom'

function Form() {

    const [values, setValues] = useState ({
        email: '',
        password: '',
        country: '',
        state: '',
        zipcode: ''
    })
    
    const [price, setPrice] = useState("39.99");
    const [promo, setPromo] = useState("");
    const [discount, setDiscount] = useState("0.00");

    const handlePromoChange = (p) => {

        setPromo(p.target.value)
    }

    const handleDiscount = (x) => {

        x.preventDefault(); 
        
        setPromo("");

        if (promo === "promo15") {

            setDiscount(0.15 * price);
        } else {
            setDiscount(0);
        }


    }

    const handleChange = (e) => {
        setPrice(e.target.value);
        
    }

    const renderResult = () => {
        let result;

        switch (price)
        {
            case "39.99": 
                result = 39.99 - discount;
            break;

            case "140.00": 
                result = 140.00 - discount;
            break;

            case "360.00": 
                result = 360.00 - discount;
            break;

            default:
                result = price;

        }


        return result;
     }

     const navigate = useNavigate()

     function handleSubmit(e) {
        e.preventDefault()

        axios.post('/add_user', values).then((res) => {
        
        navigate('./Confirmation/Confirmation.jsx')
        console.log(res)

     }).catch((err)=>console.log(err))

     }

    
    return(
    <>
    <motion.section className={styles.form} id="Shop"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.5}}}
        viewport={{once: false, amount: 0.1}}
    >
        <h2>Check Out to Start Your Membership</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles.leftBox}>
                <div className={`${styles.formbox} ${styles.flex_column} `}>
                    <h3>Create Your Account</h3>
                    <div className={`${styles.flex_row_mobile}`}>
                        <div className={styles.flex_column}>
                            <label htmlFor='email'>Email </label>
                            <input type="email" name='emsil' onChange={(e) => setValues({...values, email: e.target.value})}/>
                        </div>

                        <div className={styles.flex_column}>
                            <label htmlFor='password'>Password </label>
                            <input type="password" name='password' onChange={(e) => setValues({...values, password: e.target.value})}/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.formbox} ${styles.flex_column}`}>
                    <h3>Shipping Location</h3>
                    <div className={` ${styles.flex_column} ${styles.flex_row_mobile}`}>
                        <div className={`${styles.flex_column}`}>
                            <label htmlFor='country'>Country</label>
                            <input type="text" name='country' onChange={(e) => setValues({...values, country: e.target.value})}/>
                        </div>
                        <div className={`${styles.flex_column}`}>
                            <label htmlFor='state'>State</label>
                            <input type="text" name='state' onChange={(e) => setValues({...values, state: e.target.value})}/>
                        </div>
                        <div className={`${styles.flex_column}`}>
                            <label htmlFor='zipcode'>Zip Code</label>
                            <input type="text" name='zipcode' pattern="[0-9]{5}" onChange={(e) => setValues({...values, zipcode: e.target.value})}/>
                        </div>
    
                   
                    </div>

                </div>

                <div className={`${styles.formbox} ${styles.flex_column} `}>
                    <h3>Payment Info</h3>
                    <div>
                        <div className={styles.option_btn}>
                            <label className={styles.container}>Credit/Debit
                            <input type="radio" name="radio"></input>
                            <span className={styles.checkmark}></span>
                            </label>
                        </div>
  

                        <div className={styles.option_btn}>
                            <label className={styles.container}>Paypal
                            <input type="radio" name="radio"></input>
                            <span className={styles.checkmark}></span>
                            </label>
                        </div>
              
                        
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
                <select value={price} onChange={handleChange}>
                    <option value="39.99">Monthly Subscription &#160;&#160;$39.99</option>
                    <option value="140.00">Quarterly Subscription &#160;&#160;$140.00</option>
                    <option value="360.00">Annual Subscription &#160;&#160;$360.00</option>
                </select>
                <div className={`${styles.flex_row} ${styles.space_between}`}>
                    <p>Shipping*</p>
                    <p>0.00</p>
                </div>
                <div>
                    <form className={styles.flex_column}>
                        <label className={`${styles.flex_row} ${styles.space_between}`} >
                            Promo Code
                            <p>{discount}</p>
                        </label>
                    <div className={styles.flex_row}>
                        <input type="text" value={promo}  onChange={handlePromoChange} className={styles.promo}></input>
                        <button onClick={x => handleDiscount(x)}>{<Refresh fillColor="black" size={27}/>}</button>
                    </div>
                    
                    </form>
             
                </div>
    
               <div className={`${styles.flex_row} ${styles.space_between}`}>
                <p>Tax</p>
                <p>0.00</p>
               </div>
               <div className={`${styles.flex_row} ${styles.space_between}`}>
                <p>Total</p>
                <p>${renderResult()}</p>
               </div>
    
        

                <input type="submit" value="Order Box"></input>
            </div>
        </form>
    </motion.section>
    </>

);


}

export default Form