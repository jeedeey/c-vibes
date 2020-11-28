import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import Button from "react-md/lib/Buttons";
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
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="message-name" className="form-control mb-30" placeholder="Your Name" />
                    <input type="email" name="message-email" class="form-control mb-30" placeholder="Your Email" />
                    <textarea name="message" class="form-control mb-30" placeholder="Your Message"></textarea>
                    <Button type="submit" raised secondary className="md-cell--right">
                      Send Message
                    </Button>
                </form>
              </div>
              <div className="contact-info">
                <div className="contact-heading mb-50">
                  <h2>Contact Info</h2>
                  <h6>We will be happy to assist you with any question</h6>
                  <p>if you have content, advert and brand promotion please contact us. </p>
                </div>

                <h5>Address: Lokoja, Kogi State</h5>
                <h5>Phone: +2348067499807</h5>
                <h5>Email: confluencevibe@gmail.com </h5>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Contact;
