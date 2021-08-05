import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Logo from '../../img/T4SLogo3.png'
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom';


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: 'black',
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: 'black',
  },
  logo: {
    width: "70px"
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div id="header">
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link to="header" spy={true} smooth={true}>
             <img src={Logo} alt="Logo travel4spanish" className={classes.logo}/>
          </Link>
          <div className={classes.right}>
          <NavLink
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/8-steps"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'8 Steps Method'}
            </NavLink>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {'Sign Up'}
            </Link> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);