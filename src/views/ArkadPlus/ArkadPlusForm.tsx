import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ArkadPlus() {
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const navigate = useNavigate();

    function salvar() {
        axios
            .post(`http://54.207.8.179:8081/artigos`, {
                titulo: titulo,
                texto: texto,
            })
            .then(function (response) {
                if (response.status == 200) {
                    navigate("/arkadplus");
                } else {
                    alert("Erro ao cadastrar artigo!");
                }
            })
            .catch(function (error) {
                alert("Erro ao cadastrar artigo!");
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
                                <h1>Arkad+</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Carteira</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                    <div className="col-md-6">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Novo Artigo</h3>
                            </div>

                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Título:</label>
                                    <input type="email" className="form-control" onChange={(e) => setTitulo(e.target.value)} placeholder="Insira o título" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputFile">Texto:</label>
                                    <div className="input-group">
                                        <textarea class="form-control" rows="3" onChange={(e) => setTexto(e.target.value)} placeholder="Texto do artigo ..."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-success" onClick={salvar}>
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>
            <Footer />
        </>
    );
}
