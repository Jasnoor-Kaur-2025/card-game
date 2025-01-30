import React, { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';


// Import static assets
import player1image from './assets/player1.jpg';
import player2image from './assets/player2.avif';
import replayIcon from './assets/replay.svg';
import cardBack from './assets/cardBack.webp';

//Importing sounds
import backgroundSound from './assets/sounds/background.mp3';
import flipSoundFile from './assets/sounds/flip.mp3';
import dingSoundFile from './assets/sounds/ding.mp3';
import wrongSoundFile from './assets/sounds/wrong.mp3';
import gameOverSoundFile from './assets/sounds/gameOver.mp3';

// Import card images statically
import imgClub2 from './assets/CARDS/2Club.png';
import imgClub3 from './assets/CARDS/3Club.png';
import imgClub4 from './assets/CARDS/4Club.png';
import imgClub5 from './assets/CARDS/5Club.png';
import imgClub6 from './assets/CARDS/6Club.png';
import imgClub7 from './assets/CARDS/7Club.png';
import imgClub8 from './assets/CARDS/8Club.png';
import imgClub9 from './assets/CARDS/9Club.png';
import imgClub10 from './assets/CARDS/10Club.png';
import imgClubJ from './assets/CARDS/JClub.png';
import imgClubQ from './assets/CARDS/QClub.png';
import imgClubK from './assets/CARDS/KClub.png';
import imgClubA from './assets/CARDS/AClub.png';
import imgSpades2 from './assets/CARDS/2Spades.png';
import imgSpades3 from './assets/CARDS/3Spades.png';
import imgSpades4 from './assets/CARDS/4Spades.png';
import imgSpades5 from './assets/CARDS/5Spades.png';
import imgSpades6 from './assets/CARDS/6Spades.png';
import imgSpades7 from './assets/CARDS/7Spades.png';
import imgSpades8 from './assets/CARDS/8Spades.png';
import imgSpades9 from './assets/CARDS/9Spades.png';
import imgSpades10 from './assets/CARDS/10Spades.png';
import imgSpadesJ from './assets/CARDS/JSpades.png';
import imgSpadesQ from './assets/CARDS/QSpades.png';
import imgSpadesK from './assets/CARDS/KSpades.png';
import imgSpadesA from './assets/CARDS/ASpades.png';
import imgHeart2 from './assets/CARDS/2Heart.png';
import imgHeart3 from './assets/CARDS/3Heart.png';
import imgHeart4 from './assets/CARDS/4Heart.png';
import imgHeart5 from './assets/CARDS/5Heart.png';
import imgHeart6 from './assets/CARDS/6Heart.png';
import imgHeart7 from './assets/CARDS/7Heart.png';
import imgHeart8 from './assets/CARDS/8Heart.png';
import imgHeart9 from './assets/CARDS/9Heart.png';
import imgHeart10 from './assets/CARDS/10Heart.png';
import imgHeartJ from './assets/CARDS/JHeart.png';
import imgHeartQ from './assets/CARDS/QHeart.png';
import imgHeartK from './assets/CARDS/KHeart.png';
import imgHeartA from './assets/CARDS/AHeart.png';
import imgDia2 from './assets/CARDS/2Dia.png';
import imgDia3 from './assets/CARDS/3Dia.png';
import imgDia4 from './assets/CARDS/4Dia.png';
import imgDia5 from './assets/CARDS/5Dia.png';
import imgDia6 from './assets/CARDS/6Dia.png';
import imgDia7 from './assets/CARDS/7Dia.png';
import imgDia8 from './assets/CARDS/8Dia.png';
import imgDia9 from './assets/CARDS/9Dia.png';
import imgDia10 from './assets/CARDS/10Dia.png';
import imgDiaJ from './assets/CARDS/JDia.png';
import imgDiaQ from './assets/CARDS/QDia.png';
import imgDiaK from './assets/CARDS/KDia.png';
import imgDiaA from './assets/CARDS/ADia.png';

// Card data
const CARDS = {
  'Club2': { color: 'black', value: 2, imageURL: imgClub2 },
  'Club3': { color: 'black', value: 3, imageURL: imgClub3 },
  'Club4': { color: 'black', value: 4, imageURL: imgClub4 },
  'Club5': { color: 'black', value: 5, imageURL: imgClub5 },
  'Club6': { color: 'black', value: 6, imageURL: imgClub6 },
  'Club7': { color: 'black', value: 7, imageURL: imgClub7 },
  'Club8': { color: 'black', value: 8, imageURL: imgClub8 },
  'Club9': { color: 'black', value: 9, imageURL: imgClub9 },
  'Club10': { color: 'black', value: 10, imageURL: imgClub10 },
  'ClubJ': { color: 'black', value: 11, imageURL: imgClubJ },
  'ClubQ': { color: 'black', value: 12, imageURL: imgClubQ },
  'ClubK': { color: 'black', value: 13, imageURL: imgClubK },
  'ClubA': { color: 'black', value: 1, imageURL: imgClubA },
  'Spades2': { color: 'black', value: 2, imageURL: imgSpades2 },
  'Spades3': { color: 'black', value: 3, imageURL: imgSpades3 },
  'Spades4': { color: 'black', value: 4, imageURL: imgSpades4 },
  'Spades5': { color: 'black', value: 5, imageURL: imgSpades5 },
  'Spades6': { color: 'black', value: 6, imageURL: imgSpades6 },
  'Spades7': { color: 'black', value: 7, imageURL: imgSpades7 },
  'Spades8': { color: 'black', value: 8, imageURL: imgSpades8 },
  'Spades9': { color: 'black', value: 9, imageURL: imgSpades9 },
  'Spades10': { color: 'black', value: 10, imageURL: imgSpades10 },
  'SpadesJ': { color: 'black', value: 11, imageURL: imgSpadesJ },
  'SpadesQ': { color: 'black', value: 12, imageURL: imgSpadesQ },
  'SpadesK': { color: 'black', value: 13, imageURL: imgSpadesK },
  'SpadesA': { color: 'black', value: 1, imageURL: imgSpadesA },
  'Heart2': { color: 'red', value: 2, imageURL: imgHeart2 },
  'Heart3': { color: 'red', value: 3, imageURL: imgHeart3 },
  'Heart4': { color: 'red', value: 4, imageURL: imgHeart4 },
  'Heart5': { color: 'red', value: 5, imageURL: imgHeart5 },
  'Heart6': { color: 'red', value: 6, imageURL: imgHeart6 },
  'Heart7': { color: 'red', value: 7, imageURL: imgHeart7 },
  'Heart8': { color: 'red', value: 8, imageURL: imgHeart8 },
  'Heart9': { color: 'red', value: 9, imageURL: imgHeart9 },
  'Heart10': { color: 'red', value: 10, imageURL: imgHeart10 },
  'HeartJ': { color: 'red', value: 11, imageURL: imgHeartJ },
  'HeartQ': { color: 'red', value: 12, imageURL: imgHeartQ },
  'HeartK': { color: 'red', value: 13, imageURL: imgHeartK },
  'HeartA': { color: 'red', value: 1, imageURL: imgHeartA },
  'Dia2': { color: 'red', value: 2, imageURL: imgDia2 },
  'Dia3': { color: 'red', value: 3, imageURL: imgDia3 },
  'Dia4': { color: 'red', value: 4, imageURL: imgDia4 },
  'Dia5': { color: 'red', value: 5, imageURL: imgDia5 },
  'Dia6': { color: 'red', value: 6, imageURL: imgDia6 },
  'Dia7': { color: 'red', value: 7, imageURL: imgDia7 },
  'Dia8': { color: 'red', value: 8, imageURL: imgDia8 },
  'Dia9': { color: 'red', value: 9, imageURL: imgDia9 },
  'Dia10': { color: 'red', value: 10, imageURL: imgDia10 },
  'DiaJ': { color: 'red', value: 11, imageURL: imgDiaJ },
  'DiaQ': { color: 'red', value: 12, imageURL: imgDiaQ },
  'DiaK': { color: 'red', value: 13, imageURL: imgDiaK },
  'DiaA': { color: 'red', value: 1, imageURL: imgDiaA }
};

// Start Popup Component
const StartPopup = ({ onStart }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <h1>Match Master</h1>
      <div className="mid">
        <img src={cardBack} alt="Card Front" />
        <p>A 1V1 Game</p>
        <img src={cardBack} alt="Card Back" />
      </div>
      <button onClick={onStart}>Start Game</button>
    </div>
  </div>
);



// Main App Component
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardsWon, setCardsWon] = useState([]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState('player1');
  const [gameOver, setGameOver] = useState(false);

  const flipSound = new Audio(flipSoundFile);
  const dingSound = new Audio(dingSoundFile);
  const backSound = new Audio(backgroundSound);
  const wrongSound = new Audio(wrongSoundFile);
  const gameOverSound = new Audio(gameOverSoundFile);

  // Initialize the deck
  const createDeck = () => Object.keys(CARDS);

  // Shuffle the deck
  const shuffleDeck = (deck) => {
    const shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
  };

  // Start the game
  const handleStartGame = () => {
    const shuffledDeck = shuffleDeck(createDeck());
    setCards(shuffledDeck);
    setGameStarted(true);
    backSound.loop = true;
    backSound.volume = 0.5;
    backSound.play();
  };

  // Replay the game
  const handleReplay = () => {
    const shuffledDeck = shuffleDeck(createDeck());
    setCards(shuffledDeck);
    setFlippedCards([]);
    setSelectedCards([]);
    setCardsWon([]);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentPlayer('player1');
    setGameOver(false);
    setGameStarted(false);
    backSound.pause(); // Stop background music
    backSound.currentTime = 0;
  };

  // Handle card click
  const handleCardClick = (cardName) => {
    if (flippedCards.includes(cardName) || selectedCards.length === 2 || gameOver) return;
    flipSound.currentTime = 0; // Reset sound to start
    flipSound.play();

    const newFlippedCards = [...flippedCards, cardName];
    const newSelectedCards = [...selectedCards, cardName];

    setFlippedCards(newFlippedCards);
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      setTimeout(() => checkMatch(newSelectedCards[0], newSelectedCards[1]), 1000);
    }
  };

  const showConfetti = () => {
    confetti({
        particleCount: 200,   // Number of particles
        spread: 80,          // How far they scatter
        startVelocity: 30,    // Initial speed
        origin: { x: 0.5, y: 0.4 }, // Centered over popup
        zIndex: 9999 // Ensure it appears above everything
    });
};

  // Check if the selected cards match
  const checkMatch = (card1, card2) => {
    const cardData1 = CARDS[card1];
    const cardData2 = CARDS[card2];

    if (cardData1.value === cardData2.value && cardData1.color === cardData2.color) {
      dingSound.currentTime = 0; // Reset sound to start
      dingSound.play();
      // Update score for the current player
      if (currentPlayer === 'player1') {
        setPlayer1Score((prevScore) => prevScore + 2);
      } else {
        setPlayer2Score((prevScore) => prevScore + 2);
      }

      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img && (img.src.includes(cardData1.image) || img.src.includes(cardData2.image))) {
          card.classList.add("fall-animation"); // Add animation
        }
      });

      // Add matched cards to cardsWon
      setCardsWon((prevCardsWon) => [...prevCardsWon, card1, card2]);

      // Check if all cards are won
      if (cardsWon.length + 2 === cards.length) {
        setGameOver(true);
        backSound.pause(); // Stop background music
        gameOverSound.play()
        showConfetti();
      }
    } else {
      // Flip cards back if they don't match
      wrongSound.currentTime = 0; // Reset sound to start
      wrongSound.play();
      setFlippedCards((prevFlipped) =>
        prevFlipped.filter((card) => card !== card1 && card !== card2)
      );
    }

    // Switch players
    setCurrentPlayer((prevPlayer) => (prevPlayer === 'player1' ? 'player2' : 'player1'));
    setSelectedCards([]);
  };

  // Get card image based on flipped state
  const getCardImage = (cardName) =>
    flippedCards.includes(cardName) ? CARDS[cardName].imageURL : cardBack;

  return (
    <>
      {!gameStarted && <StartPopup onStart={handleStartGame} />}
      <header>
        <div className="player1">
          <img
            src={player1image}
            className={`playerImages ${currentPlayer === 'player1' ? 'highlight' : ''}`}
            alt="Player 1"
          />
          <div className="ScoreCard">
            <div className="crown"></div>
            <div className="score">{player1Score}</div>
          </div>
        </div>
        <div className="centre">
          <div className="Title">Match Master</div>
          <button onClick={handleReplay}>
            <img src={replayIcon} alt="Replay" />
          </button>
        </div>
        <div className="player2">
          <div className="ScoreCard">
            <div className="crown"></div>
            <div className="score">{player2Score}</div>
          </div>
          <img
            src={player2image}
            className={`playerImages ${currentPlayer === 'player2' ? 'highlight' : ''}`}
            alt="Player 2"
          />
        </div>
      </header>
      <main>
        {gameStarted && (
          <div className="card-grid">
            {cards.map((cardName, index) => (
              <div
                key={index}
                className={`card ${cardsWon.includes(cardName) ? 'fall-animation' : ''}`}
                onClick={() => handleCardClick(cardName)}
              >
                <img src={getCardImage(cardName)} alt={cardName} />
              </div>
            ))}
          </div>
        )}
        {gameOver && (
          <div className='over-popup-overlay'>
            <div className="game-over-popup">
              <h2>Game Over!</h2>
              <p>
                {player1Score > player2Score
                  ? 'Player 1 Wins!'
                  : player2Score > player1Score
                    ? 'Player 2 Wins!'
                    : "It's a Tie!"}
              </p>
              <button onClick={handleReplay}>Play Again</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;