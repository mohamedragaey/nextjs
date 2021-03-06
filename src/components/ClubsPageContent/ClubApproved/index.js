import React from 'react'
import Slider from 'react-slick'
import {Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {ClubApprovedList} from '../../../utils/Data/ClubApprovedList'
import Image from '../../Image'

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

const ClubApproved = () => {
  let classes = useStyles()

  return (
    <section className={classes.ClubApprovedSliderWrapper}>
      <Container maxWidth="xl">
        <Slider {...settings} className={classes.ClubApprovedSlider}>
          {ClubApprovedList.map((item) =>
            <Grid container justify='center' alignItems='center' key={item.id}
                  className={classes.ClubApprovedSliderContentWrapper}>
              <Grid item xs={12} md={4} lg={5} className={classes.ClubApprovedSliderContent}>
                <h5 className={classes.ClubApprovedSliderItemTitle}>{item.title}</h5>
                <p className={classes.ClubApprovedSliderItemQuote}>{item.quote}</p>
                <span className={classes.ClubApprovedSliderItemName}>{item.name}</span>
              </Grid>
              <Grid item xs={12} md={4} lg={5} className={classes.ClubApprovedSliderImageWrapper}>
                <Image src={item.img} alt={item.title}/>
              </Grid>
            </Grid>
          )}
        </Slider>
      </Container>
    </section>
  )
}

export default ClubApproved
