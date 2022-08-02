import React from "react";
import headerPhotos from "../assets/images/headerImages/headerImages.js";
import pageData from "../assets/pageData/contact.js";
import images from "../assets/images/contactImages/contact.js";
//COMPONENTS
import Header from "../components/Header";
import Modal from "react-bootstrap/Modal";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";
import samplePDF from "./info_packet.pdf.icloud";

const emailjs = require("emailjs-com");
// const {google} = require('googleapis');

/* Contact Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      error: "",
      showModal: false,
      numPages: null,
    };
  }
  clear() {
    this.setState({ name: "", email: "", message: "" });
  }
  /* send an email to ewhcornell@gmail.com on submit */
  async sendData() {
    let template_params = {
      from_name: this.state.name,
      from_email: this.state.email,
      message: this.state.message,
    };
    let service_id = "gmail";
    let template_id = "site_form";
    let user_id = process.env.REACT_APP_EMAIL_JS_USER_ID;
    let result = await emailjs.send(
      service_id,
      template_id,
      template_params,
      user_id
    );
    if (result.status === 200) {
      this.clear();
      this.setState({ error: "your message was sent" });
    } else {
      this.setState({
        error:
          "there was a problem sending your email. please email ewhcornell@gmail.com directly with your message.",
      });
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages: numPages });
  };
  closeModal() {
    if (this.state.numPages) {
      this.setState({ showModal: false });
    }
  }
  /* renders contact page */
  render() {
    let navbar = <NavBar />;
    if (this.props.mobile) {
      navbar = <MobileNavBar />;
    }
    return (
      <div className="home-container">
        {navbar}
        <Header
          mobile={this.props.mobile}
          photo={headerPhotos.contactHeader}
          state={this.state}
          title="Contact Us"
        />
        <div className="contacts-container">
          <div className="contact-title">Our Mission</div>
          <div className="contact-paragraph">
            {pageData.our_mission_paragraph}
          </div>
          <div className="contact-title">How Do We Do This?</div>
          <div className="contact-paragraph">
            {pageData.how_do_we_do_this_paragraph}
          </div>
          <div className="contact-title">Team Values</div>
          <div className="contact-paragraph">
            <ul>
              <li>Accessibility</li>
              <li>Impact</li>
              <li>Education</li>
              <li>Cultural Appreciation</li>
            </ul>
          </div>
          <div className="contact-title">Join Us As a Collaborator</div>
          <div className="contact-paragraph">
            {pageData.collaborator_paragraph}
          </div>

          <div className="contacts-container">
            <img
              className={"collaborators-pic"}
              src={images.collabs}
              alt={"collaborators"}
            />
          </div>
          <div className="contact-buttons-container">
            <Modal
              classname="contact-modal"
              size="lg"
              show={this.state.showModal}
              onHide={() => {
                this.setState({ showModal: false });
              }}
            >
              <div className="document-container">
                <Document
                  file={samplePDF}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  {Array.from(new Array(this.state.numPages), (el, index) => (
                    <Page
                      className="contact-page"
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ))}
                </Document>
              </div>
            </Modal>
          </div>
          <div className="contact-title">Send us a Message</div>
          <div className="contact-paragraph">
            Email <b>ewhcornell@gmail.com</b> or leave a message below!
          </div>
          <input
            className="contact-input"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            placeholder="Name"
          />
          <input
            className="contact-input"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            placeholder="Your Email Address"
          />
          <textarea
            className="contact-textarea"
            value={this.state.message}
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
            placeholder="Leave a Message"
          />
          <div className="contact-submit-container">
            <div
              className="contact-submit-button"
              onClick={() => this.sendData()}
            >
              Submit
            </div>
            <div className="contact-form-error">{this.state.error}</div>
          </div>
        </div>
      </div>
    );
  }
}
