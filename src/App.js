import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Componentes/GlobalStyle"
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import Login from "./Pages/Login";
import CadastroCurriculo from "./Pages/CadastroCurriculo";
import Cadastro from "./Pages/Cadastro";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Cadastro/>}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastro-curriculo" element={<CadastroCurriculo />} />
            {/*<Cadastro></Cadastro>*/}
            {/*<Login></Login>*/}
            {/*<CadastroCurriculo></CadastroCurriculo>*/}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
