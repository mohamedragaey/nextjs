import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {ListingConsumer} from '../../../ListingContext'
import TranslateHelper from '../../TranslateHelper'
import TeamMember from './TeamMember'
import {useStyles} from './Styles'

const CredTeam = () => {
  const classes = useStyles()

  return (
    <section className={classes.credTeamWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={12}>
                <h6 className={classes.credTeamTitleHint}>{TranslateHelper().CredTeamHint}</h6>
                <h2 className={classes.credTeamTitle}>
                  {TranslateHelper().CredTeamTitle}
                </h2>
                <p className={classes.credTeamDescription}>
                  {TranslateHelper().CredTeamDescription}
                </p>
              </Grid>
              <Grid item xs={12} md={12} className={classes.credTeamListWrapper}>
                <ListingConsumer>
                  {({CredTeamList}) => (
                    CredTeamList.map((member) => (
                      <TeamMember
                        key={member.id}
                        image={member.image}
                        icons={member.icons}
                        title={member.title}
                        jobTitle={member.jobTitle}
                        iconTitles={member.iconTitles}
                      />
                    ))
                  )}
                </ListingConsumer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CredTeam
