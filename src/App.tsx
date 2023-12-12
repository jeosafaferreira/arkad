import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Carteira from "./views/Carteira/Carteira";
import ArkadPlus from "./views/ArkadPlus/ArkadPlus";
import Transacoes from "./views/Transacoes/Transacoes";
import Suporte from "./views/Suporte/Suporte";
import NovoCartao from "./views/Carteira/NovoCartao";
import Inscrever from "./views/Inscrever/Inscrever.jsx";
import CardCredit from "./views/Carteira/CardCredit/CardCredit.jsx";
import CardCredit2 from "./views/Carteira/CardCredit/CardCredit2.jsx";
import Login2 from "./views/Login/login2.js";

export default function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/carteira" element={<Carteira />} />
                    <Route path="/novoCartao" element={<CardCredit />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                    <Route path="/arkadplus" element={<ArkadPlus />} />
                    <Route path="/suporte" element={<Suporte />} />
                    <Route path="/inscrever" element={<Inscrever />} />
                    <Route path="/login" element={<Login2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
