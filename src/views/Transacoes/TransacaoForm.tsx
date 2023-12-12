import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

export default function TransacoesForm() {
    const [tipo, setTipo] = useState("");
    const [plataformaUtilizacao, setPlataformaUtilizacao] = useState("");
    const [data, setData] = useState("");
    const [valor, setValor] = useState("");
    const [numeroCartao, setNumeroCartao] = useState("");
    const [referente, setReferente] = useState("");

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

                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="tipo">Tipo de Transação</label>
                                    <select className="form-control" id="tipo" name="tipo" onChange={(e) => setTipo(e.target.value)} style={{ maxWidth: "300px" }} required>
                                        <option value="debito">Débito</option>
                                        <option value="credito">Crédito</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="plataformaUtilizacao">Plataforma de Utilização</label>
                                    <input type="text" className="form-control" id="plataformaUtilizacao" name="plataformaUtilizacao" placeholder="Informe a plataforma de utilização" onChange={(e) => setPlataformaUtilizacao(e.target.value)} style={{ maxWidth: "300px" }} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="data">Data da Transação</label>
                                    <input type="date" className="form-control" id="data" name="data" onChange={(e) => setData(e.target.value)} style={{ maxWidth: "300px" }} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="valor">Valor da Transação</label>
                                    <CurrencyInput prefix="R$ " allowDecimals decimalScale={2} groupSeparator="." decimalSeparator="," className="form-control" id="valor" name="valor" placeholder="Informe o valor da transação" onChange={(e) => setValor(e.target.value)} style={{ maxWidth: "300px" }} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="numeroCartao">Número do Cartão</label>
                                    <input type="text" className="form-control" id="numeroCartao" name="numeroCartao" placeholder="Informe o número do cartão" onChange={(e) => setNumeroCartao(e.target.value)} style={{ maxWidth: "300px" }} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="referente">Referente</label>
                                    <input type="text" className="form-control" id="referente" name="referente" placeholder="Informe o referente" onChange={(e) => setReferente(e.target.value)} style={{ maxWidth: "300px" }} inputMode="text" />
                                    <small className="form-text text-muted">Caso queira adicionar o referente, isso ajudará na organização das suas transações.</small>
                                </div>
                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
