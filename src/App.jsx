import React, { useState, useEffect } from 'react';

function App() {
  const [display, setDisplay] = useState('Drum Pad');
  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      playAudio(key, document.getElementById(key)?.parentElement?.id || key);
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  function playAudio(audioId, audioName) {
    const audio = document.getElementById(audioId);
    audio.play();
    setDisplay(audioName);

    setActiveButton(true);

    document.getElementById(audioId).parentElement.classList.add("clicked");

    setTimeout(() => {
      document.getElementById(audioId).parentElement.classList.remove("clicked");
      setActiveButton(false);
    }, 300); 
  }
  return (
    <> 
    <main id="drum-machine">
    <div className="darker"></div>

      <div id="display">
        <div className="screen">
          <p>FCC-DRUM MACHINE</p>
          <h1>{display}</h1>
          <p>By Evocati</p>
        </div>
        <div className="buttons">
          <button onClick={() => playAudio('Q', 'Heater-1')} className='drum-pad' id='Heater-1'>Q
            <audio  className='clip' id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </button>
          <button onClick={() => playAudio('W', 'Heater-2')} className='drum-pad' id='Heater-2'>W
            <audio className='clip' id="W"  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
          </button>
          <button onClick={() => playAudio('E', 'Heater-3')} className='drum-pad' id='Heater-3'>E
          <audio className='clip' id="E"  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
          </button>
          <button onClick={() => playAudio('A', 'Heater-4' )} className='drum-pad' id='Heater-4'>A
            <audio className='clip' id="A"  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
          </button>
          <button onClick={() => playAudio('S', 'Clap')} className='drum-pad' id='Clap'>S
            <audio className='clip' id="S"  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          </button>
          <button onClick={() => playAudio('D', 'Open-HH')} className='drum-pad' id='Open-HH'>D
            <audio className='clip' id="D"  src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          </button>
          <button onClick={() => playAudio('Z', 'Kick-n-Hat')} className='drum-pad' id='Kick-n-Hat'>Z
            <audio className='clip' id="Z"  src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          </button>
          <button onClick={() => playAudio('X', 'Kick')} className='drum-pad' id='Kick'>X
            <audio className='clip' id="X"  src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          </button>
          <button onClick={() => playAudio('C', 'Closed-HH')} className='drum-pad' id='Closed-HH'>C
            <audio className='clip' id="C"  src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
          </button>
        </div>
        <div className="volume"></div>
      </div>
    </main>

    </>
  )
}

export default App
