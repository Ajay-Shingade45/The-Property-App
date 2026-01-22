import './ServiceHero.css'

const ServiceHero = () => {
    return (
        <>
            <div className="service-hero-header">
                <h1 className="service-hero-title">Services</h1>
                <p className="service-hero-subtext">
                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
                </p>
            </div>
            <div className="service-hero-container">
                <div className="service-hero-left">
                    <h2 className="service-hero-heading">Buy Your Dream Home</h2>
                    <p className="service-hero-description">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                    </p>
                    <div className="service-hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">2,500+</span>
                            <span className="stat-label">Properties Sold</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                    <a href="#" className="service-hero-link">Learn More</a>
                    <div className="service-hero-bottom-image">
                        <img src="/images/home1.jpg" alt="Dream Home" />
                    </div>
                </div>
                <div className="service-hero-right">
                    <h2 className="service-hero-heading">Sell Your Property</h2>
                    <p className="service-hero-description">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <div className="service-hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">45</span>
                            <span className="stat-label">Days Average Sale</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">$2.5M+</span>
                            <span className="stat-label">Highest Sale Price</span>
                        </div>
                    </div>
                    <a href="#" className="service-hero-link">Get Valuation</a>
                    <div className="service-hero-bottom-image">
                        <img src="/images/home2.jpg" alt="Property" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceHero
