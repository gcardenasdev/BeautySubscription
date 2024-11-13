import styles from './Form.module.css'
import {motion} from 'framer-motion'
import Refresh from './Refresh.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate, useNavigation} from 'react-router-dom'
import CreditCard from './CreditCard.jsx';
import Paypal from './Paypal.jsx';

function Form() {

    
    const [price, setPrice] = useState("39.99");
    const [promo, setPromo] = useState("");
    const [discount, setDiscount] = useState("0.00");
    const [subTotal, setSubTotal] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handlePromoChange = (p) => {

        setPromo(p.target.value)
    }

    const handleDiscount = (x) => {

        x.preventDefault(); 
        
        setPromo("");

        if (promo === "promo15") {

            setDiscount(0.15);
        } else {
            setDiscount(0);
        }


    }

    const handleChange = (e) => {

        let result;
     
        switch (e.target.value)
        {
            case "39.99": 
            result = "Monthly";
        break;

        case "140": 
            result = "Quarterly";
        break;

        case "360": 
            result = "Annual";
        break;
        }

        setPrice(e.target.value);
        setValues({...values, sub_type: result});
        
    }


     const [values, setValues] = useState ({
        email: '',
        password: '',
        country: '',
        state: '',
        zipcode: '',
        sub_type: 'Monthly',
        total: ''

    })

    useEffect(() => {
        let result;
        let discountedPrice;
        switch (values.sub_type)
        {
            case "Monthly": 
                discountedPrice = discount * price;
                result = price - discountedPrice;
            break;

            case "Quarterly": 
            discountedPrice = discount * price;
                result = price - discountedPrice;
            break;

            case "Annual": 
            discountedPrice = discount * price;
                result = price - discountedPrice;
            break;

            default:
                result = price;
        }
        setSubTotal(parseFloat(result).toFixed(2));
        }, [values, discount]); 

     const navigate = useNavigate()

     function handleSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:5000/order', {...values, total: subTotal}).then((res) => {
        
        navigate(`/confirmation?order_num=${res.data.id}`)
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
                            <input type="email" name='email' onChange={(e) => setValues({...values, email: e.target.value})} required/>
                        </div>

                        <div className={styles.flex_column}>
                            <label htmlFor='password'>Password </label>
                            <input type="password" name='password' onChange={(e) => setValues({...values, password: e.target.value})} required/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.formbox} ${styles.flex_column}`}>
                    <h3>Shipping Location</h3>
                    <div className={` ${styles.flex_column} ${styles.flex_row_mobile}`}>
                        <div className={`${styles.flex_column}`}>
                            <label htmlFor='country'>Country</label>
                            <input type="text" name='country' onChange={(e) => setValues({...values, country: e.target.value})} required/>
                        </div>
                        <div className={`${styles.flex_column}`}>
                            <label htmlFor='state'>State</label>
                            <input type="text" name='state' onChange={(e) => setValues({...values, state: e.target.value})} required/>
                        </div>
                        <div className={`${styles.flex_column}`}>
                            <label htmlFor='zipcode'>Zip Code</label>
                            <input type="text" name='zipcode' pattern="[0-9]{5}" onChange={(e) => setValues({...values, zipcode: e.target.value})} required/>
                        </div>
    
                   
                    </div>

                </div>

                <div className={`${styles.formbox} ${styles.flex_column} `}>
                    <h3>Payment Info</h3>
                    <div>
                        <div className={styles.option_btn}>
                            <label className={styles.container}>Credit/Debit
                            <input type="radio" value="credit" checked={selectedOption === "credit"} onChange={handleOptionChange} name="radio"></input>
                            <span className={styles.checkmark}></span>
                            </label>
                        </div>
  

                        <div className={styles.option_btn}>
                            <label className={styles.container}>Paypal
                            <input type="radio" value="paypal" checked={selectedOption === "paypal"} onChange={handleOptionChange} name="radio"></input>
                            <span className={styles.checkmark}></span>
                            </label>
                        </div>
              
                        
                    </div>
                    <div>
                        {selectedOption === 'credit' && <CreditCard />}
                        {selectedOption === 'paypal' && <Paypal />}
                    </div>
                    
                </div>
            </div>
            

            <div className={`${styles.formbox} ${styles.flex_column} ${styles.rightBox}`}>
                <h3>Order Summary</h3>
                <select value={price} onChange={handleChange}>
                    <option value="39.99">Monthly Subscription &#160;&#160;$39.99</option>
                    <option value="140">Quarterly Subscription &#160;&#160;$140.00</option>
                    <option value="360">Annual Subscription &#160;&#160;$360.00</option>
                </select>
                <div className={`${styles.flex_row} ${styles.space_between}`}>
                    <p>Shipping*</p>
                    <p>0.00</p>
                </div>
                <div>
                    <div className={styles.flex_column}>
                        <label className={`${styles.flex_row} ${styles.space_between}`} >
                            Promo Code
                            <p>{(discount * price).toFixed(2)}</p>
                        </label>
                    <div className={styles.flex_row}>
                        <input type="text" value={promo}  onChange={handlePromoChange} className={styles.promo}></input>
                        <button onClick={x => handleDiscount(x)}>{<Refresh fillColor="black" size={27}/>}</button>
                    </div>
                    
                    </div>
             
                </div>
    
               <div className={`${styles.flex_row} ${styles.space_between}`}>
                <p>Tax</p>
                <p>0.00</p>
               </div>
               <div className={`${styles.flex_row} ${styles.space_between}`}>
                <p>Total</p>
                <p>${subTotal}</p>
               </div>
    
        

                <input type="submit" value="Order Box"></input>
            </div>
        </form>
    </motion.section>
    </>

);


}

export default Form