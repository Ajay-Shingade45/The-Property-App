import './AgentsExperts.css'

const agents = [
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
    },
    {
        name: 'Lisa Thompson',
        role: 'Residential Specialist',
        area: 'Queens',
        languages: 'English',
        image: '/images/profile5.jpg'
    }
]

const AgentsExperts = () => {
    return (
        <div className="agents-experts">
            {agents.map((agent, index) => (
                <div className="agent-card" key={index}>
                    <div className="agent-avatar">
                        <img src={agent.image} alt={agent.name} />
                    </div>
                    <h3 className="agent-card-name">{agent.name}</h3>
                    <p className="agent-card-role">{agent.role}</p>
                    <p className="agent-card-area">{agent.area}</p>
                    <p className="agent-card-lang">{agent.languages}</p>
                    <button className="agent-card-btn">View Details</button>
                </div>
            ))}
        </div>
    )
}

export default AgentsExperts
