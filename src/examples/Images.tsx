import React from "react"
// @ts-ignore
import img from "../images/image1.jpeg"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
{
  fixed:file(relativePath:{eq:"image2.jpeg"}) {
    childImageSharp{
      fixed(width:200,grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  
  fluid:file(relativePath:{eq:"image3.jpeg"}) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="blah"/>
      </article>
      <article className="single-image">
        <h3>fixed image blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
      </article>
      <article className="single-image">
        <h3>fluid image</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}/>
      </article>
    </section>
  )
}


export default Images