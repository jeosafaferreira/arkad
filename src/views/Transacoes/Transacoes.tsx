import React, { useState } from 'react';
import TopBar from '../Components/TopBar';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import './Transacoes.css';
interface Transaction {
  name: string;
  type: string;
  date: string;
  amount: number;
  completed: boolean;
}

const TransactionItem: React.FC<{ transaction: Transaction; onToggle: () => void }> = ({ transaction, onToggle }) => {
  return (
    <div className="transaction">
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
        <button className={`btn btn-${transaction.completed ? 'success' : 'secondary'}`} onClick={onToggle}>
          {transaction.completed ? 'Completo' : 'Pendente'}
        </button>
      </div>
    </div>
  );
};

const TransactionList: React.FC<{ transactions: Transaction[]; onToggle: (index: number) => void }> = ({ transactions, onToggle }) => {
  return (
    <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} onToggle={() => onToggle(index)} />
      ))}
    </div>
  );
};

const Transacoes: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    // ... transações existentes ...
  ]);

  const [newTransaction, setNewTransaction] = useState<Transaction>({
    name: '',
    type: '',
    date: '',
    amount: 0,
    completed: false,
  });

  const handleAddTransaction = () => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setNewTransaction({
      name: '',
      type: '',
      date: '',
      amount: 0,
      completed: false,
    });
  };

  const handleTransactionToggle = (index: number) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index].completed = !updatedTransactions[index].completed;
    setTransactions(updatedTransactions);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
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
          {/* Formulário para adicionar transação */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTransaction();
            }}
          >
            <label>
              Utilização:
              <input type="text" name="name" value={newTransaction.name} onChange={handleInputChange} required />
            </label>
            <label>
              Tipo:
              <input type="text" name="type" value={newTransaction.type} onChange={handleInputChange} required />
            </label>
            <label>
              Data:
              <input type="text" name="date" value={newTransaction.date} onChange={handleInputChange} required />
            </label>
            <label>
              Valor:
              <input type="number" name="amount" value={newTransaction.amount} onChange={handleInputChange} required />
            </label>
            <button type="submit">Adicionar Transação</button>
          </form>

          {/* Lista de transações */}
          <TransactionList transactions={transactions} onToggle={handleTransactionToggle} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Transacoes;