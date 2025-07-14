function Contact () {
    return (
        <>
        <div className="footer">
        <div id="Contact">
            <h2>Contact us</h2>

        </div>
        <a href="https://www.instagram.com/natanem_couture/" target="_blank" rel="noopener noreferrer">
        <img src="Instagram.jpg" alt="icon" className="insta" />
        </a>
        <div className="contact-info">
            <p>If you have any questions or inquiries, feel free to reach out to us!</p>
            <input type="text" className="email" placeholder="Enter your email"/><button className="email-submit">Submit</button>
        </div>
        </div>
        </>
        )
}

export default Contact;
