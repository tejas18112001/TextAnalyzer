

// StatisticsDisplay.js

import React, { useEffect, useState } from 'react';
import './statistics.css';

const StatisticsDisplay = ({ content }) => {
  const [statistics, setStatistics] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    spaces: 0,
    punctuations: 0,
  });

  useEffect(() => {
   
    calculateStatistics(content);
  }, [content]);

  const calculateStatistics = (text) => {
    
    const characters = text.length;
    const words = text.split(/\s+/).filter((word) => word !== '').length;
    const sentences = text.split(/[.!?]+/).filter((sentence) => sentence !== '').length;
    const paragraphs = text.split('\n\n').filter((paragraph) => paragraph !== '').length;
    const spaces = text.split(' ').length - 1;
    const punctuations = text.split(/[.,;:!?(){}\[\]\-\–\"\'\`]/).filter((punct) => punct !== '').length;

    setStatistics({
      characters,
      words,
      sentences,
      paragraphs,
      spaces,
      punctuations,
    });
  };

  return (
    <div className="statistics-container">
      <div className="statistics-row">
        <div className="statistics-column">Characters</div>
        <div className="statistics-column">Words</div>
        <div className="statistics-column">Sentences</div>
        <div className="statistics-column">Paragraphs</div>
        <div className="statistics-column">Spaces</div>
        <div className="statistics-column">Punctuations</div>
      </div>
      <div className="statistics-row">
        <div className="statistics-column">{statistics.characters}</div>
        <div className="statistics-column">{statistics.words}</div>
        <div className="statistics-column">{statistics.sentences}</div>
        <div className="statistics-column">{statistics.paragraphs}</div>
        <div className="statistics-column">{statistics.spaces}</div>
        <div className="statistics-column">{statistics.punctuations}</div>
      </div>
    </div>
  );
};

export default StatisticsDisplay;
