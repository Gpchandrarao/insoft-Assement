import { Component } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import user from "../images/user-img.png";
import { FaGreaterThan } from "react-icons/fa";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import headerGirl from "../images/header-girl-icon.png";

import "./index.css";

class LoginForm extends Component {
  state = {
    isShow: true,
    showClassOne: true,
    showClassTwo: true,
  };

  onShowPassword = () => {
    this.setState((prevState) => ({ isShow: !prevState.isShow }));
    console.log("show");
  };

  onHidePassword = () => {
    this.setState((prevState) => ({ isShow: !prevState.isShow }));
    console.log("hide-show");
  };

  onChangeColor = () => {
    this.setState((prevState) => ({
      showClass: !prevState.showClass,
      showClassTwo: !prevState.showClassTwo,
    }));
  };

  onChangeColors = () => {
    this.setState((prevState) => ({
      showClassTwo: !prevState.showClassTwo,
      showClass: !prevState.showClass,
    }));
  };

  render() {
    const { isShow, showClass, showClassTwo } = this.state;

    const colorClass = showClass ? "login-heading" : "";
    const colorClassTwo = showClassTwo ? "login-heading" : "";
    const labelContentMobile = showClass
      ? "Mobile Number or Key"
      : "Parents Mobile or Email";
    const labelContentPassword = showClass
      ? "Student Password"
      : "Parent Password";

    return (
      <div className="app-container">
        <Header />
        <div className="login-container">
          <Navbar />
          <div className="main-banner">
            <div className="hero-text">
              <div className="hero-heading">
                <h1 className="heading">
                  BE A <span className="heading-span">SMART STUDENT</span>
                </h1>
                <h4 className="mess">
                  SchoolAura Is A Smart Education Platform
                </h4>
              </div>
              <div className="services">
                <div>
                  <img
                    src={headerGirl}
                    alt="header-girl"
                    className="header-girl"
                  />
                </div>
                <div className="services-items">
                  <div className="services-heading">
                    <h4 className="services-items-heading">
                      ENTRANCE <br />
                      Solution
                    </h4>
                  </div>
                  <div className="services-exam">
                    <button className="btn">Exam</button>
                  </div>
                  <div className="services-courses">
                    <button className="btn">Courses</button>
                  </div>
                  <div>
                    <p className="read-more">
                      READ MORE <FaGreaterThan size="10px" />
                    </p>
                  </div>
                </div>
                <div className="services-items">
                  <div className="services-heading">
                    <h4 className="services-items-heading">
                      COMPETITIVE <br />
                      Solution
                    </h4>
                  </div>
                  <div className="services-exam">
                    <button className="btn">Exam</button>
                  </div>
                  <div className="services-courses">
                    <button className="btn">Courses</button>
                  </div>
                  <div>
                    <p className="read-more">
                      READ MORE <FaGreaterThan size="10px" />
                    </p>
                  </div>
                </div>
                <div className="services-items">
                  <div className="services-heading">
                    <h4 className="services-items-heading">
                      KG - 12<sup>TH</sup> <br />
                      SCHOOL
                    </h4>
                  </div>
                  <div className="services-exam">
                    <button className="btn">Exam</button>
                  </div>
                  <div className="services-courses">
                    <button className="btn">Courses</button>
                  </div>
                  <div>
                    <p className="read-more">
                      READ MORE <FaGreaterThan size="10px" />
                    </p>
                  </div>
                </div>
                <div className="services-items">
                  <div className="services-heading">
                    <h4 className="services-items-heading">
                      TUT0R <br />
                      SOLUTION
                    </h4>
                  </div>
                  <div className="services-exam">
                    <button className="btn">Exam</button>
                  </div>
                  <div className="services-courses">
                    <button className="btn">Courses</button>
                  </div>
                  <div>
                    <p className="read-more">
                      READ MORE <FaGreaterThan size="10px" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-form-container">
              <div className="login-img">
                <img src={user} alt="user" />
              </div>
              <div className="from-container">
                <div className="login-heading-container">
                  <ul className="login-ul-container">
                    <li className={colorClass} onClick={this.onChangeColor}>
                      Student Login
                    </li>
                    <li className={colorClassTwo} onClick={this.onChangeColors}>
                      Parents Login
                    </li>
                  </ul>
                </div>
                <form className="form-items">
                  <label htmlFor="mobile-input" className="label">
                    {labelContentMobile}
                  </label>
                  <input type="text" id="mobile-input" className="input" />
                  <label htmlFor="password-input" className="label">
                    {labelContentPassword}
                  </label>
                  <input
                    type={isShow ? "password" : "text"}
                    id="password-input"
                    className="input"
                  />
                  {isShow ? (
                    <button
                      type="button"
                      className="hide"
                      onClick={this.onHidePassword}
                    >
                      <BiSolidHide />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="hide"
                      onClick={this.onShowPassword}
                    >
                      <BiSolidShow />
                    </button>
                  )}

                  <button type="submit" className="login-button">
                    Login
                  </button>
                  <div className="password-container">
                    <h4>Forget Password</h4>
                    <h4>Create Account</h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default LoginForm;
