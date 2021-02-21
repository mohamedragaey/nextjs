import React from 'react'
import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import {about} from '../../utils/pages-meta.json'

const Layout = dynamic(import('../../components/Layout'))
const AboutPageContent = dynamic(import('../../components/AboutPageContent'))

const About = () => {
  return (
    <>
      <NextSeo
        title={about.title}
        description={about.description}
        titleTemplate={'CRED | %s'}
        canonical="https://credinvestments.com/about"
        openGraph={{
          url: 'https://credinvestments.com',
          title: `${about.title}`,
          description: `${about.description}`,
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
      <Layout children={<AboutPageContent/>}/>
    </>
  )
}

export default About
