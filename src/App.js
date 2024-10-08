import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Menu from './components/Menu';



export default function App() {
  return (
    <div>
      <Menu buttontext="clickHere" items={["hello","namasthe"]}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);