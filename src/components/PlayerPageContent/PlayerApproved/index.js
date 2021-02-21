import React from 'react'
import Slider from 'react-slick'
import {Container, Grid} from '@material-ui/core'
import LazyImage from './../../LazyImage'
import {useStyles} from './Styles'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {PlayerApprovedList} from '../../../utils/Data/PlayerApprovedList'

const settings = {
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  initialSlide: 1,
  arrows: true,
  dots: false,
  buttons: true,
  responsive: [
    {
      breakpoint: 959,
      settings: {
        buttons: false,
        arrows: false
      }
    }
  ],
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
}

function NextArrow (props) {
  const {className, onClick} = props
  return (<ArrowForwardIos className={className} onClick={onClick}/>)
}

function PrevArrow (props) {
  const {className, onClick} = props
  return (<ArrowBackIosIcon className={className} onClick={onClick}/>)
}

const PlayerApproved = () => {
  let classes = useStyles()

  return (
    <section className={classes.PlayerApprovedSliderWrapper}>
      <Container maxWidth="lg">
        <Slider {...settings} className={classes.PlayerApprovedSlider}>
          {PlayerApprovedList.map((item) =>
            <Grid container justify='center' alignItems='center' key={item.id}
                  className={classes.PlayerApprovedSliderContent}>
              <Grid item xs={12} md={4} lg={5}>
                <h5 className={classes.PlayerApprovedSliderItemTitle}>{item.title}</h5>
                <p className={classes.PlayerApprovedSliderItemQuote}>{item.quote}</p>
                <span className={classes.PlayerApprovedSliderItemName}>{item.name}</span>
              </Grid>
              <Grid item xs={12} md={4} lg={5}>
                <LazyImage src={item.img} alt={item.title} tooltipTitle={item.name}/>
              </Grid>
            </Grid>
          )}
        </Slider>
      </Container>
    </section>
  )
}

export default PlayerApproved
