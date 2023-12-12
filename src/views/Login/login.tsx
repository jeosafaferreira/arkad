import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login2() {
    const [txtEmail, setTxtEmail] = useState("");
    const [txtSenha, setTxtSenha] = useState("");
    const navigate = useNavigate();

    function logar() {
        axios
            .post(`http://54.207.8.179:8081/login`, {
                email: txtEmail,
                senha: txtSenha,
            })
            .then(function (response) {
                console.log(response.data);
                if (response.data.authorized) {
                    localStorage.setItem("usuario_id", response.data.usuario_id);
                    localStorage.setItem("usuario_nome", response.data.nome);
                    navigate("/dashboard");
                } else {
                    alert("Combinação de login e senha inválida.");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={{ display: "grid", justifyItems: "center", width: "100%", paddingTop: "150px" }}>
            <div style={{ width: "400px" }}>
                <div className="forms-google">
                    <div className="log-google">
                        <span>
                            Faça login com <strong>Google</strong>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="span-email">
                        <hr></hr>
                        <span>
                            Ou faça login com seu <strong>email</strong>
                        </span>
                        <hr></hr>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email</label>
                        <input type="email" className="form-control" id="InputEmail1" onChange={(e) => setTxtEmail(e.target.value)} placeholder="exemplo@ex.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Senha</label>
                        <input type="password" className="form-control" id="InputPassword1" onChange={(e) => setTxtSenha(e.target.value)} placeholder="Senha" />
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn_entrar" onClick={logar}>
                        Entrar
                    </button>
                    <div className="link_new_user">
                        <span className="novo-por-aqui">Ainda não possui uma conta?</span>
                        <a href="/inscrever">Cadastre-se</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
