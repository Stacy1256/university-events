import "../header/style.css";
import { useNavigate } from "react-router-dom";
import { useAuth, logout } from "../../../api";

const Header = () => {
  const [logged] = useAuth();
  const navigate = useNavigate();
  const eventsClick = () => {
    navigate("/Events");
  };
  const facultiesClick = () => {
    navigate("/Faculties");
  };
  const enterClick = () => {
    navigate("/Login");
  };
  const textClick = () => {
    navigate("/");
  };
  const logountClick = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="header">
      <p className="header-text" onClick={textClick}>
        Львівський національний університет імені Івана Франка
      </p>
      <button className="header-button" onClick={eventsClick}>
        Події
      </button>
      <button className="header-button" onClick={facultiesClick}>
        Факультети
      </button>
      {!logged && (
        <>
          <button className="header-button" onClick={enterClick}>
            Вхід в систему
          </button>
        </>
      )}
      {logged && (
        <>
          <button className="header-button" onClick={logountClick}>
            Вихід з системи
          </button>
        </>
      )}
    </header>
  );
};
export default Header;
