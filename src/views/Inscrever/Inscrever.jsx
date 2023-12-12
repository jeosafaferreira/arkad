import './Inscrever.css';
import InputMask from 'react-input-mask';
export default function Inscrever(){
    return (
        <div className='card'>
            <form style={{width : '46%'}}>
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
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Ao marcar concordo com os <a href='/termos'>termos e condições</a></label>
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
    )
}