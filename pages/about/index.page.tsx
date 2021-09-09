import React from "react";
import classes from "./index.module.css";

export { Page };

function Page() {
  return (
    <>
      <h1>About</h1>
      <p className={classes.content}>A colored page.</p>
    </>
  );
}
