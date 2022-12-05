import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login-page/style.css";
import Header from "../ui/header/header";
import { signIn, login } from "../../api";

const LoginPage = () => {
  const [failed, setFailed] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(event.target));

    signIn(email, password)
      .then((r) => {
        login(r.data.token);
        navigate("/Events");
      })
      .catch((e) => {
        console.log("Authorization failed");
        console.log(e);
        setFailed(true);
      });
  };

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit} className="login-form">
        <p>Вхід у систему:</p>
        <p>E-mail: </p>
        <input name = 'email' id='email' className="login-input-field"></input>
        <p>Пароль:</p>
        <input name='password' id='password' type="password" className="login-input-field"></input>
        <p></p>
        <button className="login-button">Вхід</button>
        {failed && <p className='login-error-text'>Невірний емейл або пароль.</p>}
        <p>Немає облікового запису?</p>
        <a className="login-link" href="/Registration">
          Зареєструйся вже!
        </a>
      </form>
    </div>
  );
};
export default LoginPage;
