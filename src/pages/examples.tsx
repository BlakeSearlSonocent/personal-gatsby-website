import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {site: {info: {person: {name}}}} = data

  return (
    <Layout>
      <div>
        <p>Examples page</p>
        <Header/>
        <HeaderStatic/>
        <h5>{name}</h5>
      </div>
    </Layout>
  )
}

export const data = graphql `
query {
  site {
    info:siteMetadata {
      data
      description
      person {
        age
        name
      }
      title
    }
  }
}`

export default examples
