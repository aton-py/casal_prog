import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contato" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Que tal fazer aquela sua ideia acontecer?'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://api.whatsapp.com/send?phone=5573988064753&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20posso%20Criar%20o%20meu%20Site%20ou%20Aplicativo.'}
            >
              {btn || "Converse Conosco"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
