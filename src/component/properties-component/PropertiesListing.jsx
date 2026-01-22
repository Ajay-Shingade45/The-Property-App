import './PropertiesListing.css'

const PropertiesListing = () => {
    const properties = [
        {
            id: 1,
            price: '$875,000',
            title: 'Modern Family Home with Garden',
            address: '2847 Oak Street, Beverly Hills, CA 90210',
            beds: 4,
            baths: 3,
            sqft: '2,400',
            agent: 'Sarah Johnson',
            phone: '+1 (555) 123-4567',
            image: '/images/home1.jpg',
            agentImage: '/images/profile5.jpg'
        },
        {
            id: 2,
            price: '$1,250,000',
            title: 'Downtown Luxury Condominium',
            address: '1542 Main Avenue, Manhattan, NY 10001',
            beds: 2,
            baths: 2,
            sqft: '1,800',
            agent: 'Michael Chen',
            phone: '+1 (555) 234-5678',
            image: '/images/home2.jpg',
            agentImage: '/images/profile6.jpg'
        },
        {
            id: 3,
            price: '$4,500/month',
            title: 'Spacious Suburban Villa',
            address: '789 Pine Ridge Drive, Austin, TX 73301',
            beds: 5,
            baths: 4,
            sqft: '3,200',
            agent: 'Emma Rodriguez',
            phone: '+1 (555) 345-6789',
            image: '/images/home3.jpg',
            agentImage: '/images/profile7.jpg'
        },
        {
            id: 4,
            price: '$695,000',
            title: 'Waterfront Townhouse with Dock',
            address: '456 Harbor View Lane, Miami, FL 33101',
            beds: 3,
            baths: 2,
            sqft: '2,100',
            agent: 'David Williams',
            phone: '+1 (555) 456-7890',
            image: '/images/home4.jpg',
            agentImage: '/images/profile4.jpg'
        }
    ]

    return (
        <>
            <div className="properties-header">
                <h1 className="properties-heading">Properties</h1>
                <p className="properties-description">
                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
                </p>
            </div>
            <div className="properties-container">
            <div className="properties-cards">
                {properties.map((property) => (
                    <div className="property-card" key={property.id}>
                        <div className="property-image">
                            <img src={property.image} alt={property.title} />
                            <span className="property-price">{property.price}</span>
                        </div>
                        <div className="property-info">
                            <h3 className="property-title">{property.title}</h3>
                            <p className="property-address">📍 {property.address}</p>
                            <div className="property-features">
                                <span>{property.beds} Bed</span>
                                <span>{property.baths} Bath</span>
                                <span>{property.sqft} sqft</span>
                            </div>
                            <div className="property-agent">
                                <img src={property.agentImage} alt={property.agent} className="agent-profile-img" />
                                <div className="agent-details">
                                    <p className="agent-label">Agent</p>
                                    <p className="agent-name">{property.agent}</p>
                                    <p className="agent-phone">📞 {property.phone}</p>
                                </div>
                            </div>
                            <button className="view-details-btn">View Details</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="properties-filter">
                <h3 className="filter-heading">Filter Properties</h3>
                
                <div className="filter-group">
                    <label>Property Type</label>
                    <select>
                        <option value="">All Types</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condominium</option>
                        <option value="villa">Villa</option>
                        <option value="townhouse">Townhouse</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>Price Range</label>
                    <select>
                        <option value="">Any Price</option>
                        <option value="0-500000">Under $500,000</option>
                        <option value="500000-750000">$500,000 - $750,000</option>
                        <option value="750000-1000000">$750,000 - $1,000,000</option>
                        <option value="1000000+">$1,000,000+</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>Bedrooms</label>
                    <select>
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>Bathrooms</label>
                    <select>
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>Location</label>
                    <input type="text" placeholder="Enter city or ZIP" />
                </div>

                <div className="filter-group">
                    <label>Square Feet</label>
                    <select>
                        <option value="">Any Size</option>
                        <option value="0-1500">Under 1,500 sqft</option>
                        <option value="1500-2500">1,500 - 2,500 sqft</option>
                        <option value="2500-3500">2,500 - 3,500 sqft</option>
                        <option value="3500+">3,500+ sqft</option>
                    </select>
                </div>

                <button className="apply-filter-btn">Apply Filters</button>
                <button className="reset-filter-btn">Reset Filters</button>

                <div className="featured-section">
                    <h3 className="featured-heading">Featured Properties</h3>
                    
                    <div className="featured-card">
                        <div className="featured-image">
                            <img src="/images/home5.jpg" alt="Luxury Penthouse" />
                        </div>
                        <div className="featured-info">
                            <h4 className="featured-title">Luxury Penthouse</h4>
                            <p className="featured-location">Manhattan, NY</p>
                            <p className="featured-price">$2,850,000</p>
                        </div>
                    </div>

                    <div className="featured-card">
                        <div className="featured-image">
                            <img src="/images/home6.jpg" alt="Modern Studio" />
                        </div>
                        <div className="featured-info">
                            <h4 className="featured-title">Modern Studio</h4>
                            <p className="featured-location">Brooklyn, NY</p>
                            <p className="featured-price">$3,200/mo</p>
                        </div>
                    </div>

                    <div className="featured-card">
                        <div className="featured-image">
                            <img src="/images/home7.jpg" alt="Family Home" />
                        </div>
                        <div className="featured-info">
                            <h4 className="featured-title">Family Home</h4>
                            <p className="featured-location">Queens, NY</p>
                            <p className="featured-price">$895,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="pagination">
                <button className="pagination-btn prev-btn">Previous</button>
                <button className="pagination-btn page-num">1</button>
                <button className="pagination-btn page-num">2</button>
                <button className="pagination-btn page-num">3</button>
                <button className="pagination-btn next-btn">Next</button>
            </div>
        </>
    )
}

export default PropertiesListing
