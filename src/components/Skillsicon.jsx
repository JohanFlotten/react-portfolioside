import React from 'react';
import skills from '../components/skills.module.css';
import iconsData from '../components/skills.json';

export default function Skillicon() {
  return (
    <div className={skills.container}>
      {iconsData.map((icon, index) => (
        <div key={index} className={skills.programs}>
          <img 
            src={icon.image} 
            alt={icon.text} 
            className={skills.programimg} 
          />
          <h3 className={skills.iconTitle}>{icon.title}</h3>
          <p>{icon.text}</p>
        </div>
      ))}
    </div>
  );
}
