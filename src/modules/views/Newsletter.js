import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import image from '../../img/travel_news.jpg';
import InputField from '../components/InputField';
import validator from 'validator';
import Loading from '../components/Loading';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.dark,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: 38,
    left: 38,
    right: 0,
    bottom: 0,
    width: '120%',
    maxWidth: 900,
  },
});

function Newsletter({classes, name, handleOnChangeName, handleOnChangeEmail, email, handleSendData, loading}) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
      <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src={image}
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive material to learn
              </Typography>
              <Typography variant="h5">
                Become a member of Travel4Spanish community.
              </Typography>
              <InputField
                onChangeHandler={handleOnChangeName}
                type="text"
                value={name}
                placeholder="Your name"
                isRequired
                name="name"
                className={classes.textField} 
              />

              <InputField
                onChangeHandler={handleOnChangeEmail}
                type="email"
                value={email}
                placeholder="Your email"
                isRequired
                name="email"
                className={classes.textField} 
              />
              {loading ? 
                <Loading message="Sending..."/> 
                  : 
                <Button 
                  onClick={()=>handleSendData(email, name)} 
                  type="submit" 
                  color="primary" 
                  variant="contained" 
                  className={classes.button}
                  disabled={!validator.isEmail(email)}
                >
                  Keep me updated
                </Button>
              }
            </form>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message={`Welcome to the Travel4Spanish Club, ${name}. We will send you a special material for study once a week.`}
      />
    </Container>
  );
}

Newsletter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Newsletter);