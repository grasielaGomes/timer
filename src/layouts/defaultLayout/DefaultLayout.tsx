import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./";
import { Header } from "@/components";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
