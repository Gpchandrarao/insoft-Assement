import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";

import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="contact-elements">
        {/* phone-icon */}
        <div className="phone-icon-container">
          <i className="phone-icon">
            <BsTelephone className="phone" />
          </i>
          <span className="num">+91-9540349392</span>
        </div>
        {/* email-icon */}
        <div className="">
          <a
            href="mailto:contact@schoolaura.com"
            className="email-icon-container"
          >
            <i className="email-icon">
              <HiOutlineMail className="phone" />
            </i>
            <span className="email">contact@schoolaura.com</span>
          </a>
        </div>
      </div>
      <div className="contact-links">
        <div className="social-links">
          <div className="social-app">
            <a href="https://wa.link./bop2zv" className="container">
              <i>
                <BsWhatsapp className="app" />
              </i>
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="social-app mobile-app">
            <a
              href="https://play.google.com/store/apps/details?id=com.schoolaura"
              className="container"
            >
              <i>
                <FaMobileAlt className="app" />
              </i>
              <span>Mobile App</span>
            </a>
          </div>
        </div>
        <div className="buttons">
          <div className="user-login">
            <a href="https://schoolaura.com/account/login" className="buttons">
              Login
            </a>
          </div>
          <div className="user-registration">
            <a
              href="https://schoolaura.com/account/register"
              className="buttons"
            >
              Registration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
