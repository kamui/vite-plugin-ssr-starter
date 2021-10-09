// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere

import React, { useContext } from "react"
import type { PageContext } from "./types"

export { PageContextProvider }
export { usePageContext }

const Context = React.createContext<PageContext>(undefined as any)

const PageContextProvider: React.FC<{ pageContext: PageContext; children: React.ReactNode }> = ({
  pageContext,
  children,
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext(): PageContext {
  const pageContext = useContext(Context)
  return pageContext
}
