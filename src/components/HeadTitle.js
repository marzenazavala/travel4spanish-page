import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../modules/components/Typography';


const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
        paddingBottom: theme.spacing(2),
        borderBottom: '8px solid orange',
      },
});

const HeadTitle = ({classes, title}) => {
	
  return (
		<Container className={classes.container}>
				<Typography variant="h4" className={classes.section} component="h2">
           {title}
        </Typography>
		</Container>
  )
}

HeadTitle.propTypes = {
  classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired
};

export default withStyles(styles)(HeadTitle)