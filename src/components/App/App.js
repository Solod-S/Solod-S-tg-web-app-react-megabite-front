import { Route, Routes, Navigate } from "react-router-dom";

import SharedLayout from "../SharedLayout/SharedLayout";
import { MenuPage, DiscountPage } from "../../pages";

function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          <Route index element={<MenuPage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
