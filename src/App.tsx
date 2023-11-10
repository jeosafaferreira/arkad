import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Carteira from "./views/Carteira/Carteira";
import ArkadPlus from "./views/ArkadPlus/ArkadPlus";
import Transacoes from "./views/Transacoes/Transacoes";
import Suporte from "./views/Suporte/Suporte";

export default function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                {/*Navbar*/}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                                <i className="fas fa-bars"></i>
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    {/*Right navbar links*/}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search*/}
                        <li className="nav-item">
                            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i className="fas fa-search"></i>
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/*Messages Dropdown Menu*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-comments"></i>
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                    {/*Message Start*/}
                                    <div className="media">
                                        <img src="src/assets/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger">
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted">
                                                <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/*Message End*/}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/*Message Start*/}
                                    <div className="media">
                                        <img src="src/assets/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted">
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted">
                                                <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/* Message End*/}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/*Message Start*/}
                                    <div className="media">
                                        <img src="src/assets/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning">
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted">
                                                <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/*Message End*/}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">
                                    See All Messages
                                </a>
                            </div>
                        </li>
                        {/*Notifications Dropdown Menu*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell"></i>
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2"></i> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-file mr-2"></i> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">
                                    See All Notifications
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i className="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                                <i className="fas fa-th-large"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* .navbar  Main Sidebar Container*/}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="/" className="brand-link">
                        <img src="src/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                        <span className="brand-text font-weight-light">ARKAD</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="src/assets/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">
                                    Nome do Usuário
                                </a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon className with font-awesome or any other icon font library */}
                                <li className="nav-item">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Dashboard</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/carteira" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Carteira
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/transacoes" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Transações
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/arkadplus" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Arkad +<span className="right badge badge-danger">New</span>
                                        </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/suporte" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Suporte
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        {/* .sidebar-menu */}
                    </div>
                    {/* .sidebar */}
                </aside>

<<<<<<< HEAD
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="teste" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/carteira" element={<Carteira />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                    <Route path="/arkadplus" element={<ArkadPlus />} />
                    <Route path="/suporte" element={<Suporte />} />
                </Routes>
                <footer className="main-footer">
                    <strong>
                        Copyright &copy; 2023 <a href="#">ARKAD</a>. &nbsp;
                    </strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 0.0.1
                    </div>
                </footer>
                <aside className="control-sidebar control-sidebar-dark">Control sidebar content goes here</aside>
            </div>
        </BrowserRouter>
    );
>>>>>>> main
}
