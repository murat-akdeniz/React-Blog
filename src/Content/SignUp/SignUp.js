import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from 'styled-components';
import CustomForm from './CustomForm'

require('dotenv').config();

const Container = styled.div`
   border:3px solid #ffc107;
   padding:2rem 10px;
   margin: 2rem 0;
   
`
const MailchimpFormContainer = props => {

   const postUrl = `https://gmail.us6.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
   return (
      <Container className="mc__form-container">
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
      </Container>
   );
};

export default MailchimpFormContainer;