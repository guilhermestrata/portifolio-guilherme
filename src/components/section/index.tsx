import React from "react";
import Guilherme from "../../assets/guilherme.png";

export default function Section() {
    return (
        <div className="flex items-center justify-center mb-16 mt-16"> 
            <div id="about" className="flex items-start"> 
                <img 
                    src={Guilherme} 
                    alt="Guilherme" 
                    className="ml-32 rounded-lg w-1/6 h-auto object-cover mr-4" 
                />
                <p className="flex-1 max-w-5xl text-left rounded-md text-base font-medium"> 
                    🚀 Apaixonado por programação desde os 13 anos, comecei minha jornada escrevendo códigos no bloco de notas e desde então nunca mais parei de aprender e crescer nesse fascinante universo da tecnologia.<br/><br/>
                    🎓 Meu interesse pela área me levou a cursar o Ensino Médio Técnico na FIAP, onde tive a oportunidade de aprimorar minhas habilidades em desenvolvimento de software e tecnologia da informação. Durante esse período, consegui um estágio na LIS, onde pude aplicar na prática os conhecimentos adquiridos em sala de aula, vivenciando o ambiente dinâmico e desafiador do mercado de trabalho.<br/><br/>
                    💡 Além disso, tive o privilégio de contribuir para o desenvolvimento de um projeto de TCC, a Colde Labs. Essa iniciativa inovadora tem como objetivo ensinar programação para crianças de forma divertida e acessível. Essa experiência não apenas me permitiu aplicar meus conhecimentos técnicos, mas também desenvolver habilidades de liderança, trabalho em equipe e comunicação, enquanto ajudava a inspirar a próxima geração de programadores.
                </p>
            </div>
        </div>
    );
}
