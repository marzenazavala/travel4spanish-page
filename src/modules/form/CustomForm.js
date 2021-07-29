import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import image from '../../img/e.jpg';
import InputField from '../components/InputField';
import validator from 'validator';
import Loading from '../components/Loading';


const styles = (theme) => ({
    root: {
      marginTop: 0,
      marginBottom: theme.spacing(15),
      display: 'flex',
    },
    cardWrapper: {
      zIndex: 1,
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.warning.dark,
      padding: theme.spacing(8, 3),
    },
    cardContent: {
      maxWidth: 400,
    },
    textField: {
      width: '100%',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    button: {
      width: '100%',
      marginTop: theme.spacing(1),
      backgroundColor: "#28282a",
      color: "white",
    },
    imagesWrapper: {
      position: 'relative',
    },
    imageDots: {
      position: 'absolute',
      top: -67,
      left: -67,
      right: 0,
      bottom: 0,
      width: '100%',
      background: 'url(/static/onepirate/productCTAImageDots.png)',
    },
    image: {
      position: 'absolute',
      top: 38,
      left: 0,
      right: 0,
      bottom: 0,
      width: '140%',
      maxWidth: 1200,
    },
  });


const CustomForm = ({ classes, status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [open, setOpen] = useState(false);
   

  const handleSubmit = (event) => {
    event.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <Container className={classes.root} component="section">
          <Grid container>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}>
              <Hidden smDown>
                <div className={classes.imageDots} />
                <img
                  //src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
                  src={image}
                  alt="call to action"
                  className={classes.image}
                />
              </Hidden>
            </Grid>
            <Grid item xs={12} md={6} className={classes.cardWrapper}>
              <div className={classes.card}>
                <form onSubmit={(e)=>handleSubmit(e)} className={classes.cardContent}>
                  <Typography variant="h2" component="h2" gutterBottom>
                    Receive material to learn
                  </Typography>
                  <Typography variant="h5">
                    Become a member of Travel4Spanish community.
                  </Typography>

         




                  <div className="mc__field-container">
          <InputField
            //label="First Name"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="First Name"
            isRequired
            className={classes.textField} 
          />

          <InputField
            //label="Last Name"
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Last Name"
            isRequired
            className={classes.textField} 
          />

          <InputField
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
            className={classes.textField} 
          />

        </div>
                    <Button 
                      onClick={()=>{}} 
                      type="submit" 
                      color="primary" 
                      variant="contained" 
                      className={classes.button}
                      disabled={!validator.isEmail(email)}
                      formValues={[email, firstName, lastName]}
                    >
                        {status === "sending" ? (
                        <div className="mc__alert mc__alert--sending">
                            <Loading message=""/> 
                        </div>
                        ) : <span>Keep me updated</span> }    
                    </Button>
                {status === "error" && (
                <div 
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                </form>
              </div>
            </Grid>
          </Grid>
          <Snackbar
            open={open}
            onClose={handleClose}
            message={`Welcome to the Travel4Spanish Club, ${firstName}. We will send you a special material for study once a week.`}
          />
        </Container>
      );
};

export default withStyles(styles)(CustomForm);