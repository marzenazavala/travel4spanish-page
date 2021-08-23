import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import Logo from '../../img/T4SLogo2.png'
import {Link} from 'react-scroll'


const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 5,
    height: 'auto',
    padding: theme.spacing(2, 5),
    "&:hover": {
      backgroundColor: 'rgb(202, 238, 252)',
      position: 'relative',
      top: -2
    }
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderBottom: '4px solid orange',
  },
  logo: {
    width: '70px'
  }
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <a href= {'mailto: travel4spanish@gmail.com'}>
        <Button className={classes.button}>
          <Typography variant="h4" component="span">
            Got any questions? Need help?
          </Typography>
        </Button>
        </a>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
      <Link to="header" spy={true} smooth={true}>
        <img src={Logo} alt='Logo travel4spanish' className={classes.logo} />
      </Link>
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);