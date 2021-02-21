import React from 'react'
import {useStyles} from './Styles'
import LazyImage from '../../../LazyImage'

const TeamMember = ({image, title, jobTitle, icons, iconTitles}) => {
  const classes = useStyles()

  return (
    <div className={classes.teamMemberWrapper}>
      <LazyImage src={image} alt={'Icon'} tooltipTitle={title} width={200} height={200}
                 className={classes.teamMemberImage}/>
      <h3 className={classes.teamMemberTitle}>{title}</h3>
      <p className={classes.teamMemberDescription}>{jobTitle}</p>
      <div className={classes.teamMemberIcons}>
        {icons.map((icon, index) => (
          <LazyImage src={icon} alt={icon} tooltipTitle={iconTitles[index]} key={index} width={50} height={50}/>
        ))}
      </div>
    </div>
  )
}

export default TeamMember
