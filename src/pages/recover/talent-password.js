import React from 'react'
import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import {talentPassword} from '../../utils/pages-meta.json'

const Layout = dynamic(import('../../components/Layout'))
const TalentPasswordPageContent = dynamic(import('../../components/TalentPasswordPageContent'))

const TalentPassword = () => {
  return (
    <>
      <NextSeo
        title={talentPassword.title}
        description={talentPassword.description}
        titleTemplate={'CRED | %s'}
        canonical="https://credinvestments.com/talent-password"
        openGraph={{
          url: 'https://credinvestments.com/',
          title: `${talentPassword.title}`,
          description: `${talentPassword.description}`,
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
      <Layout children={<TalentPasswordPageContent/>}/>
    </>
  )
}

export default TalentPassword
