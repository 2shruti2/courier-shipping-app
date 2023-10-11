import { Footer, Navbar } from "../components"
import { Aboutus, Banner, Blogs, Header, Header2, Quote, Services, Team, Testimonial } from "../containers/Home"

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Header2/>
        <Aboutus/>
        <Testimonial/>
        <Services/>
        <Team/>
        <Banner/>
        <Quote/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Homepage