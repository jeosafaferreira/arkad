import './Inscrever.css';
import InputMask from 'react-input-mask';
export default function Inscrever(){
    return (
        // Content Wrapper. Contains page content
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Inscreva-se</h1>
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
                    <div className="card-body" >
                        <div className="card card-primary">
                            <form>
                                    <div className='forms-google'>
                                        <div className='log-google'>
                                            <span>Inscreva-se com <strong>Google</strong></span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='span-email'>
                                            <hr></hr>
                                            <span>Ou inscreva-se com seu <strong>email</strong></span>
                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                    <div className="form-group-names">
                                        <div className="form-group-name">
                                            <label htmlFor="InputName">Nome</label>
                                            <input type="text" className="form-control" id="InputName" placeholder="Nome" />
                                        </div>
                                        <div className="form-group-surname">
                                            <label htmlFor="InputSurname">Sobrenome</label>
                                            <input type="text" className="form-control" id="InputSurname" placeholder="Sobrenome" />
                                        </div>
                                        <div className="form-group-telefone">
                                            <label htmlFor="InputTelefone">Telefone</label>
                                            <InputMask
                                            mask="+99 (99) 9 9999 9999"
                                            maskChar="_"
                                            id="InputTelefone"
                                            name="telefone"
                                            placeholder='+55 (__) 9 ____-____'
                                        />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                            <label htmlFor="InputEmail1">Email</label>
                                            <input type="email" className="form-control" id="InputEmail1" placeholder="exemplo@ex.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="InputPassword1">Senha</label>
                                        <input type="password" className="form-control" id="InputPassword1" placeholder="Senha" />
                                    </div>
                                    <div className='link'>
                                        <a href='/recuperar_senha'>Esqueceu sua senha?</a>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Ao marcar concordo com os <a href='/termos'>termos e condições</a></label>
                                    </div>
                                    </div>
                                    <div className="card-footer">
                                    <button type="submit" className="btn_entrar">Entrar</button>
                                    <div className='link_new_user'>
                                        <span className='novo-por-aqui'>Já possui uma conta?</span>
                                        <a href='/login'>Login</a>
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