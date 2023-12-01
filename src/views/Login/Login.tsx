import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        <div>
            <input type="email" name="email" onChange={(e) => setTxtEmail(e.target.value)} placeholder="E-mail" />
            <br />
            <input type="password" name="pswd" onChange={(e) => setTxtSenha(e.target.value)} placeholder="Senha" />
            <button onClick={logar}>Logar</button>
        </div>
    );
}
