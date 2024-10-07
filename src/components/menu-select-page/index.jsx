import { useState } from 'react';
import SelectPage from '../select-page';

export default function MenuSelectPage() {
  const [hovered, setHovered] = useState([false, false, false]);

  const sizes = ['w-3/5 h-full object-cover transition-all duration-500', 'w-1/3 h-full object-cover transition-all duration-500'];
  
  const colors = ['bg-slate-950', 'bg-slate-800', 'bg-slate-600'];

  const titles = ['Lista de projetos', 'Guilherme Arendt', 'Contato'];
  const buttonTitles = ['Ver projetos', 'Sobre mim', 'Fale comigo'];
  const navigation = ['#projects', '#about', '#contact']

  const handleMouseEnter = (index) => {
    setHovered((prevHovered) => prevHovered.map((h, i) => (i === index ? true : h)));
  };

  const handleMouseLeave = (index) => {
    setHovered((prevHovered) => prevHovered.map((h, i) => (i === index ? false : h)));
  };

  return (
    <div className="flex h-[70vh] overflow-x-hidden w-full">
      {titles.map((title, index) => (
        <div
          key={index}
          className={`${colors[index]} ${hovered[index] ? sizes[0] : sizes[1]} flex items-center justify-center`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <SelectPage
            title={title}
            button_title={buttonTitles[index]}
            color_title="white"
            button_background="white"
            button_text={buttonTitles[index]}
            button_text_color="white"
            navigation={navigation[index]}
          />
        </div>
      ))}
    </div>
  );
}
