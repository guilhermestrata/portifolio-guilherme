import React from 'react';
import { Link } from 'react-router-dom';

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
        description: 'Servidor local que carrega uma página HTML utilizando o componente ESP32 e exibe em um IP local',
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

export default function ProjectList() {
    return (
        <div id="projects" className="mt-16 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mb-16">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="border-0 bg-zinc-900 rounded-lg p-4 shadow-2xl hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-xl text-white font-semibold mb-2">{project.name}</h2>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="mt-4">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
