import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Carteira from "./views/Carteira/Carteira";
import ArkadPlus from "./views/ArkadPlus/ArkadPlus";
import ArkadPlusForm from "./views/ArkadPlus/ArkadPlusForm";
import TransacaoForm from "./views/Transacoes/TransacaoForm.tsx";
import Suporte from "./views/Suporte/Suporte";
import Inscrever from "./views/Inscrever/Inscrever.tsx";
import CardCredit from "./views/Carteira/CardCredit/CardCredit.tsx";
import Login from "./views/Login/login.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/carteira" element={<Carteira />} />
                    <Route path="/novoCartao" element={<CardCredit />} />
                    <Route path="/transacoes" element={<TransacaoForm />} />
                    <Route path="/arkadplus" element={<ArkadPlus />} />
                    <Route path="/arkadplusform" element={<ArkadPlusForm />} />
                    <Route path="/suporte" element={<Suporte />} />
                    <Route path="/inscrever" element={<Inscrever />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
