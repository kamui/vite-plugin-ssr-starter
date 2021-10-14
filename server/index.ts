/* eslint-disable no-console */
import express from "express"
import { createPageRenderer } from "vite-plugin-ssr"
import cluster, { Worker } from "cluster"

const isProduction = process.env.NODE_ENV === "production"
const root = `${__dirname}/..`

if (cluster.isPrimary) {
  const workerCount = process.env.WEB_CONCURRENCY ? parseInt(process.env.WEB_CONCURRENCY, 10) : 1
  // create a worker for each CPU
  console.log(`forking ${workerCount} workers...`)

  for (let i = 0; i < workerCount; i += 1) {
    cluster.fork()
  }

  // When a worker dies create another one
  cluster.on("exit", (worker: Worker) => {
    console.log(`worker ${worker.id} exited, respawning...`)
    cluster.fork()
  })
} else {
  startServer()
}

async function startServer() {
  const app = express()

  let viteDevServer
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const vite = require("vite")
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
    app.use(viteDevServer.middlewares)
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root })
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl
    const pageContextInit = {
      url,
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) {
      return next()
    }
    res.status(httpResponse.statusCode).send(httpResponse.body)
  })

  const port = process.env.PORT || "3000"
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
