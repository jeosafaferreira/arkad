import { NavLink } from "react-router-dom";

export default function SideBar() {
    return (
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
                        <img src="src/assets/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">
                            {localStorage.getItem("usuario_nome")}
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
                                <p>Carteira</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/transacoes" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>Transações</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/arkadplus" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>Arkad +</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/suporte" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>Suporte</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* .sidebar-menu */}
            </div>
            {/* .sidebar */}
        </aside>
    );
}
