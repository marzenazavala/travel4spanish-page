import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '../modules/components/Button';
import {Fade, Flip, Zoom} from 'react-reveal';
import {Link} from 'react-scroll'
import image1 from '../img/8_s_4.png';
import image2 from '../img/8_s_1.png';
import image3 from '../img/8_s_2.png';
import image4 from '../img/8_s_5.png';
import orange from '../img/orange.png';
import white from '../img/white.png';
import blue from '../img/blue.png';
import Typography from '../modules/components/Typography';
import HeadTitle from '../components/HeadTitle';
import {ReactComponent as Fish} from '../icons/shellfish.svg'
import {ReactComponent as Pavilion} from '../icons/pavilion.svg'
import {ReactComponent as Surf} from '../icons/surf-board.svg'
import {ReactComponent as Pineapple} from '../icons/pineapple.svg'
import backgroundImage from '../img/beach.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
		marginTop: theme.spacing(5)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
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
    		border: '1px dashed black',
			fontSize: '1rem',
		},
		mentor: {
			backgroundColor: 'orange',
			color: 'black',
			width: '100%',
			padding: theme.spacing(0),
    		border: '1px dashed black',
			fontSize: '1rem',
		},
		feet: {
			width: '5%',
		},
		feetMid: {
			width: '12%',
		},
		prize: {
			backgroundColor: '#88d8f7',
			color: 'black',
			width: '100%',
			padding: theme.spacing(1,0),
    		border: '1px dashed black',
			fontSize: '1rem'
		},
		button: {
			border: '4px solid orange',
			borderRadius: 5,
			height: '20%',
			margin: theme.spacing(1),
			padding: theme.spacing(2),
			backgroundColor: '#88d8f7',
			color: 'black',
			"&:hover": {
				border: '4px solid #88d8f7',
				backgroundColor: 'orange',
				color: 'black'
			}
		  },
		  button2: {
			minWidth: 200,
			backgroundColor: 'orange',
			marginTop: theme.spacing(0),
			marginBottom: theme.spacing(2),
			border: '3px solid black',
			'&:hover': {
			  backgroundColor: "orange",
			  position: 'relative',
			  top: -2
			},
		  },
		  legend: {
			  marginTop: theme.spacing(4),
			  marginBottom: theme.spacing(4)
		  },
		  icon: {
			height: theme.spacing(7),
			marginBottom: theme.spacing(2)
		  },
		  copy: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			// backgroundImage: `url(${backgroundImage})`,
			// backgroundPosition: 'center',
			// backgroundRepeat: 'no-repeat',
			// minHeight: '200px',
			// backgroundAttachment: 'fixed',
			// backgroundSize: 'cover',
		  }
  }));

const EightSteps = () => {
  const classes = useStyles();
  return(
    <div id="top" className={classes.root}>
      <Container maxWidth="false">
		  <HeadTitle classes={classes} title="Learn with 8 Steps Method"/>
				<Grid container className={classes.legend}>
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
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
		  	<Zoom>
            	<img alt="travel4spanish"className={classes.image} src={image1}/>
			</Zoom>
          </Grid>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={5} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.prize}>
								<Typography variant="h6" component="span">Start your Spanish mile</Typography>
									<p>Goals session with language couch</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.mentor}>
								<Typography variant="h6" component="span">Day 1</Typography>
									<p>Lesson online with your mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 2</Typography>
									<p>Practice material from Step 1</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 3</Typography>
									<p>Practice tasks from Step 2</p>
								</Paper>
							</Fade>
							</Grid>
							
						</Grid>
						{/* <Typography variant="h5" component="span">Something to tell</Typography> */}
          </Grid>
					<Grid item xs={12} sm={12} className={classes.copy}>
						<Fade left>
							<Fish className={classes.icon}/>
							<Typography variant="h2" component="span">Spend your learning time with fun</Typography>
						</Fade>
					</Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={5} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 4</Typography>
									<p>Book lesson & practice tasks from Step 3</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.mentor}>
								<Typography variant="h6" component="span">Day 5</Typography>
									<p>Practice material with your mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 6</Typography>
									<p>Practice tasks from Step 4</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.mentor}>
								<Typography variant="h6" component="span">Day 7</Typography>
									<p>Practice material from Step 4 with your mentor</p>
								</Paper>
								</Fade>
							</Grid>
						</Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
		  <Zoom>
						<img alt="travel4spanish" className={classes.image} src={image2}/>
						</Zoom>
          </Grid>
		  			<Grid item xs={12} sm={12}>
		  				<Zoom>
							<Pineapple className={classes.icon}/>
						</Zoom>
					</Grid>
          <Grid item xs={12} sm={6}>
		  			<Zoom>
						<img alt="travel4spanish" className={classes.image} src={image3}/>
					</Zoom>
          </Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={5} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 8</Typography>
									<p>Practice material from Step 5</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 9</Typography>
									<p>Practice tasks from Step 6</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.mentor}>
								<Typography variant="h6" component="span">Day 10</Typography>
									<p>Practice tasks from Step 5 and 6 with mentor</p>
								</Paper>
								</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 11</Typography>
									<p>Practice tasks from Step 7</p>
								</Paper>
							</Fade>
							</Grid>
						</Grid>
          </Grid>
		  			<Grid item xs={12} sm={12} className={classes.copy}>
						<Fade right>
							<Surf className={classes.icon}/>
							<Typography variant="h2" component="span">Each step brings more Spanish skills</Typography>
						</Fade>
					</Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={5} className={classes.margin}>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.mentor}>
								<Typography variant="h6" component="span">Day 12</Typography>
									<p>Practice material from Step 7 with mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.steps}>
								<Typography variant="h6" component="span">Day 13</Typography>
									<p>Practice material from Step 8</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
								<Paper elevation={0} className={classes.mentor}>
								<Typography variant="h6" component="span">Day 14</Typography>
									<p>Practice tasks from Step 8 with mentor</p>
								</Paper>
							</Fade>
							</Grid>
							<Grid item xs={12} sm={12}>
							<Fade bottom delay={500}>
            		<Paper elevation={0} className={classes.prize}>
						<Typography variant="h6" component="span">Congratulations!!! You finished your Mile</Typography>
						<p>Take your Prize and set next goals/retro session</p>
								</Paper>
							</Fade>
							
          			</Grid>  
				</Grid>
          </Grid>
					<Grid item xs={12} sm={6}>
						<Zoom>
						<img alt="travel4spanish" className={classes.image} src={image4}/>
						</Zoom>
          </Grid>
					<Grid item xs={12} sm={12}>
					<Flip bottom delay={1000}>
						<Button
							size="large"
							className={classes.button2}
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
							<Pavilion className={classes.icon}/>
						</Link>
					</Grid>
        </Grid>
				
      </Container>
    </div>
    )
}

export default EightSteps