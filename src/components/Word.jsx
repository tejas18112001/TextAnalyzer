import React from 'react'
import './Word.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Word = () => {
    const [inputWord, setInputWord] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [wordDetails, setWordDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [def, setDef] = useState('');
    const [partOfSpeech, setPartOfSpeech] = useState('');
    const [antonyms, setAntonyms] = useState('');
    const [synonyms, setSynonyms] = useState('');

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;
                const response = await axios.get(url);
                setWordDetails(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();


    }, [inputWord]);



    const handleInputChange = (event) => {
        const word = event.target.value;
        setInputWord(word);
        setCharacterCount(word.length);
    };

    const printData = () => {

    


        if (wordDetails && wordDetails.length > 0) {
            const meanings = wordDetails[0].meanings[0];
            setDef(meanings.definitions[0].definition || '');
            setSynonyms(meanings.synonyms || '');
            setAntonyms(meanings.antonyms || '');
            setPartOfSpeech(meanings.partOfSpeech || '');
        }


        console.log(wordDetails[0].meanings[0].definitions[0].definition) ;
        console.log(wordDetails[0].meanings[0].synonyms) ;
        console.log(wordDetails[0].meanings[0].antonyms) ;
        console.log(wordDetails[0].meanings[0].partOfSpeech) ;


    }
    return (
        <div>


            <div className='cnt' >

                <input
                    className='int'
                    type="text"
                    id="inputWord"
                    value={inputWord}
                    onChange={handleInputChange}
                    placeholder="Type a word"
                ></input>

                <button className='btn text' onClick={printData}>Process Word</button>
            </div>
            <div>

                <div className="statistics-row">
                    <div className="statistics-column">Words</div>
                    <div className="statistics-column">Characters</div>
                </div>


                <div className="statistics-row">
                    <div className="statistics-column">{inputWord}</div>
                    <div className="statistics-column">{characterCount}</div>
                </div>

            </div>


            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="details">
                    <table className="details-table">
                        <tbody>
                            <tr className="details-row">
                                <td className="details-column">Definition:</td>
                                <td className="details-column">{def}</td>
                            </tr>
                            <tr className="details-row">
                                <td className="details-column">Part of Speech:</td>
                                <td className="details-column">{partOfSpeech}</td>
                            </tr>
                            <tr className="details-row">
                                <td className="details-column">Synonyms:</td>
                                <td className="details-column">{synonyms}</td>
                            </tr>
                            <tr className="details-row">
                                <td className="details-column">Antonyms:</td>
                                <td className="details-column">{antonyms}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}


        </div>
    )
}

export default Word;