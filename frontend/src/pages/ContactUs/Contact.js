
import React, { useState, useEffect } from 'react';
import sal from 'sal.js';export default function Contact() {
    useEffect(() => {
        sal();
    }, []);
    return(
        <>
  {/* start page title area */}
  <div className="rn-breadcrumb-inner ptb--30">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <h5 className="title text-center text-md-start">Contact With Us</h5>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-list">
            <li className="item">
              <a href="index.html">Home</a>
            </li>
            <li className="separator">
              <i className="feather-chevron-right" />
            </li>
            <li className="item current">Contact With Us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end page title area */}
  <div className="rn-contact-top-area rn-section-gapTop bg_color--5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-12"
          data-sal="slide-up"
          data-sal-delay={150}
          data-sal-duration={800}
        >
          <div className="section-title mb--30 text-center">
            <h2 className="title">Quick Contact Address</h2>
            <p className="description">
              There are many variations of passages of Lorem Ipsum available,{" "}
              <br /> but the majority have suffered alteration.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-delay={150}
          data-sal-duration={800}
        >
          <div className="rn-address">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-headphones"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
            </div>
            <div className="inner">
              <h4 className="title">Contact Phone Number</h4>
              <p>
                <a href="tel:+444555666777">+444 555 666 777</a>
              </p>
              <p>
                <a href="tel:+222222222333">+222 222 222 333</a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-delay={200}
          data-sal-duration={800}
        >
          <div className="rn-address">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="inner">
              <h4 className="title">Our Email Address</h4>
              <p>
                <a href="mailto:admin@gmail.com">admin@gmail.com</a>
              </p>
              <p>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-delay={250}
          data-sal-duration={800}
        >
          <div className="rn-address">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
            </div>
            <div className="inner">
              <h4 className="title">Our Location</h4>
              <p>
                5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* login form */}
  <div className="login-area message-area rn-section-gapTop">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6"
          data-sal="slide-up"
          data-sal-delay={150}
          data-sal-duration={800}
        >
          <div className="connect-thumbnail">
            <div className="left-image">
              <img src="assets/images/contact/contact1.png" alt="Nft_Profile" />
            </div>
          </div>
        </div>
        <div
          className="col-lg-6"
          data-sal="slide-up"
          data-sal-delay={200}
          data-sal-duration={800}
        >
          <div className="form-wrapper-one registration-area">
            <h3 className="mb--30">Contact Us</h3>
            <form
              className="rwt-dynamic-form"
              id="contact-form"
              method="POST"
              action="mail.php"
            >
              <div className="mb-5">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <input name="contact-name" id="contact-name" type="text" />
              </div>
              <div className="mb-5">
                <label htmlFor="contact-email" className="form-label">
                  Email
                </label>
                <input id="contact-email" name="contact-email" type="email" />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" />
              </div>
              <div className="mb-5">
                <label htmlFor="contact-message" className="form-label">
                  Write Message
                </label>
                <textarea
                  name="contact-message"
                  id="contact-message"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="mb-5 rn-check-box">
                <input
                  id="condition"
                  type="checkbox"
                  className="rn-check-box-input"
                />
                <label htmlFor="condition" className="rn-check-box-label">
                  Allow to all tearms &amp; condition
                </label>
              </div>
              <button name="submit" type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* login form end */}
  <div className="rn-contact-map-area position-relative rn-section-gapTop">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-12"
          data-sal="slide-up"
          data-sal-delay={150}
          data-sal-duration={800}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235495.62780269101!2d-73.932551722484!3d41.33466214858558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sbd!4v1637254792714!5m2!1sen!2sbd"
            height={550}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</>

    );
}
