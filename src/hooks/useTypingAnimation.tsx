import { useState, useEffect } from "react";

interface UseTypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypingAnimation = ({
  words,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenWords = 2000,
}: UseTypingAnimationProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[currentWordIndex];

    if (isTyping) {
      // Typing animation
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait then start erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenWords);
      }
    } else {
      // Erasing animation
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, erasingSpeed);
      } else {
        // Finished erasing, move to next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isTyping,
    words,
    typingSpeed,
    erasingSpeed,
    delayBetweenWords,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return {
    currentText,
    showCursor,
    currentWordIndex,
  };
};
