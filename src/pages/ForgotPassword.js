import React, { useRef, useState } from 'react';
import {Button, Paper, Hidden} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Link, useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAuth } from '../contexts/AuthContext'
import image from '../img/island.png'
import scooter from '../img/scooter2.png'
import {Fade, Bounce} from 'react-reveal'


const useStyles = makeStyles((theme) => ({
	root:{
		// backgroundImage: `url(${image})`,
		// backgroundPosition: 'center',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'cover',
	},
  paper: {
    marginTop: theme.spacing(18),
    padding: theme.spacing(3),
    //border: '1px solid orange',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  graphic: {
    maxHeight: '90vh'
  },
  island:{
    height: theme.spacing(70),
		position: 'relative',
		top: -450,
    zIndex: 0
  },
	scooter:{
		height: theme.spacing(60),
		position: 'relative',
		top: 150,
    zIndex: 10
	},
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "orange",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    '&:focus':{
      outline: 'none',
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    minWidth: theme.spacing(30),
		borderRadius: 5,
		backgroundColor: '#f19e9e',
    padding: theme.spacing(1),
    margin: theme.spacing(6,1),
    color: 'black'
  },
	message: {
    minWidth: theme.spacing(30),
		backgroundColor: '#7ef1d6',
		borderRadius: 5,
    padding: theme.spacing(1),
    margin: theme.spacing(6,1),
    color: 'black'
  },
  button: {
    minWidth: 200,
    backgroundColor: 'orange',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: 'white',
    '&:hover': {
      backgroundColor: "#f9c141",
      color: 'white',
      position: 'relative',
      top: -2
    },
  },
  extralinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
	title: {
    margin: theme.spacing(1)
  }
}));

const ForgotPassword = () => {
  const classes = useStyles();
	const emailRef = useRef();
	const {resetPassword} = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')

	async function handleSubmit(e){
		e.preventDefault();

		try {
			setMessage('')
			setError('')
			setLoading(true)
			await resetPassword(
				emailRef.current.value, 
			)
			setMessage('Check your inbox for further instructions')		
		} catch {
			setError('Failed to reset password')
		}
		setLoading(false)
	}

  return (

		<Container maxWidth={false} className={classes.root}>
			<Grid container spacing={2}>
        <Hidden smDown>
          <Grid item xs={12} sm={6} className={classes.graphic}>
            <Bounce left delay={1000}>
              <img src={scooter} alt="Man driving a scooter" className={classes.scooter}/>
            </Bounce>
            <Bounce top delay={500}>
              <img src={image} alt="Tropical island" className={classes.island} />
            </Bounce>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={6}>
    <Container component="main" maxWidth="xs">
      <Paper elevation={0} className={classes.paper}>
        <Typography component="h1" variant="span" className={classes.title}>
          Reset Password
        </Typography>
        {error ? 
        <Fade top >
          <Typography component="span" variant="p" className={classes.error}>{error}</Typography>
        </Fade> : null}
				{message && <Fade top >
          <Typography component="span" variant="p" className={classes.message}>{message}</Typography>
        </Fade>}
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
								type="email"
                autoComplete="email"
								inputRef={emailRef}

              />
            </Grid>
          </Grid>
          <Button
            size="large"
            type="submit"
            fullWidth
            className={classes.button}
            onClick={handleSubmit}
            disabled={loading}
          >
            Reset Password
          </Button>
          
          <Grid container className={classes.extralinks}>
            <Grid item>
              Go back to <Link to='/login'>Login</Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
		</Grid>
		</Grid>
		</Container>
  );
}

export default ForgotPassword