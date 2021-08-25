import React, { useRef, useState } from 'react';
import {Button, Paper, Hidden} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
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
    borderBottom: '1px solid red',
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    color: 'red'
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
}));

const Login = () => {
  const classes = useStyles();
	const emailRef = useRef();
	const passwordRef = useRef();
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const {login} = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e){
		e.preventDefault();

		try {
			setError('')
			setLoading(true)
			await login(
				emailRef.current.value, 
				passwordRef.current.value, 
			)
				
		} catch {
			setError('Failed to sign in')
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
        <Typography component="h1" variant="span">
          Log In
        </Typography>
        {error ? 
        <Fade top >
          <Typography component="span" variant="p" className={classes.error}>{error}</Typography>
        </Fade> : null}
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
								inputRef={passwordRef}

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
            Log in
          </Button>
          <Grid container >
            <Grid item >
              Don't have an account yet? <Link to="/register">Sign up</Link>
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

export default Login