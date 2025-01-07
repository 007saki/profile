'use client';

import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface TextProps {
  text: string[];
}

const TypingText: React.FC<TextProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed for typing characters
  const deletingSpeed = 50; // Speed for deleting characters
  const pauseTime = 1000; // Pause time before deleting or switching text

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (!isDeleting && currentText === text[textIndex]) {
      // Pause before deleting
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      // Move to the next text
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
    } else {
      // Typing or deleting characters
      typingTimeout = setTimeout(() => {
        const fullText = text[textIndex];
        setCurrentText((prevText) =>
          isDeleting
            ? fullText.slice(0, prevText.length - 1)
            : fullText.slice(0, prevText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, text, textIndex]);

  return (
    <Grid container justifyContent="center">
      <Typography
        variant="h5"
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          borderRight: '2px solid #333',
          fontFamily: "'Courier New', monospace",
          color: '#333',
          fontSize: '1.5rem',
          overflow: 'hidden',
        }}
      >
        {currentText}
      </Typography>
    </Grid>
  );
};

export default TypingText;
