import React from 'react'
import './HomePage.css'
import Paragraph from './Paragraph'
import Word from './Word'
import { useState } from 'react'
const HomePage = () => {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleButtonClick = (component) => {
        setSelectedComponent(component);
    };
    return (
        <div className="Layout">
            <div className='Layout-2'>
                <div className='Typography'>
                    Text Analyzer
                </div>

                <div className='Typography-p'>
                    Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.
                </div>
            </div>

            <div className='button-container'>
                <button className='btn1' onClick={() => handleButtonClick(<Word />)}> World Input </button>
                <button className='btn2' onClick={() => handleButtonClick(<Paragraph />)}> Paragraph </button>


            </div>


            <div>
                {selectedComponent}
            </div>


        </div>
    )
}

export default HomePage;