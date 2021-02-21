import './../utils/fonts.css'
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import {GraphQLClient, ClientContext} from 'graphql-hooks'

export default function MyApp (props) {
  const {Component, pageProps} = props
  const isBrowser = () => typeof window !== 'undefined'
  const client = new GraphQLClient({
    url: process.env.API_URL
  })

  return (
    <React.Fragment>
      <ClientContext.Provider value={client}>
        <Head>
          <title>Cred Investment</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content="CRED securities income streams of professional athletes and entertainers"/>
          <meta name="copyright" content="Copyright CRED Investments 2021"/>
          <meta name="keywords"
                content="Athlete, Actor, Actress, Movie, Musician, Soccer, Football, EPL, Talent, Invest, Investment, Alternative, Fund, Institutional"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/android-chrome-96x96.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="shortcut icon" href="/favicon/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/mstile-150x150.png"/>
          <meta name="theme-color" content="#ffffff"/>
          {/*<link rel="preload" href="/fonts/basier_circlebold/basiercircle-bold-webfont.ttf" as="font" crossOrigin=""/>*/}
          {/*<link rel="preload" href="/fonts/basier_circlebold/basiercircle-bold-webfont.woff2" as="font" crossOrigin=""/>*/}
          {/*<link rel="preload" href="/fonts/basiercircle-regular/basiercircle-regular-webfont.ttf" as="font"*/}
          {/*      crossOrigin=""/>*/}
          <link rel="preload" href="/fonts/basiercircle-regular/basiercircle-regular-webfont.woff2" as="font"
                crossOrigin=""/>
          <link rel="preconnect" href="https://widget.intercom.io"/>
          <link rel="preconnect" href="https://js.intercomcdn.com"/>
          <script>{isBrowser() ? window.intercomSettings = {app_id: 'weo49oif'} : ''}</script>
          <script>{
            isBrowser() ? (function () {
              let w = window
              let ic = w.Intercom
              if (typeof ic === 'function') {
                ic('reattach_activator')
                ic('update', w.intercomSettings)
              } else {
                let d = document
                let i = function () {i.c(arguments)}
                i.q = []
                i.c = function (args) {i.q.push(args)}
                w.Intercom = i
                let l = function () {
                  let s = d.createElement('script')
                  s.type = 'text/javascript'
                  s.async = true
                  s.src = 'https://widget.intercom.io/widget/weo49oif'
                  let x = d.getElementsByTagName('script')[0]
                  x.parentNode.insertBefore(s, x)
                }
                if (w.attachEvent) {
                  w.attachEvent('onload', l)
                } else {
                  w.addEventListener('load', l, false)
                }
              }
            })() : ''}</script>
        </Head>
        <Component {...pageProps} />
      </ClientContext.Provider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
