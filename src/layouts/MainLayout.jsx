import "./mainlayout.scss";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
