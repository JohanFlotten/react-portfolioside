import { useState } from "react";
import { InputField } from "./Inputfield";
import Contactcss from '../components/Contact.module.css'

export default function Contact () {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setResponseMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // reset the form:

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
     <div className={Contactcss.contact}>
        <div className={Contactcss.contactContainer}>
          <h2 className={Contactcss.title}>CONTACT ME</h2>
          <p className={Contactcss.info}>
            Johanflotten@hotmail.com <br />
            Tel: +47 47265682
          </p>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              placeholder="ditt navn"
              value={form.name}
              onChange={handleChange}
            >
              Navn
            </InputField>

            <InputField
              type="email"
              name="email"
              placeholder="din epost"
              value={form.email}
              onChange={handleChange}
            >
              Email
            </InputField>

            <InputField
              type="text"
              name="subject"
              placeholder="f.eks hei"
              value={form.subject}
              onChange={handleChange}
            >
              Subject
            </InputField>

            <InputField
              type="textarea"
              name="message"
              placeholder="din melding"
              value={form.message}
              onChange={handleChange}
            >
              Melding
            </InputField>

            <button
              type="submit"
              disabled={isSubmitting}
              className={Contactcss.button}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    )
}

      // <div id="contact">
      //   <div id="contact-container">
      //     <h2 id="title">CONTACT ME</h2>
      //     <p id="contact-info">
      //       Johanflotten@hotmail.com <br />
      //       Tel: +47 47265682
      //     </p>
      //     <input type="Name" class="input" placeholder="Name" />
      //     <input type="Email" class="input" placeholder="Email" />
      //     <input type="Subject" class="input" placeholder="Subject" />
      //     <textarea
      //       type="Message"
      //       class="message"
      //       placeholder="Message"
      //     ></textarea>
      //     <button id="send-button">Send</button>
      //   </div>
      // </div>