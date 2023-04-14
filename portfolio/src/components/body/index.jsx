import React from "react";
import Avatar from "../../img/avatar.jpeg";
import Competicao from "../../img/img-7.jpeg";
import Palestra from "../../img/img-1.jpeg";
import Palestra2 from "../../img/img-5.jpeg";
import Nasa from "../../img/img-6.jpeg";

import Facens from "../../img/facens.png";
import Cps from "../../img/cps.png";
import Spotify from "../../img/spotify.png";

import Linkedin1 from "../../img/img-linkedin-1.png";
import Linkedin2 from "../../img/img-linkedin-2.png";
import Linkedin3 from "../../img/img-linkedin-3.png";

import LinkedinIcon from "../../img/icon-linkedin.png";
import GitHubIcon from "../../img/icon-github.png";

import Whats from "../../img/whatsapp.png";
import Insta from "../../img/Insta.png";
import Email from "../../img/email.png";

import "./style.css";

const Body = () => {
  return (
    <div>
      <div className="body">
        <div className="about-simple">
          <h1>Olá! Eu sou o Fabrício.</h1>
          <h3>
            Sou estudante de Análise e desenvolvimento de sistemas, <br />
            já trabalhei como desenvolvedor Front-End por mais de <br />
            um 1 ano. Conheça mais sobre mim e meus projetos!
          </h3>
        </div>
      </div>
      <div id="sobremim" className="about">
        <div>
          <h1>Sobre Mim</h1>
        </div>
        <div className="content-2">
          <p>
            Olá, me chamo Fabrício, tenho 19 anos. Tenho experiência em
            desenvolvimento de software, mais especifícamente desenvolvimento
            Front-End, com lingugens web (HTML, CSS e javaScript), já atuei
            também com React.js, e tenho conhecimentos básicos em Java, C# e
            PHP. Tenho inglês intermediário e Espanhol básico.
          </p>
          <img className="content-avatar" src={Avatar} alt="foto" />
        </div>
        <div className="content-3">
          <img className="content-avatar-2" src={Competicao} alt="foto" />
          <p>
            Já participei de um campeonato de robótica internacional, junto com
            o centro universitário Facens enquanto ainda estava no ensino médio,
            foi um experiência engrandecedora, utilizei programação em arduino
            na competição, além claro do contanto com pessoas de outros países,
            no formato online. Saimos em diversos canais de notícias e tive a
            honra de dar um entrevista a rádio de Tatuí.
            <p className="saber-mais">Acesse para sabe mais!</p>
            <div className="redes-socias">
              <a
                className="spotify"
                href="https://open.spotify.com/episode/2TSREAZ9nQDegQTjo2OFhg?si=IqBCKijASIuj6AyZNWxzKQ"
                target="_blank"
              >
                <img className="logo" src={Spotify} alt="logo" />
              </a>
              <a
                className="cps"
                href="https://www.cps.sp.gov.br/equipe-cps-tem-bom-desempenho-em-campeonato-mundial-de-robotica/"
                target="_blank"
              >
                <img className="logo" src={Cps} alt="logo" />
              </a>
              <a
                className="facens"
                href="https://blog.facens.br/academia-de-robotica-facens-e-destaque-em-competicao-internacional/"
                target="_blank"
              >
                <img className="logo" src={Facens} alt="logo" />
              </a>
            </div>
          </p>
        </div>
        <div className="content-4">
          <p>
            Durante uma recente apresentação, tive a oportunidade de
            compartilhar com os presentes um vislumbre do futuro da tecnologia,
            além de transmitir meu conhecimento sobre programação. Foi também
            uma ocasião ideal para discutir a competição internacional de
            robótica na qual participei, uma experiência inestimável que, sem
            dúvida, moldou meu percurso profissional. Além disso, aproveitei a
            oportunidade para falar sobre minha própria experiência em
            programação e como ela me permitiu desbravar novos horizontes. Por
            fim, falei sobre a competição internacional de robótica na qual tive
            a honra de participar. A tecnologia é uma força transformadora e,
            como profissionais, é nosso dever estar sempre em busca de novos
            desafios e soluções para moldar um futuro melhor. 👨‍💻
          </p>
          <div className="img-content-4">
            <img className="content-avatar-4" src={Palestra} alt="foto" />
            <img className="content-avatar-4" src={Palestra2} alt="foto" />
          </div>
        </div>
        <div className="content-5">
          <p>
            No dia 15/03/2022 tive a honra de assistir a uma palestra sobre a
            Nasa e o futuro da exploração espacial, no Centro Universitário
            Facens com o Ex-engenheiro da NASA - National Aeronautics and Space
            Administration Gabe Gabrielle. Sempre fui apaixonado por tecnologia
            e todas suas derivadas, mas também o espaço e a astronomia sempre
            foram minha paixão, e poder assistir a palestra e conhecer de perto
            o Gabe Gabrielle e conhecer sua história de superação e dedicação
            para alcançar um lugar tecnicamente inimaginável, foi sensacional!
            “Escreva seus objetivos e trace metas pequenas porque a cada
            conquista você vai se sentir mais confiante. Até que um dia dirá 'eu
            posso'” - Gabe Gabrielle. 🚀
          </p>
          <img className="content-avatar-5" src={Nasa} alt="foto" />
        </div>
      </div>
      <h1 id="projetos" className="projects">
        Projetos
      </h1>
      <div className="projects-body">
        <h4 className="projects-sub">
          Três Projetos que desenvolvi, utilizando React.js e as linguagens web
          (HTML, CSS e JavaScript). <br />
          Postei no Linkedin, mas também tenho outros projetos em outras
          linguagens.
        </h4>
        <div className="imagens-projetos">
          <div>
            <a
              href="https://www.linkedin.com/posts/fabricio-francisco-ribeiro-junior_react-github-typescript-activity-7052618077670170624--EP1?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <img className="linkedin-1" src={Linkedin1} alt="linkedin-1" />
            </a>
            <h4>GitHub Finder</h4>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/posts/fabricio-francisco-ribeiro-junior_javascript-html-css-activity-7049791275046215680-vT5W?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <img className="linkedin-1" src={Linkedin2} alt="linkedin-2" />
            </a>
            <h4>Clone WhatsApp</h4>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/posts/fabricio-francisco-ribeiro-junior_eusoudiocampusexpert-frontend-site-activity-6930192741549113344-ksPP?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <img className="linkedin-1" src={Linkedin3} alt="linkedin-3" />
            </a>
            <h4>Medflix (Clone da Netflix)</h4>
          </div>
        </div>
        <div className="code">
          <a
            className="github"
            href="https://github.com/faabriciojunior"
            target="_blank"
          >
            <img className="icon-project" src={GitHubIcon} alt="" />
            <h1>GitHub</h1>
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/fabricio-francisco-ribeiro-junior/"
            target="_blank"
          >
            <img className="icon-project" src={LinkedinIcon} alt="" />
            <h1>Linkedin</h1>
          </a>
        </div>
      </div>
      <h1 id="contato" className="projects">
        Contato
      </h1>
      <div className="contato">
        <a href="https://wa.me/5515998250150" target="_blank">
          <div className="whats">
            <img className="icon-contato" src={Whats} alt="" />
            WhatsApp
          </div>
        </a>
        <a href="https://www.instagram.com/faabriciojr/" target="_blank">
          <div className="insta">
            <img className="icon-contato" src={Insta} alt="" />
            Instagram
          </div>
        </a>
        <a href="mailto:fabriciojunior48@gmail.com">
          <div className="email">
            <img className="icon-contato" src={Email} alt="" />
            Enviar Email
          </div>
        </a>
      </div>
    </div>
  );
};

export default Body;
