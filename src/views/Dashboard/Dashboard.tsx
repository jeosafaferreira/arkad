import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

export default function Dashboard() {
    return (
        <div className="wrapper">
            <TopBar />
            <SideBar />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            {/* .col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                            {/* .col */}
                        </div>
                        {/* .row */}
                    </div>
                    {/* .container-fluid */}
                </div>
                {/* .content-header  Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>1</h3>

                                        <p>Cartão Cadastrado</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Ver mais <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>R$0.00</h3>

                                        <p>Total de receitas</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Ver mais <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>R$0.00</h3>

                                        <p>Movimentado esse mês</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Ver mais <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>R$0.00</h3>

                                        <p>Total de despesas</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Ver mais <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                        </div>
                        {/* .row Main row .row (main row) */}
                    </div>
                    {/* .container-fluid */}
                </section>
                {/* .content */}
            </div>
            {/* .content-wrapper */}
            <Footer />
        </div>
        //  ./wrapper
    );
}
