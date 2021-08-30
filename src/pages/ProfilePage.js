import React, { useState } from 'react';
import {Container, Grid, Paper, Box, Avatar, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../modules/components/Typography';
import { useAuth } from '../contexts/AuthContext'
import avatar from '../img/island2.png';
import {Link, useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root:{
		height: '90vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		// backgroundImage: `url(${image})`,
		// backgroundPosition: 'center',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'cover',
	},
	sidebar: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: theme.spacing(4),
		borderRight: '1px solid #f9c141'
	},
	dashboard: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: theme.spacing(0),
	},
	progress: {
		backgroundColor: 'orange',
		height: '100%',
	},
	avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
		margin: theme.spacing(3,3,1,1),
		backgroundColor: 'white'
  },
	image: {
		width: theme.spacing(9),
    height: theme.spacing(9),
	},
	header: {
		//backgroundImage: `url(${bckImage})`,
		backgroundColor: '#f8e492',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '100%',
		height: '100%',
	},
	button: {
    minWidth: 80,
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
	button2: {
    minWidth: 100,
    backgroundColor: 'grey',
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
	row2: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		height: '50%'
	}
}))

const ProfilePage = () => {
	const classes = useStyles();
	const {currentUser, logout} = useAuth();
	const [error, setError] = useState('');
	const history = useHistory();

	async function handleLogout() {
		setError('')

		try {
			await logout()
			history.push('/')
		} catch {
			setError('Failed to log out')
		}

	}

  return (
		<Container maxWidth={false} className={classes.root}>
			<Grid container spacing={2} className={classes.dashboard}>
				<Grid item xs={12} sm={2}>
					<Box elevation={0} className={classes.sidebar}>
						<Avatar className={classes.avatar}>
							<img src={avatar} alt="avatar" className={classes.image}/>
						</Avatar>
						<Typography variant="body2" component="h6">{currentUser.email}</Typography>
						{error ? 
          	<Typography component="span" variant="body2" className={classes.error}>{error}</Typography> : null}
						<Link to='/edit-profile'>Edit Profile</Link>
						<Button
            size="small"
            type="submit"
            className={classes.button}
            onClick={handleLogout}
            // disabled={loading}
          	>
            Logout
          </Button>
					</Box>
				</Grid>
				<Grid item xs={12} sm={10}>
					<Grid container xs={12} spacing={2}>
						<Grid item xs={12} sm={9}>
							<Grid item xs={12} className={classes.title}>
								<Paper elevation={0}>
									<h1>My Dashboard</h1>
								</Paper >
							</Grid>
							<Grid item xs={12}>
								<Paper>2</Paper>
							</Grid>
							<Grid item xs={12} className={classes.row2}>
								<Grid item xs={12} sm={6}>
									<Paper>2</Paper>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Paper>2</Paper>
								</Grid>
							</Grid>
							<Grid item xs={12} className={classes.row2}>
								<Grid item xs={12} sm={4}>
									<Paper>2</Paper>
								</Grid>
								<Grid item xs={12} sm={4}>
									<Paper>2</Paper>
								</Grid>
								<Grid item xs={12} sm={4}>
									<Paper>2</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Grid item xs={12}>
								<Paper>3</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ProfilePage