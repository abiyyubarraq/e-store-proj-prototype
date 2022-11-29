import React from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Page title="Not Found">
      <div style={{ textAlign: "center" }}>
        <h2>Whoops, we cannot find that page.</h2>
        <p style={{ color: "GrayText" }}>
          You can always visit the <Link to="/">homepage</Link> to get a fresh start.
        </p>
      </div>
    </Page>
  )
}

export default NotFound
