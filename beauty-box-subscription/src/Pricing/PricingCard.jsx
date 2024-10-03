import {motion} from 'framer-motion'

function PricingCard(props){

    return(
        <>
            <motion.div className="card"
               initial={{opacity: 0, y: 50}}
               whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.5}}}
               viewport={{once: true, amount: 0.1}}
            >
                <div className="card-header">
                    <h3 className="pricing-card_title">{props.title}</h3>
                </div>
                <div className="card-body">
                    <p className="pricing-card_price">{props.price}</p>
                    <p className="pricing-card_description">{props.description}</p>
                </div>
            </motion.div>
        </>
    );
}

export default PricingCard