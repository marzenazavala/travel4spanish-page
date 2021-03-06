import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import {ReactComponent as Sandals} from '../../icons/sandals.svg'
import {ReactComponent as Drink} from '../../icons/drink.svg'
import {ReactComponent as Maps} from '../../icons/maps.svg'
import {Fade} from 'react-reveal';



const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    //position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5, 5),
    border: '4px dashed orange',
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
  section: {
        marginBottom: theme.spacing(14),
        paddingBottom: theme.spacing(2),
        borderBottom: '8px solid orange',
      },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root} id="how">
      
      <Container className={classes.container}>
      <Fade bottom>
        <Typography variant="h4" className={classes.section} component="h2">
           How it works
        </Typography>
        </Fade>
        <Fade bottom>
        <Grid container spacing={5}>
        
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Maps fontSize="large" className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Set goals
              </Typography>
              <Typography variant="h5">
              Book free session with Travel4Spanish coach and set your goals for next two weeks.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <Sandals className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                8 Steps Method
              </Typography>
              <Typography variant="h5">
              Start your journey - learn and practice new skills with native speaker.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <Drink fontSize="large" className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Progress Review
              </Typography>
              <Typography variant="h5">
              After 14 days have your progress review with language coach and set new goals.
              </Typography>
            </div>
          </Grid>
        </Grid>
        </Fade>
      </Container>
      
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);