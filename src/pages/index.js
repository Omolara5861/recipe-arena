import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
       <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
  </Layout>
  )
}
