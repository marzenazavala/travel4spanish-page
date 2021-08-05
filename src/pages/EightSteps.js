import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image1 from '../img/8_steps.png';
import image2 from '../img/8_s_1.png';
import image3 from '../img/8_s_2.png';
import image4 from '../img/8_s_3.png';
import image5 from '../img/8_s_4.png';
import steps1 from '../img/feet1.png';
import steps2 from '../img/feet2.png';

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
    	border: '2px dashed black',
			fontSize: '1rem',
			// '&:hover': {
			// 	backgroundColor: 'orange',
			// 	border: '2px dashed black',
			// }
		},
		mentor: {
			backgroundColor: 'orange',
			color: 'black',
			width: '100%',
			padding: theme.spacing(0),
    	border: '2px dashed black',
			fontSize: '1rem',
			// '&:hover': {
			// 	backgroundColor: 'white',
			// 	border: '2px dashed orange',
			// }
		},
		feet: {
			width: '12%',
		},
		feetMid: {
			width: '12%',
		},
		prize: {
			backgroundColor: 'black',
			color: 'orange',
			width: '100%',
			padding: theme.spacing(3),
    	border: '2px dashed orange',
			// '&:hover': {
			// 	backgroundColor: 'white',
			// 	border: '2px dashed black',
			// }
		},
  }));

const EightSteps = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Container maxWidth="false">
        <h1>8 Steps Method</h1>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <img alt="travel4spanish"className={classes.image} src={image5}/>
          </Grid>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={1} className={classes.margin}>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 0</h3>
									<p>Goals session with your mentor</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 1</h3>
									<p>Book lesson & practice tasks from Step 1</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 2</h3>
									<p>Practice material from Step 2</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<img alt="travel4spanish" className={classes.feet} src={steps1}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 3</h3>
									<p>Lesson online with your mentor</p>
								</Paper>
							</Grid>
						</Grid>
          </Grid>
					<Grid item xs={12} sm={12}>
						<img alt="travel4spanish" className={classes.feetMid} src={steps2}/>
					</Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={1} className={classes.margin}>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 4</h3>
									<p>Book lesson & practice tasks from Step 3</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 5</h3>
									<p>Practice material with your mentor</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<img alt="travel4spanish" className={classes.feet} src={steps2}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 6</h3>
									<p>Practice tasks from Step 4</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 7</h3>
									<p>Practice material from Step 4 and 5 with your mentor</p>
								</Paper>
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
					<Grid container spacing={1} className={classes.margin}>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 8</h3>
									<p>Practice material from Step 5</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<img alt="travel4spanish" className={classes.feet} src={steps1}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 9</h3>
									<p>Practice tasks from Step 6</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 10</h3>
									<p>Practice tasks from Step 6 with mentor</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 11</h3>
									<p>Practice tasks from Step 7</p>
								</Paper>
							</Grid>
						</Grid>
          </Grid>
					<Grid item xs={12} sm={12}>
						<img alt="travel4spanish" className={classes.feetMid} src={steps2}/>
					</Grid>
          <Grid item xs={12} sm={6}>
					<Grid container spacing={1} className={classes.margin}>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 12</h3>
									<p>Practice material from Step 7 with mentor</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.steps}>
									<h3>Day 13</h3>
									<p>Practice material from Step 8</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Paper elevation={0} className={classes.mentor}>
									<h3>Day 14</h3>
									<p>Practice tasks from Step 8 with mentor</p>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12}>
								<img alt="travel4spanish" className={classes.feet} src={steps2}/>
							</Grid>
							<Grid item xs={12} sm={12}>
            		<Paper elevation={0}>
									<h2 className={classes.prize}>Take your Prize and set next goals/retro session!!!</h2>
								</Paper>
          		</Grid>  
						</Grid>
          </Grid>
					<Grid item xs={12} sm={6}>
						<img alt="travel4spanish" className={classes.image} src={image1}/>
          </Grid>
					{/* <Grid item xs={12} sm={6}>
						<img className={classes.prize} src={image4}/>
          </Grid>  */}
					<Grid item xs={12} sm={12}>
						<img alt="travel4spanish" className={classes.feetMid} src={steps1}/>
					</Grid>
        </Grid>
				
      </Container>
    </div>
    )
}

export default EightSteps