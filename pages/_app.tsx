import React from 'react'
import { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { AuthProvider } from '../contexts/auth'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

export default MyApp
