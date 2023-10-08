import schoolLogo from "../images/logo_school.png";
import { FaUniversity } from "react-icons/fa";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="image">
        <a href="https://schoolaura.com/" className="logo-img">
          <div className="background">
            <img src={schoolLogo} alt="school-logo" className="logo" />
          </div>
        </a>
      </div>
      <div className="menu-items">
        <ul className="ul-container">
          <li>Home</li>
          <li className="">
            <select className="options">
              <option className="">Exam solution</option>
              <option className="">
                1st - 12<sup>TH</sup> Exam
              </option>
              <option className="">Competitive Exam</option>
              <option className="">Entrance Exam</option>
            </select>
          </li>
          <li>
            <select className="options">
              <option className="">Online Study</option>
              <option className="">
                1st - 12<sup>TH</sup> Exam
              </option>
              <option className="">Competitive Exam</option>
              <option className="">Entrance Exam</option>
            </select>
          </li>
          <li className="">
            <select className="options">
              <option className="">Tutor Solution</option>
              <option className="">Find Tutor</option>
              <option className="">Become Tutor</option>
            </select>
          </li>
          <li>Blog</li>
          <li>Contact US</li>
          <li className="management">
            <i>
              <FaUniversity className="university" />
            </i>
            School Management
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
