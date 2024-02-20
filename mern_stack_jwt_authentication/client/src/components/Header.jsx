import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> GoalSetter</Link>
      </div>
      <ul>
        {user ? (
          <li style={{ display: "flex" }}>
            <p
              style={{
                display: "flex",
                marginRight: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {user.name}
            </p>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Вийти з системи
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Вхід в систему
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Зареєструватися
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
