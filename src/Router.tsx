import { Routes, Route } from "react-router-dom";
import { History } from "./pages/history/History";
import { Home } from "./pages/home/Home";
import { DefaultLayout } from "./layouts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};
