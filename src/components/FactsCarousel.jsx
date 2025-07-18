import { ChevronLeftIcon, ChevronRightIcon, RocketIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

const facts = [
  "Yuri Gagarin, a Soviet cosmonaut, became the first human in space on April 12,1961, aboard Vostok 1",
  "Apollo 11 was the first successful manned Moon landing, with Neil Armstrong and Buzz Aldrin walking on the moon on July 20,1969",
  "Viking 1 by NASA became the first spacecraft to successfully land on Mars and send data back on July 20, 1976",
  "Russian cosmonaut Valeri Polyakov spent 437 days aboard the Mir Space Station, the longest human stay in space.",
  "The Soviet Union launched Sputnik 1 on October 4, 1957, making it the first artificial satellite to orbit Earth",
  "Voyager 1, launched in 1977, is the farthest human-made object from Earth and entered interstellar space in 2012.",
  "India’s Mangalyaan (Mars Orbiter Mission) cost only $74 million, cheaper than the Hollywood movie Gravity.",
  "The International Space Station (ISS) travels at about 28,000 km/h, circling Earth every 90 minutes—astronauts see 16 sunrises/day.",
  "NASA’s Challenger shuttle exploded shortly after launch in 1986, killing all 7 astronauts, due to a faulty O-ring in cold weather.",
  "All moonwalkers were part of NASA’s Apollo missions between 1969–1972. No one has walked on the Moon since Apollo 17."
]

const FactsCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    
    const autoplayInterval = 8000; 
    const autoplayRef = useRef();

    const goToNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === facts.length - 1 ? 0 : prevIndex + 1));
            setIsFading(false);
        }, 300); 
    };
    
    const goToPrevious = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? facts.length - 1 : prevIndex - 1));
            setIsFading(false);
        }, 300);
    };

    const goToIndex = (index) => {
        if (index === currentIndex) return;
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsFading(false);
        }, 300);
    };
    
    useEffect(() => {
        autoplayRef.current = setInterval(goToNext, autoplayInterval);
        return () => clearInterval(autoplayRef.current);
    }, []);

    const handleManualNavigation = (navigationFunc) => {
        clearInterval(autoplayRef.current);
        navigationFunc();
        autoplayRef.current = setInterval(goToNext, autoplayInterval);
    };

  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                <div className="flex flex-row gap-2 justify-center text-4xl md:text-5xl font-bold mb-12 text-center">
                    Did You Know?
                    <RocketIcon size={48}/>
                </div>
                <div className="relative w-full max-w-3xl flex items-center justify-center">
                    
                    <button
                        onClick={() => handleManualNavigation(goToPrevious)}
                        className="absolute left-0 -translate-x-12 p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none"
                        aria-label="Previous fact"
                    >
                        <ChevronLeftIcon />
                    </button>

                    <div className="w-full h-48 flex items-center justify-center bg-gray-900/50 border border-gray-800 rounded-xl shadow-lg p-6 md:p-8 overflow-hidden">
                        <p className={`text-center text-lg md:text-xl text-gray-300 transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                           "{facts[currentIndex]}"
                        </p>
                    </div>

                    <button
                        onClick={() => handleManualNavigation(goToNext)}
                        className="absolute right-0 translate-x-12 p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none"
                        aria-label="Next fact"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>

                <div className="flex justify-center space-x-3 mt-8">
                    {facts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleManualNavigation(() => goToIndex(index))}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'}`}
                            aria-label={`Go to fact ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default FactsCarousel
