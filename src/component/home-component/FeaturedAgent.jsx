import './FeaturedAgent.css'

const featuredAgents = [
    {
        name: 'Michael Chen',
        role: 'Property Consultant',
        area: 'Brooklyn Heights',
        languages: 'English • Mandarin',
        image: '/images/profile1.jpg'
    },
    {
        name: 'Sarah Johnson',
        role: 'Commercial Specialist',
        area: 'Manhattan',
        languages: 'English • Spanish',
        image: '/images/profile2.jpg'
    },
    {
        name: 'David Martinez',
        role: 'Luxury Home Advisor',
        area: 'Upper East Side',
        languages: 'English • French',
        image: '/images/profile4.jpg'
    }
]

const FeaturedAgent = () => {
    return (
        <div className="featured-agent-wrapper">
            <div className="featured-agent-header">
                <h2 className="featured-agent-heading">Featured Agents</h2>
                <p className="featured-agent-description">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>
            <div className="featured-agent-container">
                {featuredAgents.map((agent, index) => (
                    <div className="featured-agent-card" key={index}>
                        <div className="featured-agent-avatar">
                            <img src={agent.image} alt={agent.name} />
                        </div>
                        <h3 className="featured-agent-name">{agent.name}</h3>
                        <p className="featured-agent-role">{agent.role}</p>
                        <p className="featured-agent-area">{agent.area}</p>
                        <p className="featured-agent-lang">{agent.languages}</p>
                        <button className="featured-agent-btn">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedAgent
