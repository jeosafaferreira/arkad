import './Login.css'
export default function Login(){
    return (
        // Content Wrapper. Contains page content
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Increva-se</h1>
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
                {/* Default box */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Inscreva-se</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Inscreva-se</h3>
                            </div>
                                <form>
                                    <div className='forms-google'>
                                        <div className='log-google'>
                                            <span>Faça login com Google</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='teste'>
                                            <hr></hr>
                                            <span>Ou faça o login com seu email</span>
                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="exemplo@ex.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Senha</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                                    </div>
                                    <div className='link'>
                                        <a href='/recuperar_senha'>Esqueceu sua senha?</a>
                                    </div>
                                    </div>
                                    <div className="card-footer">
                                    <button type="submit" className="btn_entrar">Entrar</button>
                                    <div className='link_new_user'>
                                        <span className='novo-por-aqui'>Novo por aqui?</span>
                                        <a href='/inscrever'>Inscreva-se</a>
                                    </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">Footer</div>
                    {/* /.card-footer */}
                </div>
                {/* /.card */}
            </section>
            {/* /.content */}
        </div>
        //   /.content-wrapper
    )
}
