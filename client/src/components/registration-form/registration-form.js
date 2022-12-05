import Header from "../ui/header/header";
import "../registration-form/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api";

const RegistrationForm = ({ value }) => {
  const [failed, setFailed] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, passwordAgain } =
      Object.fromEntries(new FormData(event.target));
    if (password !== passwordAgain) {
      setFailed("Passwords don't match");
    } else {
      const user = {
        fullName: `${firstName} ${lastName}`,
        email,
        roleId: 1,
        password,
      };

      signUp(user)
        .then((res) => {
          if (res.status === 201) {
            navigate("/Events");
          } else {
            setFailed(true);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className="register-container">
      <Header />
      <form onSubmit={onSubmit} className="register-form">
        <p className="register-header-text">Реєстрація</p>
        <hr></hr>
        {failed && <p className="register-error-text">{failed}.</p>}
        <p>Ім'я</p>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="register-input-field"
          required
        ></input>
        <p>Прізвище</p>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="register-input-field"
          required
        ></input>
        <p>Електронна пошта</p>
        <input
          name="email"
          type="email"
          className="register-input-field"
          required
        ></input>
        <p>Пароль</p>
        <input
          name="password"
          type="password"
          className="register-input-field"
          required
          minLength="8"
        ></input>
        <p>Повторіть Пароль</p>
        <input
          name="passwordAgain"
          type="password"
          className="register-input-field"
          required
        ></input>
        <p></p>
        <button className="register-button">Зареєструватися</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
