import React from 'react'
import {NavLink} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {NamedRoutes} from '../../../routes'
import {useStyles} from './Styles'

const CompanyNavigation = () => {
  const menu = [
    {
      key: 1,
      label: <FormattedMessage id='CompanyNavigation.link.Blog'/>,
      link: NamedRoutes.blog
    },
    {
      key: 2,
      label: <FormattedMessage id='CompanyNavigation.link.Careers'/>,
      link: NamedRoutes.blog
    },
    {
      key: 3,
      label: <FormattedMessage id='CompanyNavigation.link.Press'/>,
      link: NamedRoutes.blog
    }
  ]
  const classes = useStyles()

  return (
    <nav className={classes.companyNavigation}>
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

export default CompanyNavigation
