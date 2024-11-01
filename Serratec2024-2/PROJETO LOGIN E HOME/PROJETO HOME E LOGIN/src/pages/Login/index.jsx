import ButtonComponent from "../../components/ButtonComponents";
import { InputField } from "../../components/InputField";
import { Container, Tittle, ContentForms } from "./style";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/images/linkedin-logologotyp-us-1.png';

export const Login = () => {
  const handleLogin = () => {
    alert("Login");
  };

  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div >
          <a className="navbar-brand" href="#">
            <img 
              src={logo}
              alt="Logo" 
              style={{ width: '250px', height: '200px', paddingLeft: '50px', paddingRight: '10px'}} 
            />
          </a>
        </div>
    
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <img src="./src/assets/images/artigo.png" alt="icone artigos" className="nav-effect" style={{ width: '30px', height: '30px' }} />
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
               <ButtonComponent title="Cadastre-se agora " handleFunction={() => alert("Cadastrar")} variant="secondary" />
                <ButtonComponent title="Entrar" handleFunction={handleLogin} variant="primary" />
         
          </div>
        </div>
      </nav>  

      <div style={{ display: 'flex',justifyContent:"space-between", padding: '20px' }}>
        <div >
          <ContentForms >
            <Tittle>Conheça sua comunidade profissional</Tittle>
            <ButtonComponent title="Continue as Marina"/>
            <InputField placeholder="Digite sua senha" type="password" />
          </ContentForms>
        </div>
        <div className="text-center" style={{padding: '20px'}}>
          <img 
            src="./src/assets/images/image.png" 
            alt="imagem central linkedin" 
            style={{ width: '100%', height: '100%'  }} 
          />
        </div>
      </div>
    </Container>
  );
};
