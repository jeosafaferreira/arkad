import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

export default function Carteira() {
    return (
        // Content Wrapper. Contains page content
        <nav className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Carteira</h1>
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
            <div className="main-content">
                <div className="salaryInfo">
                    <div className="ml-4 mt-2">
                        <h6 className="salaryInfo-text mt-4">Mês Atual</h6>
                        <h2 className="mt-4">R$ 2500,00</h2>
                    </div>
                    <FontAwesomeIcon className="mt-auto mb-auto" icon={faChartSimple} size="2xl" style={{ color: "#005eff" }} />
                    <hr className="hrVertical"></hr>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"></img>
                            <div className="row">
                                <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px"></img>
                                <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px"></img>
                            </div>
                            <div className="row card-no">
                                <p>5244</p>
                                <p>2150</p>
                                <p>8252</p>
                                <p>6420</p>
                            </div>
                            <div className="row card-holder">
                                <p>CARD HPLDER</p>
                                <p>VALID TILL</p>
                            </div>
                            <div className="row name">
                                <p>JOE ALISON</p>
                                <p>10 / 25</p>
                            </div>
                        </div>
                        <div className="back">
                            <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"></img>
                            <div className="bar"></div>
                            <div className="row card-cvv">
                                <div>
                                    <img src="https://i.ibb.co/S6JG8px/pattern.png"></img>
                                </div>
                                <p>824</p>
                            </div>
                            <div className="row card-text">
                                <p>this is a virtual card design using HTML and CSS. You can aslo design something like this.</p>
                            </div>
                            <div className="row signature">
                                <p>CUSTOMER SIGNATURE</p>
                                <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="80px"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        //   /.content-wrapper
    );
}
