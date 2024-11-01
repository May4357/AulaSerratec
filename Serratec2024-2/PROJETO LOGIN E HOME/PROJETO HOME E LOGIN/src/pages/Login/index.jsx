import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, Tittle, ContentForms } from "./style";
import 'bootstrap/dist/css/bootstrap.css';

export const Login = () => {
  const handleLogin = () => {
    alert("Login");
  };

  return (
    <Container>
      {/* Menu de Navegação */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
          <img 
            src="./src/assets/images/linkedin-logologotyp-us-1.png" 
            alt="Logo" 
            style={{ width: '250px', height: '200px' }} 
          />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <img 
                src="./src/assets/images/artigo.png" 
                alt="icone artigos" 
                className="nav-effect" 
                style={{ width: '30px', height: '30px' }} 
              />
              <a className="nav-link nav-effect" href="#">Artigos</a> 
            </li>
            <li className="nav-item active">
              <img 
                src="./src/assets/images/pessoas.png" 
                alt="icone pessoas" 
                className="nav-effect" 
                style={{ width: '30px', height: '30px' }} 
              />
              <a className="nav-link nav-effect" href="#">Pessoas</a>
            </li>
            <li className="nav-item active">
              <img 
                src="./src/assets/images/conteudo-de-video.png" 
                alt="icone learning" 
                className="nav-effect" 
                style={{ width: '30px', height: '30px' }} 
              />
              <a className="nav-link nav-effect" href="#">Learning</a>
            </li>
            <li className="nav-item active">
              <img 
                src="./src/assets/images/mala-de-viagem.png" 
                alt="icone vagas" 
                className="nav-effect" 
                style={{ width: '30px', height: '30px' }} 
              />
              <a className="nav-link nav-effect" href="#">Vagas</a>
            </li>
            <li className="nav-item active">
              <img 
                src="./src/assets/images/quebra-cabeca.png" 
                alt="icone jogos" 
                className="nav-effect" 
                style={{ width: '30px', height: '30px' }} 
              />
              <a className="nav-link nav-effect" href="#">Jogos</a>
            </li>
            <li className="nav-item active">
              <img
                src="./src/assets/images/smartphones.png"
                alt="icone aplicativo"
                className="nav-effect"
                style={{ width: '30px', height: '30px' }}
              />
              <a className="nav-link nav-effect" href="#">Baixe o aplicativo</a>
            </li>
          </ul>

          <div className="btn-group me-2" role="group" aria-label="Group for buttons">
            <button type="button" className="btn btn-primary">Entrar</button>
          
          </div>
          <div className="btn-group me-2" role="group" aria-label="Group for buttons">
          
            <button type="button" className="btn btn-secondary">Cadastrar</button>
          </div>
        </div>
      </nav>

      {/* Formulário de Login */}
      <ContentForms style={{ marginTop: '100px' }}>
        <Tittle>Conheça sua comunidade profissional</Tittle>
        <InputField placeholder="Digite seu login" type="email" />
        <InputField placeholder="Digite sua senha" type="password" />
        <Button title="Entrar" handleFunction={handleLogin} />
      </ContentForms>
    </Container>
  );
};
