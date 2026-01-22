import "./heroComponent2.css"

const HeroComponent2 = () => {

    return (
        <>
            <div className="main-container">
                <div className="container1">
                    <button type='button' className='premium'> Premium Properties</button>
                    <div className='head-line'>
                        <p className="head-text">Discover Your </p>
                        <p className="head-text">Perfecdct Home in </p>
                        <p className="head-text">the Heart of the City</p>
                    </div>

                    <p className="text-contain">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Browse thousands of verified listings from trusted agents.
                    </p>

                    <div className="count-sec">
                        <div className="count-box">
                            <p className="count-no" style={{ fontSize: "40px", color: "pink" }}>28000+</p>
                            <p>property Litsed</p>
                        </div>
                        <div className="count-box">
                            <p className="count-no" style={{ fontSize: "40px", color: "yellow", }}>95%</p>
                            <p>Client Service</p>
                        </div>
                        <div className="count-box">
                            <p className="count-no" style={{ fontSize: "40px", color: "orange", margin: "31px 0px -14px 0px;" }}>24/7</p>
                            <p>Support</p>
                        </div>
                    </div>

                    <div className="text-line">
                        <p>
                            Expert market analysis and pricing strategies <br />
                            Personalized property matching services <br />
                            Professional photography and virtual tours <br />
                        </p>
                    </div>
                    <div className="info">
                        <button className="btn-learn-about">Learn about us</button>
                        <p className="contact-info">
                            <p className="text"> Need assistance?</p>
                            <p className="phone"> +1 (555) 987-6543 </p>
                             
                        </p>
                    </div>
                </div>
                <div className="container2">
                    <div className="hero-image1" >
                        <img src="/images/home2.jpg" alt="property image" />
                    </div>
                    <div className="sub-image">
                        <img src="/images/inside-house1.jpg" alt="inside home image" />
                        <img src="/images/home1.jpg" alt="home1 image" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComponent2