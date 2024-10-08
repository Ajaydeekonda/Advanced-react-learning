import React from 'react';
import ReactDOM from 'react-dom/client';
import Avatar from './components/Avatar';
import './App.css';
import image from './image.jpg'


export default function App() {
  return (
    <>
      <Avatar  src ={image} alt="Bob Ziroll" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);