import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
  query={graphql`
      {
        site {
          info: siteMetadata {
            data
            description
            person {
              age
              name
            }
            title
          }
        }
      }
    `}
  render={data => <h4>{data.site.info.description}</h4>}
  />
)

export default ComponentName

