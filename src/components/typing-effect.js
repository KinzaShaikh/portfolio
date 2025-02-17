import React, { useState, useEffect } from "react";
import styles from '../styles/components/typing-effect.module.scss'
const TypingEffect = ({ texts, period = 2000 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = isDeleting ? 50 : 100; // Adjust speed

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[loopNum % texts.length]; // Get current text
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, period]);

  return (
    <div className={styles.text}>
      {text}
      <span className="cursor">|</span>
      </div>
  );
};

export default TypingEffect;
