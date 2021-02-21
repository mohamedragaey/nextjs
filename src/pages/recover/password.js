import React from 'react'
import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import {password} from '../../utils/pages-meta.json'

const Layout = dynamic(import('../../components/Layout'))
const PasswordPageContent = dynamic(import('../../components/PasswordPageContent'))

const Password = () => {
  return (
    <>
      <NextSeo
        title={password.title}
        description={password.description}
        titleTemplate={'CRED | %s'}
        canonical="https://credinvestments.com/password"
        openGraph={{
          url: 'https://credinvestments.com/',
          title: `${password.title}`,
          description: `${password.description}`,
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
      <Layout children={<PasswordPageContent/>}/>
    </>
  )
}

export default Password
