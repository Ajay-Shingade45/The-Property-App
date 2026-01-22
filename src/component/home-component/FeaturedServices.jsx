import './FeaturedServices.css'

const FeaturedServices = () => {
    return (
        <div className="featured-services-wrapper">
            <div className="featured-services-header">
                <h2 className="featured-services-heading">Featured Services</h2>
                <p className="featured-services-description">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>
            <div className="featured-services-container">
            <div className="featured-service-card">
                <h3 className="service-heading">Property Search</h3>
                <p className="service-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna
                </p>
                <ul className="service-features">
                    <li>Advanced Search Filters</li>
                    <li>360° Virtual Tours</li>
                    <li>Real-time Updates</li>
                </ul>
                <button className="service-btn">Explore Properties</button>
            </div>

            <div className="featured-service-card">
                <h3 className="service-heading">Market Analysis</h3>
                <p className="service-description">
                    Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute
                </p>
                <ul className="service-features">
                    <li>Price Trend Reports</li>
                    <li>Investment Insights</li>
                    <li>Market Forecasting</li>
                </ul>
                <button className="service-btn">Get Analysis</button>
            </div>

            <div className="featured-service-card">
                <h3 className="service-heading">Property Management</h3>
                <p className="service-description">
                    Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim laborum sed
                </p>
                <ul className="service-features">
                    <li>Tenant Screening</li>
                    <li>Rental Collection</li>
                    <li>Maintenance Services</li>
                </ul>
                <button className="service-btn">Manage Now</button>
            </div>

            <div className="featured-service-card">
                <h3 className="service-heading">Legal Support</h3>
                <p className="service-description">
                    Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam
                </p>
                <ul className="service-features">
                    <li>Contract Review</li>
                    <li>Title Verification</li>
                    <li>Legal Documentation</li>
                </ul>
                <button className="service-btn">Learn More</button>
            </div>
            </div>
        </div>
    )
}

export default FeaturedServices
