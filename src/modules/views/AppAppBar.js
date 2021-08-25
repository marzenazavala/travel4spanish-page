import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Logo from '../../img/T4SLogo3.png'
import Logo1 from '../../img/t4s_logo1.png'
import Logo2 from '../../img/t4s_logo2.png'
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
    '&:hover':{
      color: 'white'
    }
  },
  linkSecondary: {
    color: 'black',
  },
  logo: {
    width: "90px"
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
             <img src={Logo1} alt="Logo travel4spanish" className={classes.logo}/>
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
              to="/register"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'REGISTER'}
            </NavLink>
            <NavLink
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/login"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'LOGIN'}
            </NavLink>
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
              {'8 STEPS'}
            </NavLink>
            {/* <NavLink
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/prices"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              {'Prices'}
            </NavLink> */}
            {/*<NavLink
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