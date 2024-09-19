import PricingCard from './PricingCard.jsx'

function Pricing(){
    return(

        <>
        <section className="pricing container" id="Pricing">
            <h2>
                Choose Your Plan
            </h2>
            <div className="card-container">
                <PricingCard title="Monthly Plan" price="$39.00" description="Billed Monthly"/>
                <PricingCard title="Quarterly Plan" price="$140.00" description="Billed Quarterly"/>
                <PricingCard title="Annual Plan" price="$360.00" description="Billed Annually"/>
            </div>

        </section>
 
        </>
    );
}

export default Pricing