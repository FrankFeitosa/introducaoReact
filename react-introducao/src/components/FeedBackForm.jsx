import React, { useState } from "react";
import './FeedBackForm.css'


const FormFeeedback = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [comentario, setComentario] = useState('')

    const chamarAlert = () => {
        alert(`Nome: ${nome}\n ${email}\n ${comentario}`)
    }

    return (
        <>
            <div className="principal">
                <div className="cadastro">
                    <h1>Cadastro</h1>
                    <form action="">
                        <div className="div">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" onChange={(e) => {setNome(e.target.value)}} placeholder="Digite seu nome aqui" required />
                        </div>

                        <div className="div">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" onChange={(e) => {setEmail(e.target.value)}} id="email" placeholder="Digite seu email aqui" required />
                        </div>
                        <div className="div">
                            <label>Mensagem:</label>
                            <textarea  onChange={(e) => {setComentario(e.target.value)}} name="mensagem" id="mensagem" required></textarea>
                        </div>
                        <button className="button" onClick={chamarAlert}>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormFeeedback;