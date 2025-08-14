import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                {/* <Route path="/calculadora" element={<FeatureCards />}/> */}
                {/* <Route path="/dieta" element={<FeatureCards />}/> */}
                {/* <Route path="/perfil" element={<FeatureCards />}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }