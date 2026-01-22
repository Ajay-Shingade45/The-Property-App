import './featureProperty.css'


const FeatureProperty = () => {


    return (
        <>
            <div className="main-container3">
                <div className="title">Featured Properties</div>
                <div className="sub-container1">
                    <div className="card-block1">
                        <img src="./images/home6.jpg" alt="Property Image" />
                        <div className="card-details">
                            <div>
                                <h3 className="property-name">Seaside Villa with Infinity Pool</h3>
                                <p className="address">Coronado, CA 92118</p>
                            </div>
                            <button className="price">$3,760,000</button>
                        </div>

                        <p className="description">Praesent commodo cursus magna, fusce dapibus tellus ac cursus commodo, vestibulum id ligula porta felis euismod semper.</p>

                        <div className="cardBlock1-btn">
                            <button className="visit-btn">Arrange Visit</button>
                            <button className="more-photo-btn">More Photo</button>
                        </div>
                    </div>

                    <div className="card-block2">
                        <div className="card">
                            <img src="./images/home7.jpg" alt="Property Image" />
                            <div className="card-info">
                                <h4 className="property-name">Seaside Villa with Infinity Pool</h4>
                                <p className="address">Coronado, CA 92118</p>
                                <div className="btn-price">
                                    <span className="price">$689,000</span>
                                    <button className="btn-visit">Arrange Visit</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src="./images/home7.jpg" alt="Property Image" />
                            <div className="card-info">
                                <p className="property-name">Seaside Villa with Infinity Pool</p>
                                <p className="address"> Coronado, CA 92118</p>
                                <div className="btn-price">
                                    <p className="price">$689,000</p>
                                    <button className="btn-visit">Arrange Visit</button>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <img src="./images/home7.jpg" alt="Property Image" />
                            <div className="card-info">
                                <p className="property-name">Seaside Villa with Infinity Pool</p>
                                <p className="address"> Coronado, CA 92118</p>
                                <div className="btn-price">
                                    <p className="price">$689,000</p>
                                    <button className="btn-visit">Arrange Visit</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="featured-cards-container">
                    <div className="featured-card">
                        <img src="/images/home1.jpg" alt="Modern Courtyard Residence" />
                        <div className="featured-card-content">
                            <h3 className="featured-card-title">Modern Courtyard Residence</h3>
                            <p className="featured-card-address">Scottsdale, AZ 85251</p>
                            <div className="featured-card-details">
                                <span className="featured-detail"><strong>4</strong> Bedroom</span>
                                <span className="featured-detail"><strong>3</strong> Washroom</span>
                                <span className="featured-detail"><strong>2,980</strong> sq ft</span>
                            </div>
                            <div className="featured-card-footer">
                                <p className="featured-card-price">$1,025,000</p>
                                <button className="featured-view-btn">View</button>
                            </div>
                        </div>
                    </div>

                    <div className="featured-card">
                        <img src="/images/home2.jpg" alt="Cozy Lakeview Townhouse" />
                        <div className="featured-card-content">
                            <h3 className="featured-card-title">Cozy Lakeview Townhouse</h3>
                            <p className="featured-card-address">Madison, WI 53703</p>
                            <div className="featured-card-details">
                                <span className="featured-detail"><strong>3</strong> Bedroom</span>
                                <span className="featured-detail"><strong>2</strong> Washroom</span>
                                <span className="featured-detail"><strong>1,780</strong> sq ft</span>
                            </div>
                            <div className="featured-card-footer">
                                <p className="featured-card-price">$429,000</p>
                                <button className="featured-view-btn">View</button>
                            </div>
                        </div>
                    </div>

                    <div className="featured-card">
                        <img src="/images/home3.jpg" alt="Garden Home Near Downtown" />
                        <div className="featured-card-content">
                            <h3 className="featured-card-title">Garden Home Near Downtown</h3>
                            <p className="featured-card-address">Raleigh, NC 27601</p>
                            <div className="featured-card-details">
                                <span className="featured-detail"><strong>3</strong> Bedroom</span>
                                <span className="featured-detail"><strong>2</strong> Washroom</span>
                                <span className="featured-detail"><strong>1,920</strong> sq ft</span>
                            </div>
                            <div className="featured-card-footer">
                                <p className="featured-card-price">$512,000</p>
                                <button className="featured-view-btn">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProperty