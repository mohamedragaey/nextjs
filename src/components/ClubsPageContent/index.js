import React from 'react'
import dynamic from 'next/dynamic'
import {useStyles} from './Styles'

const ClubsBanner = dynamic(import('./Banner'))
const LinkedWithTheBest = dynamic(import('./LinkedWithTheBest'))
const ClubsHowItWorks = dynamic(import('./HowItWorks'))
const WeAreOnYourSide = dynamic(import('./weAreOnYourSide'))
const ClubApproved = dynamic(import('./ClubApproved'))
const InterestedInJoining = dynamic(import('../InterestedInJoining'))

const ClubsPageContent = () => {
  const classes = useStyles()
  return (
    <section className={classes.clubsPageContentWrapper}>
      <ClubsBanner/>
      <LinkedWithTheBest/>
      <ClubsHowItWorks/>
      <WeAreOnYourSide/>
      <ClubApproved/>
      <InterestedInJoining/>
    </section>
  )
}

export default ClubsPageContent
