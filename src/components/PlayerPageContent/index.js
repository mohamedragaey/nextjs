import React from 'react'
import dynamic from 'next/dynamic'
import {useStyles} from './Styles'

const Banner = dynamic(import('./Banner'))
const ConnectedWithTheBest = dynamic(import('./ConnectedWithTheBest'))
const GetInTouch = dynamic(import('./GetInTouch'))
const TheProblem = dynamic(import('./TheProblem'))
const SuperchargeEarnings = dynamic(import('./SuperchargeEarnings'))
const HowItWorks = dynamic(import('./HowItWorks'))
const WhyCred = dynamic(import('./WhyCred'))
const UpfrontSum = dynamic(import('./UpfrontSum'))
const WeAreOnYourSide = dynamic(import('./WeAreOnYourSide'))
const FCAApprovedAdvisors = dynamic(import('./FCAApprovedAdvisors'))
const WeAreInYourCorner = dynamic(import('./WeAreInYourCorner'))
// const PlayerApproved = dynamic(import('./PlayerApproved'))

const PlayerPageContent = () => {
  const classes = useStyles()
  return (
    <section className={classes.playerPageContentWrapper}>
      <Banner/>
      <ConnectedWithTheBest/>
      <HowItWorks/>
      <TheProblem/>
      <UpfrontSum/>
      <WhyCred/>
      <SuperchargeEarnings/>
      <FCAApprovedAdvisors/>
      <WeAreOnYourSide/>
      <WeAreInYourCorner/>
      {/*<PlayerApproved/>*/}
      <GetInTouch/>
    </section>
  )
}

export default PlayerPageContent
