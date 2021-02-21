import React from 'react'
import {NextSeo} from 'next-seo'
import ClubsPageContent from '../../components/ClubsPageContent'
import {clubs} from '../../utils/pages-meta.json'
import Layout from '../../components/Layout'

const Clubs = () => {
  return (
    <>
      <NextSeo
        title={clubs.title}
        description={clubs.description}
        titleTemplate={'CRED | %s'}
        canonical="https://credinvestments.com/clubs"
        openGraph={{
          url: 'https://credinvestments.com/',
          title: `${clubs.title}`,
          description: `${clubs.description}`,
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
      <Layout children={<ClubsPageContent/>}/>
    </>
  )
}

export default Clubs
