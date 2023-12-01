import axios from "axios";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NovoCartao.css";
export default function NovoCartao() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [bandeira, setBandeira] = useState("");
    const [vencimento, setVencimento] = useState("");

    function cadastrarCartao() {
        axios
            .post(`http://localhost:8081/cartoes/cadastrar`, {
                nome_impresso: nome,
                numero: numero,
                bandeira: bandeira,
                vencimento: vencimento,
                usuario_id: localStorage.getItem("usuario_id"),
            })
            .then(() => {
                navigate("/carteira");
            })
            .catch(function (error) {
                alert("Erro ao salvar dados!");
                console.log(error);
            });
    }
    return (
        <>
            <TopBar />
            <SideBar />
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Cadastrar Cartão</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active">Carteira</li>
                                    <li className="breadcrumb-item">Novo Cartão</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card card-primary" style={{ height: 410 }}>
                        <div className="card-header"></div>
                        <div className="card-body" style={{ color: "black", display: "flex", flexDirection: "column" }}>
                            <div className="form-group">
                                <div>
                                    <b>Nome Impresso no Cartão:</b>
                                </div>
                                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <div>
                                    <b>Número:</b>
                                </div>
                                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setNumero(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <div>
                                    <b>Bandeira:</b>
                                </div>
                                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setBandeira(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <div>
                                    <b>Vencimento:</b>
                                </div>
                                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setVencimento(e.target.value)} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={cadastrarCartao}>
                                Cadastrar
                            </button>
                        </div>
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
            </div>
            <Footer />
        </>
    );
}
