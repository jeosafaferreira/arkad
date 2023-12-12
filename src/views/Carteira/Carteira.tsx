import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Carteira.css";
import { Link } from "react-router-dom";
import Cards from "react-credit-cards-2";
export default function Carteira() {
    const [cartoes, setCartoes] = useState([]);
    const [showButton, setShowButton] = useState(null);

    const getCartoes = async () => {
        const res = await axios.get(`http://54.207.8.179:8081/cartoes/${localStorage.getItem("usuario_id")}`);
        console.log(res.data);
        setCartoes(res.data);
    };

    const [focusedCard, setFocusedCard] = useState(null);

    const deleteCard = (id) => {
        axios
            .delete(`http://54.207.8.179:8081/cartoes/${id}`)
            .then(() => {
                setCartoes((prevCards) => prevCards.filter((cartao) => cartao.cartao_id !== id));
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    };

    useEffect(() => {
        getCartoes();
    }, []);

    return (
        <>
            <TopBar />
            <SideBar />
            {/* Content Wrapper. Contains page content*/}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6" style={{ display: "flex" }}>
                                <div>
                                    <h1>Carteira</h1>
                                </div>
                                <div style={{ marginLeft: 20 }}>
                                    <Link to="/novoCartao">
                                        <button type="button" className="btn btn-success">
                                            Cadastrar Cartão
                                        </button>
                                    </Link>
                                </div>
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
                    {/* /.card */}
                    <div className="App-cards">
                        <div className="App-cards-list">
                            {cartoes.map((cartao) => (
                                <div
                                    key={cartao.cartao_id}
                                    onMouseOver={() => {
                                        setFocusedCard(cartao.cartao_id);
                                        console.log(focusedCard);
                                        setTimeout(() => {
                                            setShowButton(cartao.cartao_id);
                                        }, 100);
                                    }}
                                    onMouseOut={() => {
                                        setFocusedCard(null);
                                        setTimeout(() => {
                                            setShowButton(null);
                                        }, 100);
                                    }}
                                >
                                    <Cards number={cartao.number} expiry={cartao.expiry} name={cartao.name} cvc={cartao.cvc} focused={focusedCard === cartao.cartao_id ? "cvc" : ""} />
                                    {/* /.DELET DOS CARTOES */}
                                    {showButton === cartao.cartao_id ? (
                                        <button
                                            type="button"
                                            className="btn btn-danger fixed-top deletButton"
                                            onClick={() => {
                                                console.log("Button clicked");
                                                deleteCard(cartao.cartao_id);
                                            }}
                                        >
                                            Excluir
                                        </button>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
            </div>
            <Footer />
        </>
        //   /.content-wrapper
    );
}
