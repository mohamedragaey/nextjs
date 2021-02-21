import React from 'react'
import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import {privacyPolicy} from '../../utils/pages-meta.json'

const Layout = dynamic(import('../../components/Layout'))
const PrivacyPolicyPageContent = dynamic(import('../../components/PrivacyPolicyPageContent'))

const PrivacyPolicy = () => {
  return (
    <>
      <NextSeo
        title={privacyPolicy.title}
        description={privacyPolicy.description}
        titleTemplate={'CRED | %s'}
        canonical="https://credinvestments.com/privacy-policy"
        openGraph={{
          url: 'https://credinvestments.com',
          title: `${privacyPolicy.title}`,
          description: `${privacyPolicy.description}`,
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
      <Layout children={<PrivacyPolicyPageContent/>}/>
    </>
  )
}

export default PrivacyPolicy
