import './Timeline.css'

const Timeline = () => {
    const timelineData = [
        {
            year: '2010',
            title: 'Company Founded',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            year: '2015',
            title: '1000th Property Milestone',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            year: '2020',
            title: 'Digital Innovation Launch',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            year: '2024',
            title: 'Regional Expansion',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
        }
    ]

    return (
        <div className="timeline-container">
            <div className="timeline-header">
                <h2 className="timeline-heading">Our Journey of Excellence</h2>
                <p className="timeline-description">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.
                </p>
            </div>
            <div className="timeline-wrapper">
                {timelineData.map((item, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="timeline-year-circle">
                            <span>{item.year}</span>
                        </div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-text">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline
