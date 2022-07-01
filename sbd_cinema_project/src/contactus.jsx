import ContactTitle from './components/contactus/ContactTitle';
import Email from './components/contactus/Email';
import PostalAddress from './components/contactus/PostalAddress';

const ContactUs = () => {
    return ( 
        <>
            <ContactTitle />
            <Email />
            <PostalAddress />
            <div className="emailCredit">
                <p>Email Form - Modified version of code from https://mailtrap.io/blog/react-contact-form/ by Aleksandr Vernin</p>
            </div>
        </>
     );
}
 
export default ContactUs;