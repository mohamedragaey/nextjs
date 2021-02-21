import React from 'react'
import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import {verifyTalent} from '../../utils/pages-meta.json'

const Layout = dynamic(import('../../components/Layout'))
const VerifyTalentPageContent = dynamic(import('../../components/VerifyTalentPageContent'))

const VerifyTalent = () => {
  return (
    <>
      <NextSeo
        title={verifyTalent.title}
        description={verifyTalent.description}
        titleTemplate={'CRED | %s'}
        canonical="https://credinvestments.com/verify-talent"
        openGraph={{
          url: 'https://credinvestments.com/',
          title: `${verifyTalent.title}`,
          description: `${verifyTalent.description}`,
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
      <Layout children={<VerifyTalentPageContent/>}/>
    </>
  )
}

export default VerifyTalent
