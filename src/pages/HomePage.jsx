import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Solutions from '../components/solutions/Solutions'
import Portfolio from '../components/portfolio/Portfolio'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import Founders from '../components/founders/Founders'
import Feature from '../components/feature/Feature'

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero />
            <Solutions />
            <Portfolio />
            <Feature />
            <Founders />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default HomePage
