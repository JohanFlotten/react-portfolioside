function Contact () {
    return (
        <div id="contact">
        <div id="contact-container">
          <h2 id="title">CONTACT ME</h2>
          <p id="contact-info">
            Johanflotten@hotmail.com <br />
            Tel: +47 47265682
          </p>
          <input type="Name" class="input" placeholder="Name" />
          <input type="Email" class="input" placeholder="Email" />
          <input type="Subject" class="input" placeholder="Subject" />
          <textarea
            type="Message"
            class="message"
            placeholder="Message"
          ></textarea>
          <button id="send-button">Send</button>
        </div>
      </div>
    )
}

export default Contact;