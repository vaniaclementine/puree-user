import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps }}) {
  <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
}