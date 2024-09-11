

function PricingCard(props){

    return(
        <>
            <div className="card">
                <div>

                    <h3 className="pricing-card_title">{props.title}</h3>
                </div>
                <div>
                    <p className="pricing-card_price">{props.price}</p>
                    <p className="pricing-card_description">{props.description}</p>
                </div>
            </div>
        </>
    );
}

export default PricingCard