import styles from './Confirmation.module.css'
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function Confirmation() {


  const [data, setData] = useState([]);
  const { email } = useParams();
  useEffect(() => {
    axios.get(`/get_order/${email}`).then((res) => {
        setData(res.data);
      }).catch((err) => console.log(err));
  }, [email]);

    return (
  
    
      <>
      <div className={styles.confirmation_section}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1 className={styles.h1}>Thank you for your order</h1>
            <h2>Your order number is: {data.order_num}</h2>
            <h2>A confirmation email has been sent to: {data.email}</h2>
          </div>

        <div className={styles.summary}>
          <h3 className={styles.h3}>Order Summary:</h3>
          <div className={styles.details}>

            <div className={styles.detail_headings}>
              <p>Subscription type:</p>
              <p>Total:</p>
            </div>

            <div className={styles.detail_content}>
              <p>{data.sub_type}</p>
              <p>{data.total}</p>
            </div>


          </div>
        </div>
          


        </div>
      </div>

       
      </>
    )
  }
  
  export default Confirmation
  