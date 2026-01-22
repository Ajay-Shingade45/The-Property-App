import Hero from "../component/home-component/HeroComponent.jsx"
import Hero2 from "../component/home-component/HeroComponent2.jsx"
import FeatureProperty from "../component/home-component/FeaturedProperty.jsx"
import FeatureServices from "../component/home-component/FeaturedServices.jsx"
import FeaturedAgent from "../component/home-component/FeaturedAgent.jsx"
import RecentBlog from "../component/home-component/RecentBlog.jsx"
import Footer from "../component/common-component/Footer.jsx"

const Home = ()=>{

    return(
        <>
         <Hero />
         <Hero2 />
         <FeatureProperty />
         <FeatureServices />
         <FeaturedAgent/>
         <RecentBlog/>
         <Footer/>
        </>
    )
}

export default Home