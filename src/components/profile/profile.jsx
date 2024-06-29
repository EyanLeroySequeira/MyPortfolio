import React, { useState, useEffect } from 'react';
import './profile.css';
import ProfileImg from './profileImg.png';

// Custom hook for typewriter effect
function useTypewriterEffect(strings, delay = 2000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const fullText = strings[currentIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, strings, delay, currentIndex]);

  return displayedText;
}

export function Profile() {
  const [isVisible, setIsVisible] = useState(true);
  const typedText = useTypewriterEffect(['CSE student', '2nd year']);

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Adjust the delay as needed
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div>
      <div className='profile' id='home'>
        <div>
          <img src={ProfileImg} className='ProfileImg' alt="" />
        </div>
        <div>
          <h1>Hi there, <br /><span id='profilename'> I'm Eyan Leroy Sequeira</span><br />
            {isVisible && <span className="typewriter">{typedText}</span>}
          </h1>
          <p>" A passionate and dedicated student who explores and researches in trendy technology. "</p>
        </div>
      </div>
    </div>
  );
}
