import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"

const ComponentName = ({ data }) => {
  const {allContentfulProduct: {nodes:products}} = data

  return (
    <Layout>
      <section>
        {products.map( product => {
          return <article key={product.id}>
            <Image fluid={product.image.fluid}/>
            <h3>{product.title} <span>${product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>More details</Link>
          </article>
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id  
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
