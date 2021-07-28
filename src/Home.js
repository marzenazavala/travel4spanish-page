import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import Newsletter from './modules/views/Newsletter';
import AppAppBar from './modules/views/AppAppBar';
import DownloadApp from './modules/views/DownloadApp';
import axios from 'axios';
import {apiUrl, notify} from './helpers';



class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      email: '',
      loading: false
    }
  }

  handleLoadingState = loading => {
    this.setState({loading})
  }

  handleSendData = (email, firstName) => {
    console.log(firstName, email)
    this.handleLoadingState(true)
    axios.post(`${apiUrl}/subscribe`, {
      email,
      firstName 
    }).then(res => {
      if(res.data.success){
        notify('success', 'Welcome to the Travel4Spanish community. We will send you excellent material to study every week', res.data.success)
        this.setState({
          firstName: '',
          email: '',
        })
        this.handleLoadingState(false)
      } else {
        notify('error', 'Unable to subscribe', res.data.error)
        this.handleLoadingState(false)
      }
    }).catch(error => {
      notify('error', 'Error. Please try again later.', error.message)
      this.handleLoadingState(false)
    })
  }

  handleOnChangeEmail = email => {
    this.setState({email})
  }

  handleOnChangeName = name => {
    this.setState({firstName: name})
  }


  render(){
    const {email, firstName} = this.state;
    return (    
      <>
        {/* <AppAppBar /> */}
        <ProductHero />
        <DownloadApp />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
       
          <Newsletter 
            email={email} 
            name={firstName} 
            handleOnChangeEmail={this.handleOnChangeEmail}
            handleOnChangeName={this.handleOnChangeName}
            handleSendData={this.handleSendData}
            loading={this.state.loading}
          />
        <ProductSmokingHero />
        <AppFooter />
      </>
    );
  }
}

export default withRoot(Home);