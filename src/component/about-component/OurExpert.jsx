import './OurExpert.css'

const OurExpert = () => {
    const teamMembers = [
        {
            image: '/images/profile1.jpg',
            name: 'John Anderson',
            role: 'Senior Property Advisor'
        },
        {
            image: '/images/profile2.jpg',
            name: 'Sarah Mitchell',
            role: 'Investment Specialist'
        }
    ]

    return (
        <div className="expert-container">
            <div className="expert-header">
                <h2 className="expert-heading">Meet Our Expert Team</h2>
                <p className="expert-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation.
                </p>
            </div>
            <div className="expert-cards">
                {teamMembers.map((member, index) => (
                    <div className="expert-card" key={index}>
                        <div className="expert-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="expert-info">
                            <h3 className="expert-name">{member.name}</h3>
                            <p className="expert-role">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="expert-button-wrapper">
                <button className="view-team-btn">View full team</button>
            </div>
        </div>
    )
}

export default OurExpert
