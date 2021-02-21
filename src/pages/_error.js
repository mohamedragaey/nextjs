import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(import('../components/Layout'))
const NotFound = dynamic(import('../components/NotFound'))

const NoMatch = () => {
  return (
    <Layout children={<NotFound/>}/>
  )
}

export default NoMatch
