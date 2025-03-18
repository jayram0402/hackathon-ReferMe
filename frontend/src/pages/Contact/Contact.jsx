import { contactStyles as styles } from './imports';

/**
 * Contact component representing the Contact page.
 * @returns {JSX.Element} Contact JSX element
 */
const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.header}>Contact Us</h1>
      <p className={styles.description}>We would love to hear from you! Please fill out the form below or reach out to us directly.</p>
      
      <div className={styles.mapContainer}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093683!2d144.95373631531694!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e92db02a1a3!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1613733471221!5m2!1sen!2sin"
          width="100%"
          height="300"
          className={styles.map}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
      <form className={styles.contactForm}>
        <label className={styles.label}>
          Name:
          <input type="text" name="name" className={styles.inputField} required />
        </label>
        <label className={styles.label}>
          Email:
          <input type="email" name="email" className={styles.inputField} required />
        </label>
        <label className={styles.label}>
          Message:
          <textarea name="message" className={styles.textArea} required></textarea>
        </label>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
