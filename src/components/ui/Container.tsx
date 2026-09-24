import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'footer' | 'nav'
  id?: string
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-6xl section-pad ${className}`}>
      {children}
    </Tag>
  )
}
