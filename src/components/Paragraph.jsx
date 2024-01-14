// ParagraphContainer.js

import React, { useState } from 'react';
import './Paragraph.css';
import StatisticsDisplay from './StatisticsDisplay'

const ParagraphContainer = () => {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="paragraph-container">
      <textarea
        className="paragraph-input"
        placeholder="Type, or copy/paste your content here."
        value={content}
        onChange={handleChange}
      />
      {content === '' && (
        <div className="default-message">Type, or copy/paste your content here.</div>
      )}
      <StatisticsDisplay content={content} />
    </div>
  );
};

export default ParagraphContainer;
