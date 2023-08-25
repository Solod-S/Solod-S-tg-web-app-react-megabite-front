import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { AppBar, FooterBar } from "../../components";
import { Box } from "../../components/Box/Box";
// import Loader from "../../components";

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense
      // fallback={<Loader />}
      >
        <Box minHeight="60vh">
          <Outlet />
        </Box>
      </Suspense>
      <FooterBar />
    </>
  );
}
