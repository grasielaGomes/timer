import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./";

export const Header = () => {
  return (
    <HeaderContainer>
      <span>Logo</span>
      <nav>
        <NavLink to="/" end title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
