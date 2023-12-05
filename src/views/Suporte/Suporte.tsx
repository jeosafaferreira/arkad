import "./Suporte.css";
import InputMask from "react-input-mask";
import { Call, Sms } from "iconsax-react";
import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";

export default function Suporte() {
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
                                <h1>Suporte</h1>
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
                    {/* Default box */}
                    <div className="card" style={{width : 'auto' , height : 'auto'}}>
                        <div className="card-header">
                            <h3 className="card-title">Suporte</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="forms">
                                <div className="Main-Card">
                                    <div className="forms-1">
                                        <label htmlFor="nomeCompleto">Nome Completo</label>
                                        <input type="text" id="nomeCompleto" name="nomeCompleto" placeholder="Nome Completo" />
                                        <div className="forms-3">
                                            <label htmlFor="telefone">Telefone</label>
                                            <InputMask mask="+99 (99) 9 9999 9999" maskChar="_" id="telefone" name="telefone" placeholder="+55 (__) 9 ____-____" />
                                        </div>
                                    </div>
                                    <div className="forms-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Email"></input>
                                        <div className="forms-4">
                                            <label htmlFor="assunto">Assunto</label>
                                            <input type="text" id="assunto" name="assunto" placeholder="Assunto"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="final-forms">
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem" rows={10}></textarea>
                                </div>
                                <div className="button-enviar">
                                    <button id="btn-enviar" name="btn-enviar">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                            <div className="contatos">
                                <div className="email-contato">
                                    <Sms className="email_icon" />
                                    <div className="text-email">
                                        <strong>
                                            <h5>Fale conosco via E-mail</h5>
                                        </strong>
                                        <h6 className="email_arkad">suporte@arkad.com.br</h6>
                                    </div>
                                </div>
                                <div className="telefone-contato">
                                    <Call className="phone_icon" />
                                    <div className="text-telefone">
                                        <strong>
                                            <h5>SAC</h5>
                                        </strong>
                                        <h6 className="phone_arkad">+55 85 3333-0987</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">Footer</div>
                        {/* /.card-footer */}
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
            </div>
            <Footer />
        </>
    );
}
