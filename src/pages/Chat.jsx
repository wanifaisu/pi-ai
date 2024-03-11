import React, { useRef, useState } from 'react';
import './chat.css'; // Import your CSS file
import { Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Chat() {
    const scrollableDivRef = useRef(null);
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const predefinedMessages = [
    { id: 1, text: 'Hi', response: 'Hello! How are you?' },
    { id: 2, text: 'Hello', response: 'Hey there! How are you doing?' },
    { id: 3, text: 'How are you', response: 'I am doing well, thank you! How about you?' },
    { id: 4, text: 'Good morning', response: 'Good morning! Have a great day ahead.' },
    { id: 5, text: 'Good afternoon', response: 'Good afternoon! How can I assist you?' },
    { id: 6, text: 'Good evening', response: 'Good evening! How can I help you today?' },
    { id: 7, text: 'Hey', response: 'Hey! What can I do for you?' },
    { id: 8, text: 'Yo', response: 'Yo! How can I assist you today?' },
    { id: 9, text: 'Hey there', response: 'Hey there! How can I help you?' },
    { id: 10, text: 'Hii', response: 'Hey! How are you?' },
    { id: 11, text: 'what are you doing', response: 'I am an Ai i will give you answers only' }
  ];

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: chatHistory.length + 1,
        text: inputText.trim(),
        sender: 'user',
        userText:inputText
      };

      setChatHistory([...chatHistory, newMessage]);
     

      // Simulate reply after a delay
      setTimeout(() => {
        const matchedMessage = predefinedMessages.find(
          (msg) => msg.text.toLowerCase() === inputText.toLowerCase()
        );
        window.scrollTo({
            top: scrollableDivRef.current.offsetTop,
            behavior: "smooth"
          })
        if (matchedMessage) {
          const replyMessage = {
            id: chatHistory.length + 2,
            text: matchedMessage.response,
            sender: 'bot',
            userText: inputText
          };
          setChatHistory([...chatHistory, replyMessage]);
          setInputText('');
          
      
        
        }else{
            const replyMessage = {
                id: chatHistory.length + 2,
                text: "I am an AI. I have not been trained sufficiently to provide you with an answer. Please provide the exact text you wish me to respond to",
                sender: 'bot',
                userText: inputText
              };
              setChatHistory([...chatHistory, replyMessage]);
              setInputText('');  
        }
      }, 1000); // Simulated delay of 1 second
     setTimeout(()=>{
        scrollableDivRef.current?.lastElementChild?.scrollIntoView()
     },1200)
      
     
    }
  };
  return (
    <div style={{marginLeft:"10px",marginRight:"10px"}}  >
        {chatHistory.length<3&&<div style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>
         <h4 style={{textAlign:"center",fontSize:"20px",width:"600px"}}>Hey there, great to meet you. I'm Pi, your personal AI.
My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind.</h4></div>}
      <div className='innerContainer' style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"50px",paddingLeft:{xs:"10px"},paddingRight:{xs:"10px"},overflowY:"scroll"}}>
       
        <div  ref={scrollableDivRef} style={{height:"500px",width:"600px"}}>
           
        {chatHistory.map((message) => (
            <>
         
          <div style={{backgroundColor:"rgb(217, 234, 252)",borderBottomLeftRadius:"10px",borderTopLeftRadius:"10px",marginTop:"15px"}}>
          <p style={{color:"blue",textAlign:"right",fontSize:"15px",padding:"5px",paddingRight:"20px"}}>{message.userText}</p>
          </div>
          {inputText!==message.text&&<div style={{marginTop:"20px"}} key={message.id} className={`message ${message.sender}`}>
          
          <span className="bot-message">{message.text}</span>
         
      </div>}
          </>
        ))}
        </div>
      </div>
      <div className="InputWithIcon" style={{display:"flex"}}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage} style={{backgroundColor:"rgb(255, 228, 206)",border:"none"}}><ArrowUpwardIcon/></button>
      </div>
    </div>
  );
}

export default Chat;
