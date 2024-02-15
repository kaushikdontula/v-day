import React, { useState, useEffect } from 'react';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Animated hearts background component
function HeartsBackground() {
  return (
    <div className="hearts-background">
      {/* You can add CSS animation for the hearts background */}
      <div className="heart"></div>
      <div className="heart"></div>
      <div className="heart"></div>
      <div className="heart"></div>
      <div className="heart"></div>
      <div className="heart"></div>
      <div className="heart"></div>
      <div className="heart"></div>
    </div>
  );
}

function PictureGallery() {
  // Array of images of you and your girlfriend
  const images = [
    { src: 'image1.png', rotate: 0 }, // Default rotation
    { src: 'image2.png', rotate: 0 }, // Default rotation
    { src: 'image3.png', rotate: 0 }, // Default rotation
    { src: 'image4.png', rotate: 0 }, // Default rotation
    { src: 'image5.png', rotate: 0 }, // Default rotation
    { src: 'image6.png', rotate: 90 }, // Rotate right by 90 degrees
    { src: 'image7.png', rotate: -90 }, // Rotate left by 90 degrees
    { src: 'image8.png', rotate: 0 } // Default rotation
    // Add more images as needed
  ];

  // Settings for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Show one item at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="picture-gallery">
      <h2>Some memories with My Love (2023-2024)</h2>
      <Carousel 
        responsive={responsive}
        showDots={true} // Show the indicator bar
        partialVisible={true} // Show only one picture at a time
      >
        {images.map((image, index) => (
          <div key={index} style={{ transform: `rotate(${image.rotate}deg)` }}>
            <img src={`/v-day/${image.src}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}


// Cute moments paragraph component
function CuteMoments() {
  return (
    <div className="cute-moments">
      <h2>Cute Moments</h2>
      <p>Remember the time we... first met in the plane. Obviously we met prior to that but who knew one plane ride would bring us this close together. I dont usually believe in right place right time but image if we never went on vacation
        at the same time as one another. I dont think we would have ever gotten that close. Thinking about it now its crazy. Anyways, Happy valentines day baby G. I love you so much and am so happy to be able to spend 6 valentines days wth you. 
        You make me incredibly happy. I am so glad to have you in my life and share so many amazing memories with you. I am eager to see what the future holds for us, and what we have in store for eachother. You never fail to amaze me and make me proud of you.
        I hope you have an amazing V day, and I hope this page can be useful for next year too. I love you. 
      </p>
    </div>
  );
}

function Quiz({ onQuizComplete }) {
  // Quiz questions about you and your relationship
  const questions = [
    { 
      question: 'What is my favorite color to wear?',
      options: ['White', 'Black', 'Beige', 'Brown'],
      answer: 'White' 
    },
    { 
      question: 'Where was our first kiss?',
      options: ['Westview tree', 'South Park', 'My house', 'WV Hallway'],
      answer: 'Westview tree' 
    },
    { 
      question: 'My favorite vacation destination?',
      options: ['Dubai', 'India', 'Tropical places'],
      answer: 'Dubai' 
    },
    { 
      question: 'What do I want to pursue a career in, in 10 years? ',
      options: ['Real estate', 'Finance', 'Business', 'Computer Science'],
      answer: 'Real estate' 
    },
    { 
      question: 'Where does my motivation come from? ',
      options: ['My parents', 'People around me', 'Circumstances', 'Myself'],
      answer: 'Myself' 
    },
    { 
      question: 'Whats my favorite nickname to call you? ',
      options: ['Baby G', 'Missy', 'Gaytree', 'babes'],
      answer: 'Baby G' 
    },
    { 
      question: 'What song reminds me of you?',
      options: ['Euphoria', 'A LOT OF ME', 'What you need', 'Perfect'],
      answer: 'What you need' 
    },
    { 
      question: 'What class did I skip the most to come see you in HS? ',
      options: ['AP bio', 'Pre calc', 'AT', 'Spanish'],
      answer: 'Spanish' 
    },
    { 
      question: 'What is my dream car? ',
      options: ['Range Rover SVA', 'Rolls Royce Cullinan', 'Bentley Bentayga', 'Mercedes G wagon'],
      answer: 'Rolls Royce Cullinan' 
    },
    { 
      question: 'What is my favorite place to be kissed? ',
      options: ['Lips', 'Forehead', 'Neck', 'Upper cheek'],
      answer: 'Upper cheek' 
    },
    // Add more questions
  ];

  // State to manage user selected answers
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));

  // State to manage modal display
  const [showModal, setShowModal] = useState(false);

  // Function to handle user selection of an answer
  const handleOptionSelect = (event, index) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = event.target.value;
    setUserAnswers(updatedAnswers);
  };

  // Function to calculate user's score
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].answer) {
        score++;
      }
    });
    return score;
  };

  useEffect(() => {
    if (calculateScore() >= 10) {
      setShowModal(true);
      onQuizComplete(true);
    }
  }, [userAnswers]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    // You can display the score in the modal
    console.log('User Score:', calculateScore());
  };

  return (
    <div className="quiz">
      <h2>How Well Do You Know Me?</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={(event) => handleOptionSelect(event, index)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Your Score</h2>
            <p>Your score is: {calculateScore()}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [showImage100, setShowImage100] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [noHovered, setNoHovered] = useState(false);
  const [scoreModalVisible, setScoreModalVisible] = useState(false);
  const [byeModalVisible, setByeModalVisible] = useState(false);
  const [noButtonModalVisible, setNoButtonModalVisible] = useState(false);

  const handleQuizComplete = (isComplete) => {
    setShowImage100(isComplete);
  };

  const handleYesButtonClick = () => {
    setByeModalVisible(true);
  };

  const handleNoButtonClick = () => {
    setNoButtonModalVisible(true);
  };

  const handleCloseModals = () => {
    setScoreModalVisible(false);
    setByeModalVisible(false);
    setNoButtonModalVisible(false);
  };

  const handleCloseImage100Modal = () => {
    setShowImage100(false);
  };

  return (
    <div className="App">
      <HeartsBackground />
      <header className="App-header">
        <h1 style={{ color: 'white' }}>Happy 6th Valentine's Day together Baby G</h1>
      </header>
      <div className="content">
        {!showImage100 && (
          <>
            <PictureGallery />
            <CuteMoments />
            <Quiz onQuizComplete={handleQuizComplete} />
          </>
        )}
        {showImage100 && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={handleCloseImage100Modal}>X</button>
              <h2 style={{ color: 'white' }}>Yay! You know me now.</h2>
              <div className="image-container">
                <img
                  src="/v-day/image100.png"
                  alt="Image 100"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />
              </div>
              <div className="buttons">
                <button onClick={handleNoButtonClick} onMouseEnter={() => setNoHovered(true)} onMouseLeave={() => setNoHovered(false)}>
                  {noHovered ? 'Yes' : 'No'}
                </button>
                <button onClick={handleYesButtonClick}>Yes</button>
              </div>
            </div>
          </div>
        )}
        {scoreModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2 style={{ color: 'white' }}>Your Score</h2>
              <button onClick={handleCloseModals}>Close</button>
            </div>
          </div>
        )}
        {byeModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2 style={{ color: 'white' }}>Bye! See you next year</h2>
              <div className="heart-animation"></div>
              <button onClick={handleCloseModals}>Close</button>
            </div>
          </div>
        )}
        {noButtonModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2 style={{ color: 'white' }}>That's so sad :( Maybe next year I guess...</h2>
              <div className="heart-animation"></div>
              <button onClick={handleCloseModals}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
