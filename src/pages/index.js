import React from 'react'
import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import {player} from './../utils/pages-meta.json'

const Layout = dynamic(import('../components/Layout'))
const PlayerPageContent = dynamic(import('../components/PlayerPageContent'))

const Player = () => {
  return (
    <>
      <NextSeo
        title={player.title}
        description={player.description}
        titleTemplate={'CRED | Investing in Sports and Entertainment'}
        canonical="https://credinvestments.com/"
        openGraph={{
          url: 'https://credinvestments.com/',
          title: `${player.title}`,
          description: `${player.description}`,
          images: [
            {
              url: 'https://credinvestments.com/banner.jpg',
              width: 512,
              height: 512,
              alt: 'Og Image Alt'
            },
            {url: 'https://credinvestments.com/banner.jpg'},
            {url: 'https://credinvestments.com/banner.jpg'}
          ],
          site_name: 'Cred Investments'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <Layout children={<PlayerPageContent/>}/>
    </>
  )
}

export default Player
