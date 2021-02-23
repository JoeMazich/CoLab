import React, { useEffect, useState } from 'react';
import './App.css';
import HeaderText from './components/HeaderText';
import MessageInput from './components/MessageInput';
import SendMessageButton from './components/SendMessageButton';
import { db } from './services/firebase';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <div className="App">
      <HeaderText text='Messages' />
      <br />
      <br />
      <br />
      <MessageInput setMessage={setMessage} />
      <SendMessageButton message={message} />
    </div>
  );
};

export default App;
