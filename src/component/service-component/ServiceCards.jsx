import './ServiceCards.css'

const ServiceCards = () => {
    const services = [
        {
            id: 1,
            title: 'Rental Services',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
            features: ['Tenant Screening', 'Property Marketing', 'Lease Management'],
            buttonText: 'Explore Rentals'
        },
        {
            id: 2,
            title: 'Investment Consulting',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.',
            features: ['Market Analysis', 'ROI Calculations', 'Portfolio Planning'],
            buttonText: 'Start Investing'
        },
        {
            id: 3,
            title: 'Property Management',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            features: ['Maintenance Coordination', 'Rent Collection', '24/7 Support'],
            buttonText: 'Manage Property'
        }
    ]

    return (
        <>
            <div className="service-cards-container">
                {services.map((service) => (
                    <div className="service-card" key={service.id}>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-description">{service.description}</p>
                        <ul className="service-card-features">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button className="service-card-btn">{service.buttonText}</button>
                    </div>
                ))}
            </div>

            <div className="service-cta-container">
                <div className="service-cta-content">
                    <h2 className="service-cta-heading">Ready to Take the Next Step?</h2>
                    <p className="service-cta-description">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
                    </p>
                </div>
                <button className="service-cta-btn">Get Free Consultation</button>
            </div>
        </>
    )
}

export default ServiceCards
