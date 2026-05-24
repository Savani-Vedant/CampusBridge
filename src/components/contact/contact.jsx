import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import email_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const contact = () => {
    const [result, setResult] = React.useState("");
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!accessKey) {
      setResult("Missing Web3Forms access key. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.");
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="Message Icon"/></h3>
        <p>Feel free to reach out to us with any questions or inquiries.</p>
        <ul>
          <li>
            <img src={phone_icon} alt="Phone Icon"/>
            +1 (123) 456-7890
          </li>
          <li>
            <img src={email_icon} alt="Email Icon"/>
            info@campusbridge.com
          </li>
          <li>
            <img src={location_icon} alt="Location Icon"/>
            777 Education Avenue, Learning City, LC 12345
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Send Message <img src={white_arrow} alt="Arrow"/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default contact
