import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';



function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        Travel4Spanish
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.warning.dark
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5, 5),
    border: '2px dashed orange',
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
  list: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
      },
  listItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
      },
      icons: {
       display: 'flex',
       justifyContent: 'center'
     },
      icon: {
        width: 28,
        height: 28,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        margin: theme.spacing(1),
      }
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} >
              <Typography variant="h6"gutterBottom>

              </Typography>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </li>
              <li className={classes.listItem}>
                  <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
                </li>
              </ul>

            <Grid item xs={12} className={classes.icons}>
              <FacebookIcon className={classes.icon}/>
              <TwitterIcon className={classes.icon}/> 
            </Grid>
            <Grid item xs={12}>
              <Copyright />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);