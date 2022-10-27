import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./";

export const Header = () => {
  return (
    <HeaderContainer>
      <h3>Meu Timer</h3>
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
