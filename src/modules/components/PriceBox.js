import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from './Typography';
import {Button, Paper} from '@material-ui/core';
import {Fade} from 'react-reveal';

const styles = (theme) => ({
	root: {
			display: 'flex',
			overflow: 'hidden',
		},
		box: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: theme.spacing(0,2),
			borderBottom: '1px dashed orange',
			margin: theme.spacing(1)
		},
		item: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: theme.spacing(6,4,1,4),
			border: '4px solid orange',
			backgroundColor: 'white',
		},
		title: {
			marginBottom: theme.spacing(3)
		},
		button: {
			borderRadius: 5,
			height: '20%',
			margin: theme.spacing(2, 3),
			padding: theme.spacing(2, 5),
			backgroundColor: '#88d8f7',
			"&:hover": {
					backgroundColor: 'orange',
					color: 'black',
			}
		},
		price:{
			padding: theme.spacing(1, 3),
			fontSize: theme.typography.pxToRem(50)
		},
		shell: {
			width: theme.spacing(4),
			height: theme.spacing(4),
		}
})

const PriceBox = ({title, price, desc1, desc2, desc3, classes, period, elevation, lesson}) => {
  return (
		<Paper elevation={elevation} className={classes.root}>
			<div className={classes.item}>
			<Typography variant="h6" component="span" className={classes.title}>
				{title}
			</Typography>
				<div className={classes.box}>
					<p>{desc1}</p>
				</div>
				<div className={classes.box}>
					<p>{desc2}</p>
				</div>
				<div className={classes.box}>
					<p>{desc3}</p>
				</div>
				<Fade delay={1000}>
				<Typography variant="h4" component="span" className={classes.price}>
					{price}
				</Typography>
				<Typography variant="h6" component="span">{period}</Typography>
				<Typography component="span">{lesson}</Typography>
				</Fade>
				{/* <Fade delay={2000}>
				<Button className={classes.button}>
          <Typography variant="h6" component="span" >
            Buy now
          </Typography>
        </Button>
				</Fade> */}
			</div>	
		</Paper>
	)
}

export default withStyles(styles)(PriceBox)