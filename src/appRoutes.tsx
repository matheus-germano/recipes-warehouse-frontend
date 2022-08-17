import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}