import backgroundVideo from './assets/heroVideo.mp4'

function Hero() {
    return(

        <>
        <section className="hero">
             <video autoPlay loop muted>
                <source src={backgroundVideo} typr="video/mp4"/>
            </video>
            <div className='overlay-text'>
                <h1>Gentle Beauty at Your Doorstep</h1>
                <p>A curated monthly box with the best products for your sensitive skin</p>
                <a href="#Shop"><button className="hero-btn">Get Yours Now</button></a>
            </div>

        </section>
           
        </>
    );
}

export default Hero