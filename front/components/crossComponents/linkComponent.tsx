import React from 'react'
import Link from 'next/link'

type LinkComponentProps = {
  href: string
  children?: (JSX.Element | string)[] | (JSX.Element | string)
}

export const LinkComponent: React.FC<LinkComponentProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}