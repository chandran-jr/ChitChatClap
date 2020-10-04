import React, {useState, useEffect} from 'react';
import { Button,FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
const [input,setInput] = useState('');
const [messages,setMessages] = useState([]);
const [username, setUsername] = useState('');

useEffect(() =>{
  setUsername(prompt("Please Enter username"));
}, [] )

const sendMessage = (event) => {

  event.preventDefault();

  setMessages([...messages, input]);
  setInput('');

}

  return (
    <div className="App">
      <h1>ChitChatClap</h1>
  <h2> Welcome {username}</h2>
      
      <form>

      <FormControl>
  <InputLabel>Enter a message...  </InputLabel>
  <Input value={input} onChange={event => {setInput(event.target.value)}} />
  <Button disabled={!input} variant="contained" color="primary" onClick={sendMessage} >Send message</Button>
</FormControl>

      </form>

      {
        messages.map(message =>(
          <Message text={message} > </Message>
        ))
      }
    
    </div>
  );
}

export default App;
