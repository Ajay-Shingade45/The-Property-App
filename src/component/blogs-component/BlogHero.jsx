import "./BlogHero.css";

const BlogHero = () => {
  return (
    <section className="blogHero">
      <div className="blogHero-header">
        <h1 className="blogHero-heading">Blogs</h1>
        <p className="blogHero-subtitle">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      <div className="blogHero-layout">
      <div className="blogHero-col blogHero-col-left">
        <div className="blogHeroCard ">
          <img className="blogHeroCard-img" src="/images/home1.jpg" alt="Blog" />

          <p className="blogHeroCard-desc">
            Aenean vulputate eleifend tellus aenean leo ligula porttitor
          </p>
          <p className="blogHeroCard-meta">March 13, 2025 • 2 Comments</p>
        </div>

        <div className="blogHeroCard ">
          <img className="blogHeroCard-img" src="/images/home2.jpg" alt="Blog" />

          <p className="blogHeroCard-desc">
            Etiam sit amet orci eget eros faucibus tincidunt duis leo
          </p>
          <p className="blogHeroCard-meta">March 12, 2025 • 4 Comments</p>
        </div>
      </div>

      <div className="blogHero-col blogHero-col-center">
        <div className="blogHeroCard-center blogHeroCard-featured">
          <img
            className="blogHeroCard-img"
            src="/images/home10.jpg"
            alt="Featured blog"
          />
          <h2 className="blogHeroCard-title">
            Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus
          </h2>
          <p className="blogHeroCard-text">
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante.
          </p>
          <p className="blogHeroCard-meta">March 16, 2025 • 8 Comments</p>
        </div>
      </div>

      <div className="blogHero-col blogHero-col-right">
        <div className="blogHeroCard ">
          <img className="blogHeroCard-img" src="/images/home3.jpg" alt="Blog" />
          
          <p className="blogHeroCard-desc">
            Maecenas tempus tellus eget condimentum rhoncus semper quam
          </p>
          <p className="blogHeroCard-meta">March 15, 2025 • 3 Comments</p>
        </div>

        <div className="blogHeroCard ">
          <img className="blogHeroCard-img"  src="/images/home4.jpg" alt="Blog"/>
          <p className="blogHeroCard-desc">
            Donec pede justo fringilla vel aliquet nec vulputate eget
          </p>
          <p className="blogHeroCard-meta">March 14, 2025 • 5 Comments</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default BlogHero;

