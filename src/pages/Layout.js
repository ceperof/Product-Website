import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>{children}</div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
