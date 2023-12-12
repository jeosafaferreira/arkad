import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

interface TransactionFormProps {
    onSubmit: (formData: FormData) => void;
}

interface FormData {
    email: string;
    senha: string;
    verificar: boolean;
    tipo: "debito" | "credito";
    plataformaUtilizacao: string;
    data: string;
    valor: string;
    numeroCartao: string;
    referente: string;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        senha: "",
        verificar: false,
        tipo: "debito",
        plataformaUtilizacao: "",
        data: "",
        valor: "",
        numeroCartao: "",
        referente: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? (event.target as HTMLInputElement).checked : value,
        }));
    };

    const handleTipoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            tipo: event.target.value as "debito" | "credito",
        }));
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            data: formattedDate,
        }));
    };

    const handleValorChange = (value: string | undefined) => {
        const formattedValue = value ? `R$ ${value}` : "";
        setFormData((prevData) => ({
            ...prevData,
            valor: formattedValue,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const requiredFields = ["email", "senha", "tipo", "plataformaUtilizacao", "data", "valor", "numeroCartao"];
        const isFormValid = requiredFields.every((field) => formData[field as keyof FormData]);

        if (isFormValid) {
            onSubmit(formData);
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    };

    return (
        <div>
            <TopBar />
            <SideBar />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Formulário de Transação</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Detalhes da Transação</h3>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="tipo">Tipo de Transação</label>
                                        <select className="form-control" id="tipo" name="tipo" value={formData.tipo} onChange={handleTipoChange} style={{ maxWidth: "300px" }} required>
                                            <option value="debito">Débito</option>
                                            <option value="credito">Crédito</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="plataformaUtilizacao">Plataforma de Utilização</label>
                                        <input type="text" className="form-control" id="plataformaUtilizacao" name="plataformaUtilizacao" placeholder="Informe a plataforma de utilização" value={formData.plataformaUtilizacao} onChange={handleInputChange} style={{ maxWidth: "300px" }} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="data">Data da Transação</label>
                                        <input type="date" className="form-control" id="data" name="data" value={formData.data} onChange={handleDateChange} style={{ maxWidth: "300px" }} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="valor">Valor da Transação</label>
                                        <CurrencyInput prefix="R$ " allowDecimals decimalScale={2} groupSeparator="." decimalSeparator="," className="form-control" id="valor" name="valor" placeholder="Informe o valor da transação" value={formData.valor.replace("R$ ", "")} onValueChange={handleValorChange} style={{ maxWidth: "300px" }} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="numeroCartao">Número do Cartão</label>
                                        <input type="text" className="form-control" id="numeroCartao" name="numeroCartao" placeholder="Informe o número do cartão" value={formData.numeroCartao} onChange={handleInputChange} style={{ maxWidth: "300px" }} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="referente">Referente</label>
                                        <input type="text" className="form-control" id="referente" name="referente" placeholder="Informe o referente" value={formData.referente} onChange={handleInputChange} style={{ maxWidth: "300px" }} inputMode="text" />
                                        <small className="form-text text-muted">Caso queira adicionar o referente, isso ajudará na organização das suas transações.</small>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="verificar" name="verificar" checked={formData.verificar} onChange={handleInputChange} />
                                        <label className="form-check-label" htmlFor="verificar">
                                            Marque-me
                                        </label>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default TransactionForm;
