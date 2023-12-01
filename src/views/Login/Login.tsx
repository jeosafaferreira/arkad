import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
export default function Login() {
    const [txtEmail, setTxtEmail] = useState("");
    const [txtSenha, setTxtSenha] = useState("");
    const navigate = useNavigate();

    function logar() {
        axios
            .post(`http://localhost:8081/login`, {
                email: txtEmail,
                senha: txtSenha,
            })
            .then(function (response) {
                console.log(response.data);
                if (response.data.authorized) {
                    localStorage.setItem("usuario_id", response.data.usuario_id);
                    localStorage.setItem("usuario_nome", response.data.nome);
                    navigate("/");
                } else {
                    alert("Combinação de login e senha inválida.");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <body className="hold-transition login-page">
                <div className="login-box">
                    <div className="card card-outline card-primary" style={{ height: 500 }}>
                        <div className="card-header text-center" style={{ color: "black" }}>
                            <a href="../../index2.html" className="h1">
                                <b>A</b>rkad
                            </a>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg" style={{ color: "black" }}>
                                Iniciar Sessão
                            </p>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" onChange={(e) => setTxtEmail(e.target.value)} placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" onChange={(e) => setTxtSenha(e.target.value)} placeholder="Senha" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember" style={{ color: "black" }}>
                                            Lembrar
                                        </label>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <button className="btn btn-primary btn-block" onClick={logar}>
                                        Entrar
                                    </button>
                                </div>
                            </div>
                            <div className="social-auth-links text-center mt-2 mb-3">
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i> Entrar com Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2"></i> Entrar com Google
                                </a>
                            </div>

                            <p className="mb-1">
                                <a href="forgot-password.html">Recuperar Senha</a>
                            </p>
                            <p className="mb-0">
                                <Link to="/inscrevase" className="text-center">
                                    Inscreva-se
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <script src="../../plugins/jquery/jquery.min.js"></script>

                <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="../../dist/js/adminlte.min.js?v=3.2.0"></script>
            </body>
        </>
    );
}
