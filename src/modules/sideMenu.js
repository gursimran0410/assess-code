import { LoginPage } from "./loginPage";

export function SideMenu() {
  const closeNav = () => {
    document.getElementById("sidePanel").style.width = 0;
  };

  const handleLoginClick = () => {
    document.getElementById("loginPage").style.width = "100vw";
  };

  return (
    <div>
      <button className="closebtn" onClick={closeNav}>
        X
      </button>
      <div>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        <a href="#" onClick={handleLoginClick}>
          Login
        </a>
      </div>
      <div id="loginPage" className="loginPanel">
        <LoginPage />
      </div>
    </div>
  );
}
