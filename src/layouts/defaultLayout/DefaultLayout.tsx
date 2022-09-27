import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./";
import { Header } from "../../components/header/Header";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
