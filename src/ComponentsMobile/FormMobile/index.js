import React from 'react'
import './style.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

/**
* @author
* @function Form
**/

// use the render prop and your custom form
const FormMobile = (props) => {
    const url = 'https://gmail.us6.list-manage.com/subscribe/post?u=831b96e566ea38decfae2fcbe&id=5810fcc853';

// simplest form (only email)
    const SimpleForm = () => <MailchimpSubscribe url={url}/>
    return (
        <div className='mailchimp-m'>
            <p className='form-title-m'>Newsletter Signup</p>
            <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
            <div className='fform-m'>
                <SimpleForm onSubmitted={formData => subscribe(formData)} />
                {status === "sending" && <div className='sending-m' style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div className='error-m' style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                {status === "success" && <div className='success-m' style={{ color: "green" }}>Subscribed !</div>}
            </div>
    )}
  />
        </div>
)}

export default FormMobile