import reactRefresh from "@vitejs/plugin-react-refresh";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import path from "path";

const config: UserConfig = {
  plugins: [reactRefresh(), ssr()],
  resolve: {
    alias: [{
      find: "@",
      replacement: path.resolve(__dirname, ".")
    }]
  }
};

export default config;
