import React from 'react'

import Header from './header'
import Footer from './footer'
import layoutStyles from './pageLayout.module.scss'
import { Helmet } from "react-helmet"

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://ngkevin.com" />
            </Helmet>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout