import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';


const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    //backgroundColor: theme.palette.warning.main,
    backgroundColor: '#88d8f7'
  },
});

function AppBar(props) {
  
  return (
    <MuiAppBar elevation={1} position="static" {...props} />
  )
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);