import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { FaqPage } from "../pages/FaqPage";
import { UserPage } from "../pages/UserProfile";
import { CalculatorPage } from "../pages/Calculator";
import { DietGeneratorPage } from "../pages/DietGenerator";
import { TrainingGeneratorPage } from "../pages/TrainingGenerator";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/diet" element={<DietGeneratorPage />} />
                <Route path="/training" element={<TrainingGeneratorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }