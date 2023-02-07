import '@/styles/globals.css'
import '../core/sass/main.scss'
import type { AppProps } from 'next/app'
import { createContext, useEffect, useLayoutEffect } from 'react'
import { AtoTheme } from '@/atokit'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function App({ Component, pageProps }: AppProps) {
  //Theme var

  function isObject(objValue: any) {
    return (
      objValue &&
      typeof objValue === 'object' &&
      objValue.constructor === Object
    )
  }
  const themeKit = (theme: any) => {
    let str = ':root{\n'

    const currentTheme = theme[0]
    const keyThemes = Object.keys(currentTheme)

    keyThemes.forEach((rule) => {
      const deeps = Object.keys(currentTheme[`${rule}`])
      deeps.forEach((deep: any) => {
        const value = currentTheme[`${rule}`][`${deep}`]
        // check if had a lastLevel
        if (isObject(value)) {
          const deepsXl = Object.keys(value)

          deepsXl.forEach((deepXl: any) => {
            const sheet = currentTheme[`${rule}`][`${deep}`][`${deepXl}`]
            str += `--ak-${rule}-${deep}${deepXl}: ${sheet};\n`
          })
          console.log('on continue')
        } else {
          //else
          console.log('on écrit')
          str += `-ak-${rule}-${deep}: ${value};\n`
        }
      })
    })

    str += '}'

    console.log(str)
    return str
  }

  useIsomorphicLayoutEffect(() => {
    themeKit(AtoTheme)
  }, [])

  return <Component {...pageProps} />
}
