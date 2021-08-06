import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../../img/header2.png'





const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#222222', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    backgroundColor: 'orange',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(0),
    border: '4px solid white',
    '&:hover': {
      backgroundColor: "white",
      color: 'black',
      border: '4px solid #88d8f7',
    },

  },
  h5: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(3),
    
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h1" className={classes.more}>
        Trying to upgrade your Spanish?
      </Typography>
      <Button
        size="large"
        className={classes.button}
        component="a"
        href="https://travel4spanish.setmore.com/"
      >
        Book Free Session
      </Button>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy Travel4Spanish community and learn Spanish with native speakers
      </Typography>
      <Typography variant="h2" color="inherit" className={classes.more}>
        Discover our 8 Steps Method
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);