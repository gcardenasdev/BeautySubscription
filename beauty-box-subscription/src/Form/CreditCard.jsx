import styles from './Form.module.css'

function CreditCard() {

    return(

        <>
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
                                <input type="tel" placeholder="MM" pattern="[0-9]*" maxLength="2"/>
                                <input type="tel" placeholder="YY" pattern="[0-9]*" maxLength="4"/>
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
        </>
    );

}

export default CreditCard 