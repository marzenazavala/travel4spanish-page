import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '../modules/components/Button';
import {Fade, Flip} from 'react-reveal';
import {Link} from 'react-scroll'
import image1 from '../img/8_steps.png';
import image2 from '../img/8_s_1.png';
import image3 from '../img/8_s_2.png';
import image5 from '../img/8_s_4.png';
import steps1 from '../img/feet1.png';
import steps2 from '../img/feet2.png';
import orange from '../img/orange.png';
import white from '../img/white.png';
import blue from '../img/blue.png';
import Typography from '../modules/components/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
			marginTop: theme.spacing(5)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
		margin: {
			marginTop: theme.spacing(8)

		},
		image: {
			width: '100%'
		},
		steps: {
			backgroundColor: 'white',
			color: 'black',
			width: '100%',
			padding: theme.spacing(0),
    	border: '3px dashed black',
			fontSize: '1rem',
		},
		mentor: {
			backgroundColor: 'orange',
			color: 'black',
			width: '100%',
			padding: theme.spacing(0),
    	border: '3px dashed black',
			fontSize: '1rem',
		},
		feet: {
			width: '12%',
		},
		feetMid: {
			width: '12%',
		},
		prize: {
			backgroundColor: '#88d8f7',
			color: 'black',
			width: '100%',
			padding: theme.spacing(1,0),
    	border: '3px dashed black',
			fontSize: '1rem'
		},
		title:{
			fontSize: '2rem',
			weight: 'bold'
		},
		button: {
			minWidth: 200,
			backgroundColor: '#ac85c7',
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(0),
			padding: theme.spacing(2),
			border: '4px solid orange',
			'&:hover': {
				backgroundColor: "orange",
				border: '4px solid #ac85c7',
			},
		},
  }));

const EightSteps = () => {
  const classes = useStyles();
  return(
    <div id="top" className={classes.root}>
      <Container maxWidth="false">
        <p className={classes.title}>8 Steps Method</p>
				<Grid container spacing={6}>
					<Grid item xs={12} sm={4}>
						<img src={blue} alt="blue color"/>
						<h3>2 sessions with coach</h3>
					</Grid>
					<Grid item xs={12} sm={4}>
						<img src={orange} alt="orange color"/>
						<h3>6 sessions with mentor</h3>
					</Grid>
					<Grid item xs={12} sm={4}>
						<img src={white} alt="white color"/>
						<h3>8 steps with study material</h3>
					</Grid>
				</Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img alt="travel4spanish"className={classes.image} src={image5}/>
          </Grid>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={4} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.prize}>
									<h2>Start your Spanish Mile</h2>
									<h3>Goals session with language couch</h3>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 1</h3>
									<p>Lesson online with your mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 2</h3>
									<p>Practice material from Step 1</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 3</h3>
									<p>Practice tasks from Step 2</p>
								</Paper>
							</Fade>
							</Grid>
						</Grid>
          </Grid>
					<Grid item xs={12} sm={12}>
						<img alt="travel4spanish" className={classes.feetMid} src={steps2}/>
					</Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={4} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade left>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 4</h3>
									<p>Book lesson & practice tasks from Step 3</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade left>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 5</h3>
									<p>Practice material with your mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade left>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 6</h3>
									<p>Practice tasks from Step 4</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade left>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 7</h3>
									<p>Practice material from Step 4 with your mentor</p>
								</Paper>
								</Fade>
							</Grid>
						</Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
						<img alt="travel4spanish" className={classes.image} src={image2}/>
          </Grid>
					<Grid item xs={12} sm={12}>
						<img alt="travel4spanish"  className={classes.feetMid} src={steps1}/>
					</Grid>
          <Grid item xs={12} sm={6}>
						<img alt="travel4spanish" className={classes.image} src={image3}/>
          </Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={4} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 8</h3>
									<p>Practice material from Step 5</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 9</h3>
									<p>Practice tasks from Step 6</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 10</h3>
									<p>Practice tasks from Step 5 and 6 with mentor</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade right>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 11</h3>
									<p>Practice tasks from Step 7</p>
								</Paper>
							</Fade>
							</Grid>
						</Grid>
          </Grid>
					<Grid item xs={12} sm={12}>
						<img alt="travel4spanish" className={classes.feetMid} src={steps2}/>
					</Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={4} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade left>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 12</h3>
									<p>Practice material from Step 7 with mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade left>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 13</h3>
									<p>Practice material from Step 8</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade left>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 14</h3>
									<p>Practice tasks from Step 8 with mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade left>
            		<Paper elevation={0} className={classes.prize}>
									<h2>Congratulations!!! You finished your Mile</h2>
									<h3>Take your Prize and set next goals/retro session</h3>
								</Paper>
							</Fade>
          		</Grid>  
						</Grid>
          </Grid>
					<Grid item xs={12} sm={6}>
						<img alt="travel4spanish" className={classes.image} src={image1}/>
          </Grid>
					<Grid item xs={12} sm={12}>
					<Flip bottom>
						<Button
							size="large"
							className={classes.button}
							component="a"
							href="https://travel4spanish.setmore.com/"
						>
							<Typography variant="h4" component="span" >
							Book Goals Session Here
							</Typography>
						</Button>
					</Flip>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Link to="top" spy={true} smooth={true} >
							<img alt="travel4spanish" className={classes.feetMid} src={steps1}/>
						</Link>
					</Grid>
        </Grid>
				
      </Container>
    </div>
    )
}

export default EightSteps