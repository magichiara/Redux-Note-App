import "./header.scss";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FcLikePlaceholder } from "react-icons/fc";
import { HiLogout } from "react-icons/hi";

const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="Header">
      <div className="icon">
        <i className="heart">
          <FcLikePlaceholder />
        </i>
        <h3>NOTESAPP</h3>
      </div>

      <div className="name">
        <p>
          Hello, <span>{username}</span>
        </p>
        <i onClick={handleLogout}>
          <HiLogout />
        </i>
      </div>
    </div>
  );
};

export default Header;
