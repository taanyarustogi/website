import React, { useState, useRef } from 'react';
import resume from './assets/resume.pdf';
import backdrop from './assets/backdrop.png';
import background from './assets/bg.jpg';
import flrtrx from './assets/flrtrx.png';
import stockbot from './assets/stockbot.JPG';
import openhardwaresoftware from './assets/openhardwaresoftware.jpg';
import aiapp from './assets/aiapp.png';
import bird from './assets/bird.png';
import emg from './assets/emg.png';
import nom from './assets/nom.png';
import reversiimg from './assets/reversiimg.png';
import radio from './assets/radio.png';
import reversi from './assets/reversi.png';
import nomnom from './assets/nomnom.png';
import pan from './assets/pan.png';
import fpga from './assets/fpga.png';
import dumbell from './assets/dumbell.png';
import camera from './assets/camera.png';
import birdicon from './assets/birdicon.png';

const UnpackingPortfolio = () => {
  // list of projects
  const [objects, setObjects] = useState([
  {
    id: 1,
    type: 'stockbot',
    icon: camera,
    x: 100,
    y: 100,
    width: 70,
    height: 70,
    inBag: false,
    zIndex: 10,
    project: {
      title: "StockBot (in progress)",
      description:
        "Designing and implementing an ESP32-based system to monitor pantry inventory in real time. Includes a remote interface for tracking items while shopping and automated notifications for low stock and upcoming expirations.",
      images: 
        stockbot,
      tech: "ESP32, Embedded Systems, Python, IoT, App Development",
      view: "https://docs.google.com/presentation/d/1olr2paYcHYYIWHtFXocYWbgQ2hPXPqaJYeVT4CKDrjI",
      github: "https://github.com/toriiiii/stockbot"
    }
  },
  {
    id: 2,
    type: 'ai',
    icon: pan,
    x: 100,
    y: 200,
    width: 60,
    height: 80,
    inBag: false,
    zIndex: 10,
    project: {
      title: "AI Recipe Generator",
      description:
        "An iOS app that uses AI APIs to generate recipes from available pantry items. Features include serving-size scaling, ingredient tracking, and dynamic grocery lists for an intuitive real-time user experience.",
      tech: "Swift, Xcode, AI APIs, iOS Development",
      images: aiapp,
      view: "https://drive.google.com/file/d/12TP1qXZlxVbga3_7wW4M9BtyDldzIMJr",
      github: "https://github.com/taanyarustogi/eKitchen"
    }
  },
  {
    id: 3,
    type: 'flrtrx',
    icon: radio,
    x: 100,
    y: 320,
    width: 80,
    height: 80,
    inBag: false,
    zIndex: 10,
    project: {
      title: "FLRTRX – Flexible Ratio Transceiver Interface",
      description:
        "Developed the local oscillator and TX/RX switch for a flexible ratio transceiver. Built circuits from scratch, manufactured PCBs, and programmed a microcontroller in C++ using I2C to control PLL-driven sine wave outputs.",
      tech: "C++, Microcontrollers, I2C, PCB Design, Hardware Design",
      images: flrtrx,
      view: "https://docs.google.com/presentation/d/1U-UCQcbWW-04myiy5HvKbdaJrexeT2GVG5jEgvj3ZEM",
      github: "https://github.com/taanyarustogi/MCU-code"
    }
  },
  {
    id: 4,
    type: 'hardware',
    icon: fpga,
    x: 100,
    y: 440,
    width: 80,
    height: 80,
    inBag: false,
    zIndex: 10,
    project: {
      title: "Open Hardware / Software Project",
      description:
        "Created a keyboard-controlled game running on a DE1-SoC board. Worked with interrupts, VGA output, double buffering, and ARM assembly to build a basic compiler capable of running C code on hardware.",
      tech: "C, ARM Assembly, FPGA, DE1-SoC, VGA",
      images: openhardwaresoftware,
      view: "",
      github: "https://github.com/taanyarustogi/assembly-and-verilog/blob/main/final-project/final-project.c"
    }
  },
  {
    id: 5,
    type: 'reversi',
    icon: reversi,
    x: 100,
    y: 560,
    width: 70,
    height: 70,
    inBag: false,
    zIndex: 10,
    project: {
      title: "Reversi Game",
      description:
        "Implemented a fully playable Reversi game in C, featuring a computer opponent that evaluates the best possible move using multiple decision-making algorithms.",
      tech: "C, Algorithms, Game Logic",
      images: reversiimg,
      view: "", 
      github: "https://github.com/taanyarustogi/reversi-lab"
    }
  },
  {
    id: 6,
    type: 'bird',
    icon: birdicon,
    x: 100,
    y: 680,
    width: 80,
    height: 80,
    inBag: false,
    zIndex: 10,
    project: {
      title: "Bird Image Classifier",
      description:
        "Built a deep learning model to classify bird species from images using convolutional neural networks. Included data preprocessing, training/testing splits, and performance optimization through error analysis.",
      tech: "Python, PyTorch, TensorFlow, CNNs",
      images: bird,
      view: "https://drive.google.com/file/d/1zbbFvQEj6fz6HrSUWVSErEIrUPzy7KVb",
      github: "https://colab.research.google.com/drive/1FvdsKCLCxbxO0EHVM2FMdYIBWPEfMAag"
    }
  },
  {
    id: 7,
    type: 'emg',
    icon: dumbell,
    x: 100,
    y: 800,
    width: 80,
    height: 80,
    inBag: false,
    zIndex: 10,
    project: {
      title: "EMG Sensor Imaging System",
      description:
        "Designed and built EMG sensors using op-amps for amplification and filtering. Programmed an ESP32 to visualize muscle activation strength on an LED strip using bar graphs and heat maps.",
      tech: "ESP32, Python, Signal Processing",
      images: emg,
      view: "https://drive.google.com/file/d/1KM3gtVFC1qHhzRq7yLnZnHxG5M4Owd5p",
      github: ""
    }
  },
  {
    id: 8,
    type: 'nomnom',
    icon: nomnom,
    x: 100,
    y: 800,
    width: 80,
    height: 80,
    inBag: false,
    zIndex: 10,
    project: {
      title: "Nomnom Useless Robot",
      description:
        "Designed and built an useless robot that 'eats' using an Arduino microcontroller programmed in Python, IR sensor and 3D printed parts. Completed in 3rd place in the 'useless' category at MakeUofT.",
      tech: "Arduino, Python, Embedded Systems, 3D Modelling",
      images: nom,
      view: "https://devpost.com/software/noom-noom",
      github: "https://github.com/toriiiii/makeuoft/tree/main"
    }
  }
]);
  
  const [dragging, setDragging] = useState(null);
  const [viewMode, setViewMode] = useState('game');
  const [puzzleComplete, setPuzzleComplete] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const [typingStep, setTypingStep] = useState(0);
  const [placementOrder, setPlacementOrder] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [topZIndex, setTopZIndex] = useState(100);
  const dragOffset = useRef({ x: 0, y: 0 });

  const fullText = "I am currently a 4th year Computer Engineering student at the University of Toronto looking for new grad full-time opportunities.";

  React.useEffect(() => {
    if (!showIntro) return;
    
    // animation timing for intro
    const timers = [
      setTimeout(() => setTypingStep(1), 500),
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [showIntro]);

  React.useEffect(() => {
    if (typingStep !== 1) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setTypingStep(2), 500);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [typingStep]);
  
  const BAG = {
    x: 400,
    y: 150,
    width: 400,
    height: 450
  };

  // collision detection using AABB
  const checkCollision = (obj1, obj2) => {
    return !(
      obj1.x + obj1.width <= obj2.x ||
      obj1.x >= obj2.x + obj2.width ||
      obj1.y + obj1.height <= obj2.y ||
      obj1.y >= obj2.y + obj2.height
    );
  };

  const isInsideBag = (obj) => {
    return (
      obj.x >= BAG.x &&
      obj.y >= BAG.y &&
      obj.x + obj.width <= BAG.x + BAG.width &&
      obj.y + obj.height <= BAG.y + BAG.height
    );
  };

  const handleMouseDown = (e, obj) => {
    // when puzzle is complete, no dragging
    if (puzzleComplete) {
      setActivePopup(obj.id);
      return;
    }
    // calculate offset
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    setDragging(obj.id);
    setErrorMessage('');
    
    // bring to front
    const newZ = topZIndex + 1;
    setTopZIndex(newZ);
    setObjects(objects.map(o => 
      o.id === obj.id ? { ...o, zIndex: newZ } : o
    ));
  };

  const handleMouseMove = (e) => {
    if (!dragging || puzzleComplete) return;
    
    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;
    
    // calculate and update new position
    const rect = gameArea.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.current.x;
    const newY = e.clientY - rect.top - dragOffset.current.y;
    
    setObjects(objects.map(obj => 
      obj.id === dragging 
        ? { ...obj, x: newX, y: newY }
        : obj
    ));
  };

  const handleMouseUp = () => {
    if (!dragging || puzzleComplete) return;
    
    const draggedObj = objects.find(o => o.id === dragging);
    if (!draggedObj) return;
    // update inBag
    const insideBag = isInsideBag(draggedObj);
    const otherObjects = objects.filter(o => o.id !== dragging && o.inBag);
    const hasCollision = otherObjects.some(other => checkCollision(draggedObj, other));
    
    if (insideBag && !hasCollision) {
      setObjects(objects.map(obj => 
        obj.id === dragging 
          ? { ...obj, inBag: true }
          : obj
      ));
    } else {
      // inBag is false if has collision or outside bag
      setObjects(objects.map(obj => 
        obj.id === dragging 
          ? { ...obj, inBag: false }
          : obj
      ));
    }
    
    setDragging(null);
  };

  // done button
  const handleDone = () => {
    const allInBag = objects.every(obj => obj.inBag);
    if (allInBag) {
      setPuzzleComplete(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Pack everything first!');
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  // game view
  const renderGameView = () => {
    return (
  //     <div 
  //       id="game-area" 
  //       className="relative w-full h-screen overflow-hidden"
  //       onMouseMove={handleMouseMove}
  //       onMouseUp={handleMouseUp}
  //     >
  //       {/* instructions */}
  //       <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg max-w-sm z-50">
  //         <h2 className="font-bold text-lg mb-2">Pack My Projects!</h2>
  //         <p className="text-sm text-gray-700">
  //           {puzzleComplete 
  //             ? "Great job! Click on items to view projects." 
  //             : "Drag all items into the bag. They can't overlap or go outside!
  //           }
  //         </p>
  //       </div>

  //       {/* errors */}
  //       {errorMessage && (
  //         <div className="absolute top-24 left-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 animate-pulse">
  //           {errorMessage}
  //         </div>
  //       )}

  //       {/* bag */}
  //       <div 
  //         className="absolute border-8 border-amber-900 bg-amber-100 bg-opacity-50"
  //         style={{
  //           left: BAG.x,
  //           top: BAG.y,
  //           width: BAG.width,
  //           height: BAG.height,
  //           boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
  //         }}
  //       >
  //         <div className="absolute -top-8 left-0 right-0 h-8 bg-amber-800 rounded-t-lg flex items-center justify-center">
  //           <span className="text-amber-200 font-bold text-sm">BAG</span>
  //         </div>
  //       </div>

  //       {/* objects */}
  //       {objects.map(obj => {
  //         const Icon = obj.icon;
  
  //         return (
  //           <div
  //             key={obj.id}
  //             className={`absolute transition-none group ${
  //               puzzleComplete ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'
  //             }`}
  //             style={{
  //               left: obj.x,
  //               top: obj.y,
  //               width: obj.width,
  //               height: obj.height,
  //               zIndex: obj.zIndex
  //             }}
  //             onMouseDown={(e) => handleMouseDown(e, obj)}
  //             title={obj.type.charAt(0).toUpperCase() + obj.type.slice(1)}
  //           >
  //             <div 
  //               className={`w-full h-full border-4 ${
  //                 obj.inBag ? 'border-green-500 bg-green-100' : 'border-gray-700 bg-white'
  //               } shadow-lg flex items-center justify-center relative`}
  //             >
  //               <Icon size={Math.min(obj.width, obj.height) * 0.6} className="text-gray-700" />
  //             </div>
  //           </div>
  //         );
  //       })}

  //       {/* done button */}
  //       {!puzzleComplete && (
  //         <button
  //           onClick={handleDone}
  //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all z-40"
  //         >
  //           Done!
  //         </button>
  //       )}

  //       {/* next level button */}
  //       {puzzleComplete && (
  //         <button
  //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all z-40"
  //         >
  //           Next Level →
  //         </button>
  //       )}
  //     </div>
  <div 
      id="game-area" 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: '#f3f4f6'
      }}
    >
      <div className="text-center text-black p-8 max-w-2xl">
        <div className="text-8xl mb-6 animate-bounce">🔨</div>
        <h1 className="text-5xl font-bold mb-4">Work in Progress</h1>
        <p className="text-xl mb-8 opacity-90">
          I'm working to create a cute game to show my projects! In the mean-time check out 'Grid' to see my projects and check back another time :)
        </p>
      </div>
    </div>
    );
  };
   // grid view
  const renderGridView = () => {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center p-8 overflow-y-auto py-20 sm:py-24">
        <div className="max-w-6xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 sm:mb-12 text-center px-4">My Projects</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 px-2 sm:px-4">
            {objects.map(obj => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.id}
                  onClick={() => {
                    setActivePopup(obj.id);
                  }}
                  className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all flex flex-col items-center justify-center gap-4"
                >
                  <img src={Icon} size={64} className="text-gray-700" />
                  <h3 className="font-semibold text-gray-800 text-center">{obj.project.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

  return (
    <div 
      className="w-full min-h-screen overflow-y-auto select-none" 
      style={{ 
        backgroundColor: viewMode === 'grid' ? '#f3f4f6' : 'transparent',
        backgroundImage: viewMode === 'game' ? `url(${backdrop})` : 'none',
      }}
    >
      {showIntro ? (
        /* intro */
        <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 text-center text-white p-8 max-w-3xl">
            
            <div className="mb-8">
              {typingStep >= 0 && (
                <h1 className="text-3xl text-white font-bold mb-8 animate-bounce-in">Hey, I'm Tanya!</h1>
              )}
            </div>
            {typingStep >= 1 && (
              <div className="text-lg leading-relaxed mb-8">
                <p className="typing-text-paragraph">
                  {typedText}
                  <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-blink-cursor"></span>
                </p>
              </div>
            )}
            {typingStep >= 2 && (
              <div className="animate-fade-in">
                <p className="text-xl mb-8">Welcome to my portfolio!</p>
                <button
                  onClick={() => setShowIntro(false)}
                  className="relative group px-6 py-3 font-bold text-white border-2 border-white rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[#d77243] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                  <span className="relative z-10">Let's Go</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {viewMode === 'game' ? renderGameView() : renderGridView()}
          <SocialButtons />
          {/* toggle */}
          <div className="fixed top-8 right-8 bg-white rounded-full shadow-lg p-1 flex items-center gap-2 z-40">
            <button
              onClick={() => setViewMode('game')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                viewMode === 'game' 
                  ? 'bg-[#d77243] text-white' 
                  : 'bg-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              Game
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                viewMode === 'grid' 
                  ? 'bg-[#d77243] text-white' 
                  : 'bg-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              Grid
            </button>
          </div>

          
          {/* project descriptions */}
          {activePopup && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setActivePopup(null)}
                  className="sticky top-4 ml-auto text-gray-400 hover:text-gray-600 text-3xl font-light leading-none z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
                >
                  ×
                </button>
                {(() => {
                  const obj = objects.find(o => o.id === activePopup);
                  if (!obj) return null;
                  const Icon = obj.icon;
                  const techStack = obj.project.tech.split(',').map(t => t.trim());
                  
                  return (
                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                      {/* project images */}
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-0 pb-[100%] rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={obj.project.images}
                            alt={obj.project.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* description */}
                      <div className="flex flex-col justify-center space-y-6">
                        <div>
                          <h2 className="text-4xl font-bold text-gray-900 mb-2">{obj.project.title}</h2>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {obj.project.description}
                        </p>
                        
                        {/* tech stack */}
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Tech Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* buttons */}
                        <div className="flex gap-4 pt-4">
                          {obj.project.view && (
                            <a
                              href={obj.project.view || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all text-center"
                            >
                              View Demo
                            </a>
                          )}
                          {obj.project.github && (
                            <a
                              href={obj.project.github || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all text-center"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% { 
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes blink-cursor {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        .animate-blink-cursor {
          animation: blink-cursor 0.8s step-end infinite;
        }
      `}</style>
    </div>
  );
};

// social buttons
const SocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-row gap-3 z-50">
      
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/tanya-rustogi/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-white rounded-full shadow-lg overflow-hidden w-12 hover:w-35 transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-[#0072b1] text-white text-lg flex-shrink-0">
          in
        </div>
        <span className="ml-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          LinkedIn
        </span>
      </a>

      {/* Github */}
      <a
        href="https://github.com/taanyarustogi"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-white rounded-full shadow-lg overflow-hidden w-12 hover:w-35 transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-[#333333] text-white text-lg flex-shrink-0">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <span className="ml-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          Github
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:rustogi.tanya@gmail.com"
        className="group flex items-center bg-white rounded-full shadow-lg overflow-hidden w-12 hover:w-35 transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-[#d77243] text-white text-lg flex-shrink-0">
          @
        </div>
        <span className="ml-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          Email Me
        </span>
      </a>

      {/* Resume */}
      <a
        href={resume}
        download="Tanya_Rustogi_Resume.pdf"
        className="group flex items-center bg-white rounded-full shadow-lg overflow-hidden w-12 hover:w-50 transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-[#b22222] text-white text-lg flex-shrink-0">
          📄
        </div>
        <span className="ml-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          View My Resume
        </span>
      </a>

    </div>
  );
};

export default UnpackingPortfolio;