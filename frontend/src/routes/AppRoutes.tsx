import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { FaqPage } from "../pages/faqPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/faq" element={<FaqPage />}/>
                {/* <Route path="/calculadora" element={<FeatureCards />}/> */}
                {/* <Route path="/dieta" element={<FeatureCards />}/> */}
                {/* <Route path="/perfil" element={<FeatureCards />}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }