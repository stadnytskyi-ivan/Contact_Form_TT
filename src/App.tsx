import './App.scss';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Footer } from './components/Footer/Footer';
import { Container } from './containers/Container';

function App() {
  return (
    <Container >
      <div>
       <p className='link'> Contact Me</p>
      </div>
      <section className='section'>
        <p className='section__text'>
          Let me know if you want to talk
          about a potential collaboration.
          I'm available for freelance work.
        </p>
        <a href='mailto:infoname@mail.com' className='section__email'>infoname@mail.com</a>
      </section>
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default App;
