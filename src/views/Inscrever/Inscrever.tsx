import "./Inscrever.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Inscrever() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function cadastrar() {
        axios
            .post(`http://54.207.8.179:8081/usuarios`, {
                nome: nome,
                sobrenome: sobrenome,
                telefone: telefone,
                email: email,
                senha: senha,
            })
            .then(function (response) {
                if (response.status == 200) {
                    alert("Usuário cadastrado com sucesso!");
                    navigate("/");
                } else {
                    alert("Erro ao cadastrar usuário!");
                }
            })
            .catch(function (error) {
                alert("Erro ao cadastrar usuário!");
                console.log(error);
            });
    }

    return (
        <div className="card" style={{ alignItems: "center" }}>
            <div style={{ width: "46%" }}>
                <div className="forms-google">
                    <div className="log-google">
                        <span>
                            Inscreva-se com <strong>Google</strong>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="span-email">
                        <hr></hr>
                        <span>
                            Ou inscreva-se com seu <strong>email</strong>
                        </span>
                        <hr></hr>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group-names">
                        <div className="form-group-name">
                            <label htmlFor="InputName">Nome</label>
                            <input type="text" className="form-control" onChange={(e) => setNome(e.target.value)} id="InputName" placeholder="Nome" />
                        </div>
                        <div className="form-group-surname">
                            <label htmlFor="InputSurname">Sobrenome</label>
                            <input type="text" className="form-control" id="InputSurname" onChange={(e) => setSobrenome(e.target.value)} placeholder="Sobrenome" />
                        </div>
                        <div className="form-group-telefone">
                            <label htmlFor="InputTelefone">Telefone</label>
                            <InputMask mask="+99 (99) 9 9999 9999" maskChar="_" id="InputTelefone" onChange={(e) => setTelefone(e.target.value)} name="telefone" placeholder="+55 (__) 9 ____-____" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email</label>
                        <input type="email" className="form-control" id="InputEmail1" onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@ex.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Senha</label>
                        <input type="password" className="form-control" id="InputPassword1" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn_entrar" onClick={cadastrar}>
                        Entrar
                    </button>
                    <div className="link_new_user">
                        <span className="novo-por-aqui">Já possui uma conta?</span>
                        <a href="/"> Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
