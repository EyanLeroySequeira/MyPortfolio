import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './profile.css';
import ProfileImg from './profileImg.png';

export function Profile() {
  const [isVisible, setIsVisible] = useState(true);

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
          <h1>Hi there, <br /><span id='profilename'> I'm Eyan Leroy Sequeira</span>
            {isVisible && (
              <Typewriter
                options={{
                  strings: ['CSE student', '2nd year'],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </h1>

          <p>" A passionate and dedicated student who explore and research in the trendy technology. "</p>
        </div>
      </div>
    </div>


  );
}


