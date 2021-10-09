import React, { forwardRef, Ref } from "react"
import { usePageContext } from "./usePageContext"

interface LinkProps {
  children: React.ReactNode
  className?: string
  href?: string
  [prop: string]: unknown
}

const Link = forwardRef((props: LinkProps, ref: Ref<HTMLAnchorElement>) => {
  const { children, className, href, ...rest } = props

  const pageContext = usePageContext()
  const newClassName = [className, pageContext.urlPathname === href && "is-active"].filter(Boolean).join(" ")

  return (
    <a {...rest} className={newClassName} href={href} ref={ref}>
      {children}
    </a>
  )
})

Link.displayName = "Link"

export default Link
