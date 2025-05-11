import React, { useState } from 'react';
import './App.css';
import lowScoreSound from './sounds/low-score.mp3';

const quizData = [
    { question: 'Which of these is primarily used for running JavaScript code on the server (back-end)?', options: ['React.js', 'Bootstrap', 'Node.js', 'Vite'], correctAnswer: 'Node.js' },
    { question: 'When a React project uses TypeScript, what is the common file extension for its components?', options: ['.js', '.html', '.tsx', '.css'], correctAnswer: '.tsx' },
    { question: 'Which npm package is typically used for styling and designing the front-end (user interface) of a website?', options: ['cors', 'body-parser', 'bootstrap', 'uuid'], correctAnswer: 'bootstrap' }
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Check the score and play the low-score sound if necessary
            if (score + (selectedAnswer === quizData[currentQuestion].correctAnswer ? 1 : 0) <= 2) {
                const lowScoreAudio = new Audio(lowScoreSound);
                lowScoreAudio.play();
            }
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
    };

    return (
        <div className="app">
            <div className="container">
                <h1 className='quiz-app-head'>Quiz App</h1>
                {showResult ? (
                    <div className="result">
                        <p>Your score: {score} out of {quizData.length}</p>
                        <button onClick={restartQuiz}>Restart Quiz</button>
                    </div>
                ) : (
                    <>
                        <div className="question">
                            <p>{quizData[currentQuestion].question}</p>
                        </div>
                        <div className="options">
                            {quizData[currentQuestion].options.map((option, index) => (
                                <button 
                                    key={`${quizData[currentQuestion].question}-${option}`} 
                                    className="option" 
                                    onClick={() => handleAnswerClick(option)} 
                                    onKeyPress={(e) => e.key === 'Enter' && handleAnswerClick(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
        
    );
}

export default App;