import React from 'react';
//import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ProductCTA from '../views/ProductCTA';

const MailchimpFormContainer = props => {

  const postUrl = `https://zionscoders.us10.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe 
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <ProductCTA
              status={status} 
              message={message}
              onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;