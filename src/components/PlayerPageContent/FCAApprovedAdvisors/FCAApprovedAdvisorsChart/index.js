import React from 'react'
import {useStyles} from './Styles'
import AdvisorItem from './Item'
import {ListingConsumer} from '../../../../ListingContext'

const FCAApprovedAdvisorsChart = () => {
  const classes = useStyles()

  return (
    <section className={classes.fCAApprovedAdvisorsChartWrapper}>
      <ListingConsumer>
        {({AdvisorsList}) => (
          AdvisorsList.map((item) => (
            <AdvisorItem
              key={item.id}
              featured={item.featured}
              list={item.list}
              order={item.order}
              advisor={item.title}
            />
          ))
        )}
      </ListingConsumer>
    </section>
  )
}

export default FCAApprovedAdvisorsChart
