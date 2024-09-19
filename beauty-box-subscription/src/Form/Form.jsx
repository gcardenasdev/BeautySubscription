import styles from './Form.module.css'

function Form(){
return(
    <>
    <section className={styles.form} id="Shop">
        <h2>Check Out to Start Your Membership</h2>
        <form>
            <div className={styles.formbox}>
                <h3>Create Your Account</h3>
                <label>Email </label>
                <input type="email"/>
                <label>Password </label>
                <input type="password"/>
            </div>
            <div className={styles.formbox}>
                <h3>Shipping Location</h3>
                <label>Country</label>
                <input type="text"/>
                <label>State</label>
                <input type="text"/>
                <label>Zip Code</label>
                <input type="text" pattern="[0-9]{5}"/>
            </div>
            <div className={styles.formbox}>
                <h3>Payment Info</h3>
                <label>Credit or Debit Card</label>
                <input type="radio"/>
                <label>Paypal</label>
                <input type="radio"/>
                <label>First Name</label>
                <input type="text"/>
                <label>Last Name</label>
                <input type="text"/>
                <label>Credit Card</label>
                <input type="tel"/>
                <label>Expiration Date</label>
                <input type="text" placeholder="MM/YY" pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
                <label>CVV</label>
                <input type="text"/>
                <label>Zip Code</label>
                <input type="text" pattern="[0-9]{5}"/>
            </div>
            <div className={styles.formbox}>
                <h3>Order Summary</h3>
                <select>
                    <option value="Monthly">Monthly Subscription $39.99</option>
                    <option value="Quarterly">Quarterly Subscription $140.00</option>
                    <option value="Annual">Annual Subscription $360.00</option>
                </select>
                <p>Shipping*</p>
                <p>0.00</p>
                <p>Promo Code</p>
                <p>0.00</p>
                <input type="text"></input>
                <p>Tax</p>
                <p>0.00</p>
                <p>Total</p>
                <p>$39.99</p>

                <input type="submit" value="Order Box"></input>
            </div>
        </form>
    </section>
    </>

);


}

export default Form