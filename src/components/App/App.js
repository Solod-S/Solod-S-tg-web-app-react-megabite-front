import { Route, Routes, Navigate } from "react-router-dom";

import SharedLayout from "../SharedLayout/SharedLayout";
import {
  MenuPage,
  DiscountPage,
  FormPage,
  ContactPage,
  OwnBrandsPage,
  OwnBrandsPageDetails,
  RefundPage,
  CompanyAboutPage,
} from "../../pages";

function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          <Route index element={<MenuPage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="/own-brand" element={<OwnBrandsPage />} />
          <Route
            path="own-brand/:ownbrandDataId"
            element={<OwnBrandsPageDetails />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/about" element={<CompanyAboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
