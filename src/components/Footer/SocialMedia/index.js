import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import InstagramIcon from '@material-ui/icons/Instagram'
// import FacebookIcon from '@material-ui/icons/Facebook'
// import TwitterIcon from '@material-ui/icons/Twitter'
// import YouTubeIcon from '@material-ui/icons/YouTube'
import {useStyles} from './Styles'

const SocialMedia = () => {
  const classes = useStyles()

  return (
    <section className={classes.socialMediaWrapper}>
      <a href='https://www.linkedin.com/company/cred-investments' aria-label="CRED Linkedin" rel="noreferrer" target='_blank'><LinkedInIcon/></a>
      {/*<a href='https://facebook.com' rel="noreferrer" target='_blank'><InstagramIcon/></a>*/}
      {/*<a href='https://facebook.com' rel="noreferrer" target='_blank'><FacebookIcon/></a>*/}
      {/*<a href='https://facebook.com' rel="noreferrer" target='_blank'><TwitterIcon/></a>*/}
      {/*<a href='https://facebook.com' rel="noreferrer" target='_blank'><YouTubeIcon/></a>*/}
    </section>
  )
}
export default SocialMedia
