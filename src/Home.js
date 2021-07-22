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
import { apiUrl } from './helpers';



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
        <AppAppBar />
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
            //loading={this.handleLoadingState}
            loading={this.state.loading}
          />
        <ProductSmokingHero />
        <AppFooter />
      </>
    );
  }
}

export default withRoot(Home);