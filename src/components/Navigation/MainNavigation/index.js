import React from 'react'
import Link from 'next/link'
import {md} from '../../../utils/ResponsiveUtility'
import TranslateHelper from '../../TranslateHelper'
import {NamedRoutes} from '../../../routes'
import {useStyles} from './Styles'

const MainNavigation = ({toggleMobileMenuDrawer}) => {

  const list = [
    {
      key: 1,
      label: TranslateHelper().MainNavigationLinkPlayer,
      link: NamedRoutes.player
    },
    // {
    //   key: 2,
    //   label: TranslateHelper().MainNavigationLinkClubs,
    //   link: NamedRoutes.clubs
    // },
    {
      key: 3,
      label: TranslateHelper().MainNavigationLinkAbout,
      link: NamedRoutes.about
    }
    // {
    //   key: 4,
    //   label: TranslateHelper().MainNavigationLinkBlog,
    //   link: NamedRoutes.blog
    // }
  ]
  const classes = useStyles()
  const [width, setWidth] = React.useState(process.browser ? document.body.clientWidth : '')
  const Mobile = (width < md)

  React.useEffect(() => {
    const getWidth = () => {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [width])

  return (
    <nav className={classes.mainNavigation}>
      {list.map((item, index) => (
        <Link href={item.link} key={item.key}>
          <a onClick={() => !!Mobile ? toggleMobileMenuDrawer(false) : ''}>{item.label}</a>
        </Link>
      ))}
    </nav>
  )
}

export default MainNavigation
