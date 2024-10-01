import PricingCard from './PricingCard.jsx'
import {motion} from 'framer-motion'

function Pricing(){
    return(

        <>
        <motion.section className="pricing container" id="Pricing"
                       initial={{opacity: 0, y: 50}}
                       whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.5}}}
                       viewport={{once: true, amount: 0.1}}
        >
            <h2>
                Choose Your Plan
            </h2>
            <div className="card-container">
                <PricingCard title="Monthly Plan" price="$39.00" description="Billed Monthly"/>
                <PricingCard title="Quarterly Plan" price="$140.00" description="Billed Quarterly"/>
                <PricingCard title="Annual Plan" price="$360.00" description="Billed Annually"/>
            </div>

        </motion.section>
 
        </>
    );
}

export default Pricing