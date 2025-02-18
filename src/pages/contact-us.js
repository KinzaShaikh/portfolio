import styles from "../styles/pages/contact-us.module.scss";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactMe = () => {
  return (
    <div className={styles.contactContainer}>
      <h2>Get in Touch</h2>
      <p>Let's connect—whether it's for collaboration or just a quick hello!😊</p>
      <ContactForm/>
      <div className={styles.socialLinks}>
      <a href="mailto:kinzashaikh38@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/KinzaShaikh" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kinza-shaikh-0802a3217/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,  // EmailJS Service ID
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, // EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          toemail:process.env.REACT_APP_EMAIL_ADDRESS,
          subject:'Message through portfolio',
          message: formData.message,
        },
        process.env.REACT_APP_EMAIL_JS_USER_ID // EmailJS User ID
      )
      .then(() => {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((e) =>
        toast.error("Failed to send message. Try again!")
    );
    setErrors({});
  };

  return (
    <div className={styles.contactContainer}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.errorInput : ""}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ""}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? styles.errorInput : ""}
          />
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
