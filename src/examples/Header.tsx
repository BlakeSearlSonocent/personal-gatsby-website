import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
{
  site {
    siteMetadata {
      title
      author
      data
      description
      person {
        age
        name
      }
    }
  }
}
`

const Header = () => {
  const { site: {siteMetadata: {title, author}} } = useStaticQuery(getData)
  return (
    <div>
      <h2>{title}</h2>
      <h2>{author}</h2>
    </div>
  )
}

export default Header
