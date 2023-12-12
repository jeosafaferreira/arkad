import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Carteira from "./views/Carteira/Carteira";
import ArkadPlus from "./views/ArkadPlus/ArkadPlus";
import ArkadPlusForm from "./views/ArkadPlus/ArkadPlusForm";
import TransactionForm from "./views/Transacoes/Transacoes.tsx";
import Suporte from "./views/Suporte/Suporte";
import NovoCartao from "./views/Carteira/NovoCartao";
import Inscrever from "./views/Inscrever/Inscrever.tsx";
import CardCredit from "./views/Carteira/CardCredit/CardCredit.tsx";
import CardCredit2 from "./views/Carteira/CardCredit/CardCredit2.jsx";
import Login from "./views/Login/login.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/carteira" element={<Carteira />} />
                    <Route path="/novoCartao" element={<CardCredit />} />
                    <Route path="/transacoes" element={<TransactionForm />} />
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
