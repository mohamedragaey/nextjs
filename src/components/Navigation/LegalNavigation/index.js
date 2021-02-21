import React from 'react'
import {NavLink} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {NamedRoutes} from '../../../routes'
import {useStyles} from './Styles'

const LegalNavigation = () => {
  const menu = [
    {
      key: 1,
      label: <FormattedMessage id='LegalNavigation.link.Terms'/>,
      link: NamedRoutes.blog
    },
    {
      key: 2,
      label: <FormattedMessage id='LegalNavigation.link.PrivacyPolicy'/>,
      link: NamedRoutes.blog
    },
    {
      key: 3,
      label: <FormattedMessage id='LegalNavigation.link.Contact'/>,
      link: NamedRoutes.blog
    }
  ]
  const classes = useStyles()

  return (
    <nav className={classes.legalNavigation}>
      {menu.map((item, index) => (
        <NavLink
          key={item.key}
          exact
          activeClassName="active"
          to={item.link}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default LegalNavigation
