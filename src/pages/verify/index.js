import React from 'react'
import {NextSeo} from 'next-seo'
import {verify} from '../../utils/pages-meta.json'
import dynamic from 'next/dynamic'

const Layout = dynamic(import('../../components/Layout'))
const VerifyPageContent = dynamic(import('../../components/VerifyPageContent'))

const Verify = () => {
  return (
    <>
      <NextSeo
        title={verify.title}
        description={verify.description}
        titleTemplate={'CRED | %s'}
        canonical="https://credinvestments.com/verify"
        openGraph={{
          url: 'https://credinvestments.com/',
          title: `${verify.title}`,
          description: `${verify.description}`,
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
      <Layout children={<VerifyPageContent/>}/>
    </>
  )
}

export default Verify
