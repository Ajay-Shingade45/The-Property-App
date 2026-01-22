import './RecentBlog.css'

const RecentBlog = () => {
    return (
        <div className="recent-blog-wrapper">
            <div className="recent-blog-header">
                <h2 className="recent-blog-heading">Recent Blog Posts</h2>
                <p className="recent-blog-header-description">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>
            <div className="recent-blog-container">
                <div className="recent-blog-card">
                    <img src="/images/home4.jpg" alt="Blog Post" className="recent-blog-image" />
                    <div className="recent-blog-content">
                        <p className="recent-blog-date">December 12</p>
                        <p className="recent-blog-description">Eum ad dolor et. Autem aut fugiat debitis</p>
                        <a href="#" className="recent-blog-link">Read More</a>
                    </div>
                </div>

                <div className="recent-blog-card">
                    <img src="/images/home5.jpg" alt="Blog Post" className="recent-blog-image" />
                    <div className="recent-blog-content">
                        <p className="recent-blog-date">July 17</p>
                        <p className="recent-blog-description">Et repellendus molestiae qui est sed omnis</p>
                        <a href="#" className="recent-blog-link">Read More</a>
                    </div>
                </div>

                <div className="recent-blog-card">
                    <img src="/images/home8.jpg" alt="Blog Post" className="recent-blog-image" />
                    <div className="recent-blog-content">
                        <p className="recent-blog-date">July 17</p>
                        <p className="recent-blog-description">Et repellendus molestiae qui est sed omnis</p>
                        <a href="#" className="recent-blog-link">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentBlog
