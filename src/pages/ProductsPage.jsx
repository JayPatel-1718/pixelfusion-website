import React, { useEffect } from 'react'
import Products from '../components/products/Products'
import Contact from '../components/contact/Contact'

const ProductsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="products-page">
            <section className="hero is-visible" style={{ minHeight: '50vh', paddingTop: '120px', alignItems: 'flex-start' }}>
                <div className="hero__background">
                    <div className="hero__gradient hero__gradient--fade"></div>
                </div>
                <div className="hero__container" style={{ marginTop: '80px' }}>
                    <div className="hero__content">
                        <h1 className="hero__headline" style={{ marginBottom: '16px' }}>
                            <span className="hero__headline-gradient shiny-text">
                                Our Products
                            </span>
                        </h1>
                        <p className="hero__services" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            We don't just build solutions for clients; we craft scalable 
                            infrastructure and internal products that redefine industries.
                        </p>
                    </div>
                </div>
            </section>
            
            <Products />
            <Contact />
        </div>
    )
}

export default ProductsPage
