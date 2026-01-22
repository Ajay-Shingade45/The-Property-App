import "./BlogCard.css";

const BLOG_CARDS = [
  {
    id: 1,
    category: "Politics",
    description: "Dolorum optio tempore voluptas dignissimos",
    profileImg: "/images/profile1.jpg",
    name: "Maria Doe",
    date: "Jan 1, 2022",
    coverImg: "/images/on-field1.jpg",
  },
  {
    id: 2,
    category: "Sports",
    description: "Nisi magni odit consequatur autem nulla dolorem",
    profileImg: "/images/profile2.jpg",
    name: "Allisa Mayer",
    date: "Jun 5, 2022",
    coverImg: "/images/on-field2.jpg",
  },
  {
    id: 3,
    category: "Entertainment",
    description: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
    profileImg: "/images/profile3.jpg",
    name: "Mark Dower",
    date: "Jun 22, 2022",
    coverImg: "/images/on-field3.jpg",
  },
  {
    id: 4,
    category: "Sports",
    description: "Non rem rerum nam cum quo minus olor distincti",
    profileImg: "/images/profile4.jpg",
    name: "Lisa Neymar",
    date: "Jun 30, 2022",
    coverImg: "/images/home5.jpg",
  },
  {
    id: 5,
    category: "Politics",
    description: "Accusamus quaerat aliquam qui debitis facilis consequatur",
    profileImg: "/images/profile5.jpg",
    name: "Denis Peterson",
    date: "Jan 30, 2022",
    coverImg: "/images/home6.jpg",
  },
  {
    id: 6,
    category: "Entertainment",
    description: "Distinctio provident quibusdam numquam aperiam aut",
    profileImg: "/images/profile6.jpg",
    name: "Mika Lendon",
    date: "Feb 14, 2022",
    coverImg: "/images/home7.jpg",
  },
];

const BlogCard = () => {
  return (
    <section className="blogCards">
      <div className="blogCards__grid">
        {BLOG_CARDS.map((card) => (
          <article key={card.id} className="blogCard">
            <img className="blogCard__cover" src={card.coverImg} alt="Blog" />

            <div className="blogCard__body">
              <span className="blogCard__category">{card.category}</span>
              <p className="blogCard__desc">{card.description}</p>

              <div className="blogCard__authorRow">
                <img
                  className="blogCard__avatar"
                  src={card.profileImg}
                  alt={card.name}
                />
                <div className="blogCard__authorMeta">
                  <p className="blogCard__name">{card.name}</p>
                  <p className="blogCard__date">{card.date}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;

