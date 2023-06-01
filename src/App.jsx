import './App.css'
import Cliente from './components/cliente'
import Footer from './components/Footer'
import Contato from './components/contato'
import Menu from './components/menu'
import { BrowserRouter as Navegador, Routes, Route } from 'react-router-dom';
function App() {
return (
<>
<Navegador>
<Menu />
<Routes>
<Route exact path="/" element={"Página Home em manutenção"} />
<Route path="/cliente" element={<Cliente />} />
<Route path="/servico" element={"Página Serviços emmanutenção"} />
<Route path="/sobre" element={"Página Sobre em manutenção"} />
<Route path="/contato" element={<Contato />} />
</Routes>
</Navegador>
<Footer />
</>
)
}
export default App;