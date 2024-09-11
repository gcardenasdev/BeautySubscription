import beautybox from './assets/beauty-box.jpg'
import Card from './Card.jsx';
// import bagicon from './BagIcon.jsx'

function About(){

    return(

        <>
        
            <section className="about container">
                <img src={beautybox}></img>
                <h2>About Our Box</h2>
                <p>Our beauty Box is a curated selection of gentle beauty products for your sensitive skin needs. 
                    Every product has been rigurously tested to meet our strict sensitive skin standards.</p>
                <Card title="Become a Subscriber" description="Choose your membership from our monthly, quarterly, and annual plans."/>
                <Card title="Monthly Deliveries" description="You will receive a monthly box with three full sized products for you to enjoy plus a variety of products for you to try!"/>
                <Card title="Enjoy Healthier Skin" description="Every product we send you is formulated for sensitive skin for a healthier you!"/>
            </section>

        </>

    );

}

export default About