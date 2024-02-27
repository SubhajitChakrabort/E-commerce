import React from 'react'
import Header from '../Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
function Layout({children, title, description, keywords, author}) {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
    <Header/>
    <main style={{minHeight:"70vh"}}>
    <Toaster />
    {children}

    </main>
    <Footer/>
       
        
    </div>
  )
}
Layout.defaultProps = {
    title: "Shopping-Zone - shop now",
    description: "mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "Subhajit",
  };

export default Layout