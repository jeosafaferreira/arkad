import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Carteira.css";
import { Link } from "react-router-dom";
export default function Carteira() {
    const [cartoes, setCartoes] = useState([]);
    const getCartoes = async () => {
        const res = await axios.get(`http://localhost:8081/cartoes/${localStorage.getItem("usuario_id")}`);
        console.log(res.data);
        setCartoes(res.data);
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
                    <div style={{ display: "flex" }}>
                        {cartoes.map((cartao) => (
                            <div className="card" style={{ marginRight: 10 }}>
                                <div className="card-inner">
                                    <div className="front">
                                        <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"></img>
                                        <div className="row">
                                            <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px"></img>
                                            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px"></img>
                                        </div>
                                        <div className="row card-no">
                                            <p>{cartao.numero}</p>
                                        </div>
                                        <div className="row card-holder">
                                            <p>{cartao.nome_impresso}</p>
                                            <p>{cartao.vencimento}</p>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"></img>
                                        <div className="bar"></div>
                                        <div className="row card-cvv">
                                            <div>
                                                <img src="https://i.ibb.co/S6JG8px/pattern.png"></img>
                                            </div>
                                            <p></p>
                                        </div>
                                        <div className="row card-text">
                                            <p></p>
                                        </div>
                                        <div className="row signature">
                                            <p>CUSTOMER SIGNATURE</p>
                                            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="80px"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
