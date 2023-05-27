import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import googlePlus from "../../images/google-plus.png";
import instagram from "../../images/instagram.png";
import linkedIn from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="content">
        <img
          src="https://locacaodesites.com.br/barber/themes/barber_three/img/logo.png"
          alt="Brand"
        />
        <br />
        <p className="description">
          Our barbershop is the created for men who appreciate premium quality,
          time and flawless look.
        </p>
        <br />
        <div className="icon-row">
          <a href="http://">
            <img src={facebook} alt="social-icon" />
          </a>
          <a href="http://">
            <img src={googlePlus} alt="social-icon" />
          </a>
          <a href="http://">
            <img src={instagram} alt="social-icon" />
          </a>
          <a href="http://">
            <img src={linkedIn} alt="social-icon" />
          </a>
          <a href="http://">
            <img src={twitter} alt="social-icon" />
          </a>
        </div>
      </div>

      <div className="content">
        <div className="title"> Onde Estamos</div>
        <div>Av Marcechal Floriano Peixoto,</div>
        <div>1001 - São Paulo | SP</div>
        <br />
        <div>contato@worcontrol.com.br </div>
        <div> (48) 3371-5879</div>
      </div>

      <div className="content">
        <div className="title">Funcionamento</div>
        <div>Segunda - Sexta: 09:00 - 19:00</div>
        <br />
        <div>Sábado: 08:00 - 19:00</div>
        <br />
        <div>Domingo - Fechado</div>
      </div>
      <div className="content">
        <div className="title">Newsletter</div>
        <input
          placeholder="Seu melhor E-mail"
          type="email"
          className="input-email"
        />
        <button type="button" className="button-email">
          Inscrever-se
        </button>
      </div>
    </div>
  );
}
