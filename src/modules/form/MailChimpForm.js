import React from 'react';
//import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';

const MailchimpFormContainer = props => {

  const postUrl = `https://zionscoders.us10.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <div >
      <MailchimpSubscribe 
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
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