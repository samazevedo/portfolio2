import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Sam Azevedo ',
  description: 'Front-End Web Developer | Designer ',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
