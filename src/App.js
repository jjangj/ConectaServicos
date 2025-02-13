import GlobalStyle from "./Componentes/GlobalStyle"
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import Login from "./Pages/Login";
import CadastroCurriculo from "./Pages/CadastroCurriculo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle></GlobalStyle>
        {/*<Cadastro></Cadastro>*/}
        <Login></Login> 
        {/*<CadastroCurriculo></CadastroCurriculo>*/}
      </header>
    </div>
  );
}

export default App;
