import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="contact-wrapper">
            
            <div className="contact-main">
            <div className="contact-form">
                <div class="contact-heading">
                  <h2>Get In Touch</h2>
                  <h5>Don't hesitate to contact us</h5>
                </div>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="text" name="message-name" className="form-control mb-30" placeholder="Your Name" />
                    <input type="email" name="message-email" class="form-control mb-30" placeholder="Your Email" />
                    <textarea name="message" class="form-control mb-30" placeholder="Your Message"></textarea>
                    <button type="submit" class="btn poca-btn">Send Message</button>
                </form>
              </div>
              <div className="contact-info">
                <div className="contact-heading mb-50">
                  <h2>Contact Info</h2>
                  <h6>We will be happy to assist you with any question</h6>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Integer vehicula mauris libero, at molestie eros imperdiet sit amet. Suspendisse mattis ante sit amet ante.</p>
                </div>

                <h5>Address: 40 Baria Sreet 133/2 NewYork City, US</h5>
                <h5>Phone: +01-3-8888-6868</h5>
                <h5>Email: info@colorlib.com </h5>
                <h5>Open Hours: Mon - Fri: 8:00 AM to 6:00 PM</h5>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Contact;
