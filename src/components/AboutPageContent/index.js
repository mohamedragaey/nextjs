import React from 'react'
import dynamic from 'next/dynamic'
import {useStyles} from './Styles'

const Intro = dynamic(import('./Intro'))
const OurFormula = dynamic(import('./OurFormula'))
const OurFocus = dynamic(import('./OurFocus'))
const OurKeyValues = dynamic(import('./OurkeyValues'))
const InterestedInJoining = dynamic(import('../InterestedInJoining'))
const EmbedLeverJobs = dynamic(import('./EmbedLeverJobs'))
const CredTeam = dynamic(import('./CredTeam'))

const AboutPageContent = () => {
  const classes = useStyles()

  return (
    <section className={classes.aboutPageContentWrapper}>
      <Intro/>
      <OurFormula/>
      <OurFocus/>
      <OurKeyValues/>
      <CredTeam/>
      <EmbedLeverJobs/>
      <InterestedInJoining/>
    </section>
  )
}

export default AboutPageContent
