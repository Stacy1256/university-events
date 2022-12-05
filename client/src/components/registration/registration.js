import "../registration/style.css";
import Footer from "../ui/footer/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  const userInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
    password: "",
  };

  const [values] = useState(userInitialValues);

  const navigate = useNavigate();
  const emailClick = () => {
    navigate("/RegistrationForm", values);
  };
  const gmailClick = () => {
    navigate("/RegistrationForm", values);
  };
  const facebookClick = () => {
    navigate("/RegistrationForm", values);
  };
  return (
    <div>
      <form className="register-form">
        <p>Вибір варіанту реєстрації: </p>
        <button className="register-button" onClick={emailClick}>
          Email
        </button>
        <button className="register-button" onClick={gmailClick}>
          Google
        </button>
        <button className="register-button" onClick={facebookClick}>
          Facebook
        </button>
        <hr></hr>
        <a className="register-link" href="/Rules">
          Правила спільноти
        </a>
      </form>
      <Footer />
    </div>
  );
};

export default Registration;
