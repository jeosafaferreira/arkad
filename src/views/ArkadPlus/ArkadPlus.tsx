import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ArkadPlus() {
    const [artigos, setArtigos] = useState([]);

    const getArtigos = async () => {
        const res = await axios.get(`http://54.207.8.179:8081/artigos/`);
        console.log(res.data);
        setArtigos(res.data);
    };

    useEffect(() => {
        getArtigos();
    }, []);

    return (
        <>
            <TopBar />
            <SideBar />
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6" style={{ display: "flex" }}>
                                <h1>Arkad+</h1>
                                <div style={{ marginLeft: 20 }}>
                                    <Link to="/arkadplusform">
                                        <button type="button" className="btn btn-success">
                                            Cadastrar Artigo
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
                    <div className="row">
                        {artigos.map((artigo) => (
                            <div className="col-md-4">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">{artigo.titulo}</h3>
                                    </div>
                                    <div className="card-body">{artigo.texto}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* /.content */}
            </div>
            <Footer />
        </>
    );
}
