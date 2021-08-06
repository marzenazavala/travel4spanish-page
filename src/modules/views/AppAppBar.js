import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Logo from '../../img/T4SLogo3.png'
import {Link as ScrollLink} from 'react-scroll'
import {NavLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';


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
          <Link href="/">
             <img src={Logo} alt="Logo travel4spanish" className={classes.logo}/>
          </Link>
          <div className={classes.right}>
          {/* <NavLink
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/mission"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'Our Mission'}
            </NavLink> */}
            {/* <NavLink
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/team"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'Team'}
            </NavLink> */}
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
            {/* <NavLink
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/blog"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'Blog'}
            </NavLink>
            <NavLink
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/contact"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'Contact'}
            </NavLink> */}
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