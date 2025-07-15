import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [showPhoneWarning, setShowPhoneWarning] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?\d+$/; 
    let isValid = true;

    if (!emailRegex.test(email)) {
      setShowEmailWarning(true);
      isValid = false;
    } else {
      setShowEmailWarning(false);
    }

    if (!phoneRegex.test(phone)) {
      setShowPhoneWarning(true);
      isValid = false;
    } else {
      setShowPhoneWarning(false);
    }

    if (isValid) {
      alert('Message submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <>
      <div className="footer">
        <div id="Contact">
          <h2>Contact us</h2>
        </div>
        <a
          href="https://www.instagram.com/natanem_couture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Instagram.jpg" alt="icon" className="insta" />
        </a>
        <div className="contact-info">
          <h2 className="message-head">Send us a message</h2>
          <p>Name:</p>
          <input
            type="text"
            className="email"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Email:</p>
          <input
            type="email"
            className="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showEmailWarning && <div className="warning">Please enter a valid email address.</div>}
          <p>Phone number:</p>
          <input
            type="tel"
            className="email"
            placeholder="Your number (e.g., +1234567890)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {showPhoneWarning && <div className="warning">Please enter a valid phone number (digits only, + allowed).</div>}
          <p>Send message:</p>
          <textarea
            name="Message"
            id="message"
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="email-submit" onClick={validateForm}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
