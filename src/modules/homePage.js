import React from "react";
import { SearchComponent } from "./searchComponent";
import { MenuTabs } from "./menuTabs";
import { FurtherMenuSelector } from "./furtherMenuSelector";
import { FeaturedClgCarousel } from "./featuredClgCarousel";

export default function homePage() {
  return (
    <div>
      <div>
        <SearchComponent />
      </div>
      <div>
        <MenuTabs />
      </div>
      <div>
        <FurtherMenuSelector />
      </div>
      <div>
        <FeaturedClgCarousel />
      </div>
    </div>
  );
}
