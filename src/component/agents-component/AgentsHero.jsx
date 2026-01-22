import './AgentsHero.css'

const AgentsHero = () => {
    return (
        <>
            <div className="blogHero-header">
                <h1 className="blogHero-heading">Agents</h1>
                <p className="blogHero-subtitle">
                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
                    odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
                    debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
                    dolorem.
                </p>
            </div>
            <div className="main-container">

                <div className="container-left">
                    <div className="container-left-image">
                        <img src="/images/profile3.jpg" alt="Emily Rodriguez" />
                    </div>
                </div>
                <div className="container-right">
                    <h1 className="agents-name">Emily Rodriguez</h1>
                    <p className="agents-role">Senior Real Estate Advisor</p>

                    <div className="agents-tags">
                        <button className="tag-btn">Luxury Homes</button>
                        <button className="tag-btn">Investment Properties</button>
                        <button className="tag-btn">First-Time Buyers</button>
                    </div>

                    <p className="agents-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>

                    <div className="agents-stats">
                        <div className="stat-block">
                            <span className="stat-value">150+</span>
                            <span className="stat-label">Properties Sold</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-value">$45M</span>
                            <span className="stat-label">Total Sales</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-value">5</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>

                    <div className="agents-contact">
                        <p className="contact-line">+1 (555) 234-5678</p>
                        <p className="contact-line">emily.rodriguez@example.com</p>
                        <p className="contact-line">Downtown Miami Office</p>
                    </div>

                    <div className="agents-btn">
                        <button className="primary-btn">View My Listings</button>
                        <button className="secondary-btn">Schedule Consultation</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AgentsHero
