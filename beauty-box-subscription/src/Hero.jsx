import backgroundVideo from './assets/heroVideo.mp4'

function Hero() {
    return(

        <>
            <video autoPlay loop muted>
                <source src={backgroundVideo} typr="video/mp4"/>
            </video>
        </>
    );
}

export default Hero