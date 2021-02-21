import React from 'react'
import {useStyles} from './Styles'

const AdvisorItem = ({order, list, advisor, featured}) => {
  const classes = useStyles()

  return (
    <>
      {!!featured ?
        <div className={classes.advisorItemRow}>
          <section className={classes.advisorItemWrapper}>
            <span className={classes.advisorItemOrder}>{order}</span>
            <ul className={classes.advisorItemList}>
              {list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
            <span className={`${classes.advisorItemTitle} ${!!featured ? 'featured' : ''}`}>{advisor}</span>
          </section>
        </div> :
        <section className={classes.advisorItemWrapper}>
          <span className={classes.advisorItemOrder}>{order}</span>
          <ul className={classes.advisorItemList}>
            {list.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
          <span className={`${classes.advisorItemTitle} ${!!featured ? 'featured' : ''}`}>{advisor}</span>
        </section>
      }
    </>
  )
}

export default AdvisorItem
