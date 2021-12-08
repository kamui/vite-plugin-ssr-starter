import react from "@vitejs/plugin-react"
import ssr from "vite-plugin-ssr/plugin"
import { UserConfig } from "vite"
import path from "path"

const nodeEnv = process.env.NODE_ENV || ""

const config: UserConfig = {
  plugins: [
    react({
      fastRefresh: !["test", "production"].includes(nodeEnv),
    }),
    ssr(),
  ],
  resolve: {
    alias: {
      "#app": path.resolve(__dirname, "."),
    },
  },
}

export default config
