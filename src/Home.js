import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import AppAppBar from './modules/views/AppAppBar';
import DownloadApp from './modules/views/DownloadApp';
import MailchimpFormContainer from './modules/form/MailChimpForm';
import Prices from './modules/views/Prices';


const Home = () => {
  
    return (    
      <>
        {/* <AppAppBar /> */}
        <ProductHero />
        <DownloadApp />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
        <Prices />
        <MailchimpFormContainer />
        <ProductSmokingHero />
        <AppFooter />
      </>
    );
}

export default withRoot(Home);