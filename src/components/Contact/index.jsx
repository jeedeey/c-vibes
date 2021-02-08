import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import Button from "react-md/lib/Buttons";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="md-grid mobile-fix">
        <Card style={{margin: "20px auto"}} className="md-grid md-cell--7">
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-heading">
                  <h2>Contact Info</h2>
                  <p>We will be happy to  you with any question</p>
              </div>
                <br/>
                <h5><strong>Address:</strong> Lokoja, Kogi State</h5>
                <h5><strong>Phone:</strong> +2348067499807</h5>
                <h5><strong>Email:</strong> confluencevibe@gmail.com </h5>
            </div>
            <div className="contact-form">
                <div class="contact-heading">
                  <h2>Get In Touch</h2>
                  <p>Don't hesitate to contact us if you have content, advert and brand promotion please contact us below. </p>
                </div>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="message-name" className="form-control" placeholder="Your Name" />
                    <input type="email" name="message-email" class="form-control" placeholder="Your Email" />
                    <textarea name="message" class="form-control" placeholder="Your Message"></textarea>
                    <Button type="submit" raised secondary>
                      Send Message
                    </Button>
                </form>
            </div>
          </div>    
        </Card>
      </div>
    );
  }
}

export default Contact;
