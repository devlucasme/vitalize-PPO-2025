import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { FaqPage } from "../pages/faqPage";
import { UserPage } from "../pages/userProfile";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }