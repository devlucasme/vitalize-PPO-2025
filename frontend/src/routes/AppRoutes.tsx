import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { FaqPage } from "../pages/FaqPage";
import { PrivateRoutes } from "./private/PrivateRoutes";
import { UserPage } from "../pages/UserProfile";
import { CalculatorPage } from "../pages/Calculator";
import { DietGeneratorPage } from "../pages/DietGenerator";
import { TrainingGeneratorPage } from "../pages/TrainingGenerator";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/faq" element={<FaqPage />} />

        {/* Rotas privadas */}
        <Route
          path="/user"
          element={
            <PrivateRoutes>
              <UserPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/calculator"
          element={
            <PrivateRoutes>
              <CalculatorPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/diet"
          element={
            <PrivateRoutes>
              <DietGeneratorPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/training"
          element={
            <PrivateRoutes>
              <TrainingGeneratorPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
