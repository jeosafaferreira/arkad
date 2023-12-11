import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import InputMask from "react-input-mask";
import { IMask } from "react-imask";
import { IMaskInput } from "react-imask";
import "./styles.css";
import TopBar from "../../Components/TopBar";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";

const CardCredit = () => {
    const [state, setState] = useState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
        issuer: "",
        focused: "",
        formData: null,
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
        <>
            <TopBar />
            <SideBar />
            <div className="app">
                <div className="app_CardCredit">
                    <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
                </div>
                <div className="app_CardForm">
                    <form>
                        <div className="borderForm">
                            <div className="app_CardForm_inputCardNumber">
                                <label>Número do Cartão</label>
                                <InputMask className="app_CardForm_inputCardNumber" mask="9999 9999 9999 9999" maskChar="•" name="number" placeholder="Número do Cartão" value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} />
                            </div>
                            <div className="app_CardForm_inputCardName">
                                <label>Nome no Cartão</label>
                                <input type="text" name="name" placeholder="Nome no Cartão" maxLength={26} value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
                            </div>
                            <div className="app_CardForm_inputCardDate">
                                <label>Expiração (mm/aa)</label>
                                <IMaskInput
                                    mask="MM{/}YY"
                                    lazy={false}
                                    blocks={{
                                        MM: {
                                            mask: IMask.MaskedRange,
                                            from: 1,
                                            to: 12,
                                        },
                                        YY: {
                                            mask: IMask.MaskedRange,
                                            from: 23,
                                            to: 38,
                                        },
                                    }}
                                    name="expiry"
                                    value={state.expiry}
                                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                    onAccept={(value, mask) => handleInputChange({ target: { name: "expiry", value } })}
                                    onFocus={handleInputFocus}
                                    type="text"
                                />
                            </div>
                            <div className="app_CardForm_inputCardCVC">
                                <label>Código de segurança</label>
                                <InputMask mask="9999" maskChar="" type="cvc" id="cvc" name="cvc" placeholder="Cartão CVC/CVV" value={state.cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
                            </div>
                        </div>
                        <div className="m-auto d-flex divbotao">
                            <button type="submit" className="btn btn-success">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CardCredit;
