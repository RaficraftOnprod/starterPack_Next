import Link from 'next/link'
import { PropsWithChildren, FC } from 'react'
import styles from './Navigation.module.scss'

const nav = [
  {
    href: '/',
    text: 'Lien 01',
    nested: {
      href: '/',
      text: 'Lien 01',
    },
  },
]

const Navigation: FC<PropsWithChildren> = () => {
  return <nav></nav>
}

export default Navigation
