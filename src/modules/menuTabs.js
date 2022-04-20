import { menuGridItems } from "../../assets/appData";

export function MenuTabs() {
  return (
    <div className="menuTabsGrid">
      {menuGridItems.map((item, index) => (
        <button className="menuTabGridButtons buttonBrd" key={index}>
          <img
            alt="document"
            src="https://img.icons8.com/material-outlined/48/000000/file.png"
          />
          {item}
        </button>
      ))}
    </div>
  );
}
