import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/50780573?s=460&u=311a87cef91c91424ce668527ab4676bfea62026&v=4" alt="André Assef"/>
                <div>
                    <strong>André Assef</strong>
                    <span>Java</span>
                </div>
            </header>
            <p>
                Entusiasta da segurança da informação e Javeiro.
                <br /> <br />
                Apaixonado por novas tecnologias, todos os dias busca por aprender algo novo.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$20,0</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="icone do whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;