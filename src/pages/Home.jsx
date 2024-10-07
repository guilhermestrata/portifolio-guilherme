import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageCarousel from '../components/carousel-langs';
import Chronology from '../components/chronology';
import MenuSelectPage from '../components/menu-select-page';
import Navbar from '../components/navbar';
import Section from '../components/section';
import SectionTitle from '../components/section-title';
import ProjectList from '../components/projects';
import "../App.css"
import Form from '../components/form';
import Footer from '../components/footer';


const projectsData = [
    {
        id: 1,
        name: 'Gerenciador de Finanças Pessoais',
        description: 'O Gerenciador de Finanças Pessoais é uma aplicação console em C# que permite aos usuários realizar o controle de suas transações.',
        githubLink: 'https://github.com/guilhermestrata/GerenciadorFinancasPessoais',
    },
    {
        id: 2,
        name: 'Servidor em Rede Wi-fi',
        description: 'Servidor local que carrega uma página HTML utilizando o componente ESP32',
        githubLink: 'https://github.com/guilhermestrata/server-esp32',
    },
    {
        id: 3,
        name: 'Cultivo Mind',
        description: 'Startup de meditação com o serviço para funcionários de empresas',
        githubLink: 'https://github.com/guilhermestrata/cultivo-front',
    },
    {
        id: 4,
        name: 'Snake Game Hack',
        description: 'Automação em Python que é capaz de sempre vencer o jogo do Google: Snake Game',
        githubLink: 'https://github.com/guilhermestrata/SnakeHack',
    },
];

export default function Home(){
    return (
        <Router>
          <div data-theme="mytheme">
            <Navbar />
            <MenuSelectPage />
            <SectionTitle title="Technologies" />
            <ImageCarousel />
            <SectionTitle title="About Me" />
            <Section />
            <Chronology />
            <SectionTitle title="Projects List" />
            <Routes>
              <Route path="#projects" element={<ProjectList projects={projectsData} />} />
            </Routes>
            <SectionTitle title="Contact" />
            <Form/>
            <Footer/>
          </div>
        </Router>
      );
}

