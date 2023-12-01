import { useState } from "react";
import "./Transacoes.css";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
interface Transaction {
    name: string;
    type: string;
    date: string;
    amount: number;
    completed: boolean;
}

export default function Transacoes() {
    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            name: "Netflix",
            type: "Entretenimento",
            date: "01/03/2023",
            amount: 45.99,
            completed: true,
        },
        {
            name: "Amazon",
            type: "Entretenimento",
            date: "02/02/2023",
            amount: 120.75,
            completed: true,
        },
        {
            name: "Kalzone",
            type: "Alimentação",
            date: "20/04/2023",
            amount: 120.75,
            completed: true,
        },
        {
            name: "Madero",
            type: "Alimentação",
            date: "16/05/2023",
            amount: 120.75,
            completed: true,
        },
        {
            name: "Americanas",
            type: "Compras",
            date: "15/06/2023",
            amount: 120.75,
            completed: true,
        },
        {
            name: "Spotify",
            type: "Entrenimento",
            date: "11/07/2023",
            amount: 14.0,
            completed: true,
        },
        {
            name: "Vivara",
            type: "Compras",
            date: "19/08/2023",
            amount: 500.75,
            completed: true,
        },
        {
            name: "Pao-de-Açucar",
            type: "Compras",
            date: "27/09/2023",
            amount: 80.75,
            completed: true,
        },
        // Adicione outras transações conforme necessário
    ]);

    const handleTransactionToggle = (index: number) => {
        const updatedTransactions = [...transactions];
        updatedTransactions[index].completed = !updatedTransactions[index].completed;
        setTransactions(updatedTransactions);
    };

    return (
        <>
            <TopBar />
            <SideBar />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Transações</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Transações</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
                        {transactions.map((transaction, index) => (
                            <div key={index} className="transaction">
                                <p>
                                    <span className="transaction-label utilizacao">Utilização:</span>
                                    <span className="transaction-info utilizacao">{transaction.name}</span>
                                    <span className="transaction-label tipo">Tipo:</span>
                                    <span className="transaction-info tipo">{transaction.type}</span>
                                    <span className="transaction-label data">Data:</span>
                                    <span className="transaction-info data">{transaction.date}</span>
                                    <span className="transaction-label pagamento">Pagamento:</span>
                                    <span className="transaction-info pagamento">R$ {transaction.amount}</span>
                                </p>
                                <div>
                                    <button className={`btn btn-${transaction.completed ? "success" : "secondary"}`} onClick={() => handleTransactionToggle(index)}>
                                        {transaction.completed ? "Completo" : "Pendente"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
