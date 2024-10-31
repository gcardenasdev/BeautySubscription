import styles from './Confirmation.module.css'
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function Confirmation() {


  const [data, setData] = useState();
  const order_num = new URLSearchParams(window.location.search).get('order_num');


  useEffect(() => {

    async function fetchRow() {
        try {
          await axios.get(`http://localhost:5000/confirmation`,{
            params: {
              order_num: order_num
            }
          }).then(response => {
            // Handle response
          setData(response.data[0]);
          console.log(response);
        })
        .catch(err => {
            // Handle errors
            console.error(err);
        });
        } catch (error) {
          console.error('Error fetching the row:', error);
        }
    };

    fetchRow();
  }, [order_num]);


if(data == undefined)
  return <>WHoops!</>
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
  