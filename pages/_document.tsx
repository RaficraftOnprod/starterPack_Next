import { AtoTheme } from '@/atokit'
import { themeKit } from '@/core/engine/atokit'
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <style
          id="atokit"
          dangerouslySetInnerHTML={{ __html: themeKit(AtoTheme) }}
        />
      </body>
    </Html>
  )
}
