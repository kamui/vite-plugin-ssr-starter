import React from "react"
import classes from "./index.module.css"

const Page: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <p className={classes.content}>A colored page.</p>
    </>
  )
}

export default Page
