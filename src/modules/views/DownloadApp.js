import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import image from '../../img/1.png';
import Grid from '@material-ui/core/Grid';
import google from '../../img/google.png';


const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0,
    padding: theme.spacing(3, 0),
    backgroundColor: 'black'
  },
  button: {
    border: '2px solid white',
    borderRadius: 0,
    height: '20%',
    margin: theme.spacing(2, 3),
    padding: theme.spacing(0, 5),
    "&:hover": {
        border: '2px solid orange',
    }
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: 'white'
  },
  buoy: {
    width: 60,
  },
  grid: {
    margin: theme.spacing(0,9)
  },
  phone: {
    width: '70%'
  },
  google: {
      width: '40%',
      margin: theme.spacing(4)
  }
});

function DownloadApp(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
        <Grid container className={classes.grid}>
        <Grid item xs={12} md={6}>
            <img src={image} alt="phone" className={classes.phone}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant="h4" className={classes.link}>
                Get Travel4Spanish App
            </Typography>
            <Button className={classes.button}>
                <Typography variant="h4" component="span" className={classes.link}>
                Download
                </Typography>
            </Button>
            <img src={google} alt="google play" className={classes.google}/>
        </Grid>
      </Grid>
    </Container>
  );
}

DownloadApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadApp);