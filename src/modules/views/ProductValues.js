import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import {Fade} from 'react-reveal'
import {ReactComponent as Teacher} from '../../icons/hawaiian.svg'
import {ReactComponent as Torch} from '../../icons/torch.svg'
import {ReactComponent as Shirt} from '../../icons/shirt.svg'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    //backgroundColor: theme.palette.warning.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(1),
    display: 'flex',
    position: 'relative',
    top: -100
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5, 5),
    border: '4px solid orange',
    backgroundColor: 'white'
  },
  image: {
    height: 65,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5} >
          <Grid item xs={12} md={4}>
          <Fade bottom>
            <Paper className={classes.item} elevation={9}>
              <Shirt fontSize="large" className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Learn with mentor
              </Typography>
              <Typography variant="h5">
                {"Your personal mentor will show you the fastest way to master Spanish. He will guide you according to your learning goals."}
              </Typography>
            </Paper>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4}>
          <Fade bottom>
          <Paper className={classes.item} elevation={9}>
            <Torch className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Constant guidance
              </Typography>
              <Typography variant="h5">
              {"We provide constant support from our mentors at every stage of learning. We will show you the optimal educational techniques."}
              </Typography>
            </Paper>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4}>
          <Fade bottom>
          <Paper className={classes.item} elevation={9}>
            <Teacher fontSize="large" className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Native Speakers
              </Typography>
              <Typography variant="h5">
              {"Our teachers are native speakers with enthusiasm and enthusiasm to guide you on your Spanish journey."}
              </Typography>
            </Paper>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);