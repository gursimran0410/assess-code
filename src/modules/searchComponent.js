import { SideMenu } from "./sideMenu";

export function SearchComponent() {
  const openNav = () => {
    document.getElementById("sidePanel").style.width = "50vw";
  };

  return (
    <div className="searchComponent">
      <div className="searchHeaderContainer">
        <button className="openbtn" onClick={openNav}>
          <i className="fa fa-bars"></i>
        </button>
        <img
          alt="account-icon"
          src="https://img.icons8.com/ios-filled/50/000000/guest-male--v1.png"
        />
      </div>
      <div id="sidePanel" className="menuPanel">
        <SideMenu />
      </div>
      <div className="middleContent">
        <img
          className="mainLogo"
          alt="main-icon"
          src="https://img.icons8.com/external-line-icons-vinzence-studio/64/000000/external-college-user-avatar-line-icons-vinzence-studio.png"
        />
        <h3 className="fontWhite middleContentText">
          Find every college, exam and course at one place
        </h3>
        <input type="search" placeholder="search" />
      </div>
      <div className="fontWhite middleContentFooter">
        Shiv Nadar University, India
      </div>
    </div>
  );
}
