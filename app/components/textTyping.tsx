

'use client'
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

type textProps={
    text:string[],
}

const TxtTyping:React.FC<textProps> = ({text}) => {
    const [currentText, setCurrentText] = useState('')
    const [textIndex, setTextIndex] = useState(0)
    const [isDelete, setIsDelete] = useState(false)

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTimeout = 1000;

    useEffect(()=>{
        let typingTimeout:NodeJS.Timeout
        const fullText = text[textIndex]
        if(currentText==='' && isDelete){
            typingTimeout = setTimeout(() => {
                setIsDelete(false)
                //next text
                setTextIndex(prev => (prev + 1) % text.length)
            }, pauseTimeout);
        } else if (currentText===fullText && !isDelete){
            typingTimeout = setTimeout(() => {
                setIsDelete(true)
            }, pauseTimeout);
        } else {
            typingTimeout = setTimeout(() => {
                setCurrentText(prev => isDelete?
                    fullText.slice(0,prev.length - 1):
                    fullText.slice(0,prev.length + 1)
                )
            }, isDelete?deletingSpeed:typingSpeed);
        }
        return ()=>clearTimeout(typingTimeout)
    },[currentText,text,textIndex,isDelete])
  return (
    <div>
        <Typography variant="h2" sx={{
            fontFamily:"'Courier New',monospace",
            color:'#333',
            borderRight:'1px solid #333',
            whiteSpace:'nowrap',
            fontSize:'1.5rem'
        }}>{currentText}</Typography>
    </div>
  )
}

export default TxtTyping