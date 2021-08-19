import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeadTitle from '../../components/HeadTitle';
import { Grid, Container, Avatar} from '@material-ui/core'
import PriceBox from '../components/PriceBox';
import {ReactComponent as Fish} from '../../icons/fish.svg'
import {ReactComponent as Dolphin} from '../../icons/dolphin.svg'
import {ReactComponent as Turtle} from '../../icons/turtle.svg'
import {Bounce, Fade} from 'react-reveal';


const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
	container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: 'white',

  },
	prices: {
		marginBottom: theme.spacing(5)
	},
	priceCard: {
		display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
	},
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		backgroundColor: '#88d8f7',
		position: 'relative',
		top: 40,
		zIndex: 4,
	},
	icon: {
    height: theme.spacing(8),
		zIndex: 5,
  },
})

const Prices = ({classes}) => {
  return (
		<section className={classes.root} id="prices">
			<Container className={classes.container}>
			<HeadTitle title="Choose the best option" classes={classes}/>
			<div className={classes.prices}>
			<Grid container spacing={2}>
          <Grid item xs={12} md={4} className={classes.priceCard}>
						<Bounce bottom delay={500}>
							<Avatar elevation={1} className={classes.avatar}>
								<Turtle className={classes.icon}/>
							</Avatar>
						</Bounce>
							<PriceBox 
								title='Short distance' 
								price='$150' 
								desc1='2 coaching sessions'
								desc2='6 lessons with mentor'
								desc3='8 steps for studying'
								period='each 2 weeks'
								lesson="$25 for lesson"
								elevation={1}
							/>
          </Grid>
          <Grid item xs={12} md={4} className={classes.priceCard}>
						<Bounce bottom delay={500}>
							<Avatar className={classes.avatar}>
								<Fish className={classes.icon}/>
							</Avatar>
						</Bounce>
							<PriceBox 
								title='Long distance' 
								price='$240' 
								desc1='4 coaching sessions'
								desc2='12 lessons with mentor'
								desc3='16 steps for studying'
								period='each 4 weeks'
								lesson="$20 for lesson"
								elevation={9}
							/>
          </Grid>
          <Grid item xs={12} md={4} className={classes.priceCard}>
						<Bounce bottom delay={500}>
							<Avatar className={classes.avatar}>
								<Dolphin className={classes.icon}/>
							</Avatar>
						</Bounce>
							<PriceBox 
								title='Individual' 
								price='$30' 
								desc1='coaching sessions'
								desc2='lessons on demand'
								desc3='material for studying'
								period='each lesson'
								lesson="$30 for lesson"
								elevation={1}
								/>
          </Grid>
        </Grid>
				</div>
			</Container>
		</section>
  )
}

export default withStyles(styles)(Prices)