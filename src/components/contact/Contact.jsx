import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import './Contact.css';

const ContactPage = () => {
  return (
    <>
    <div className="contact">

    {/* <div className="img-container">

    </div> */}
    <div className="contact-container">
      <Typography variant="h3">Contact Us</Typography>
      <Typography variant="body1" className="contact-description">
        Have questions? We are here to help! Fill out the form below and we'll
        get back to you as soon as possible.
      </Typography>
      <form className="contact-form">
        <div className="form-group">
          <TextField id="name" label="Name" variant="outlined" sx={{ width: "100%"}} />
        </div>

        <div className="form-group">
          <TextField id="email" label="Email" variant="outlined" type="email" sx={{ width: "100%", marginBottom: "1 0px"}} />
        </div>

        <div className="form-group">
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            sx={{width: "100%"}}
          />
        </div>

        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.392112901445!2d7.45301177523463!3d10.548457463356874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2b546b5b0839f%3A0x158cb271633faab7!2s44a%20Isa%20Kaita%20Road%2C%20Ungwan%20Sarki%20Muslimi%2C%20Nasarawa%20800221%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1709288755210!5m2!1sen!2sng" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>

    </>
  );
};

export default ContactPage;
