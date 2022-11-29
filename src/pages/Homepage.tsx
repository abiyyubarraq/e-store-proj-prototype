import React from "react"
import Dir from "../components/Dir"
import "../styles/homepage.scss"
import Page from "../components/Page"

function Homepage() {
  return (
    <Page title={"Home"}>
      <div className="homepage">
        <Dir></Dir>
      </div>
    </Page>
  )
}

export default Homepage
