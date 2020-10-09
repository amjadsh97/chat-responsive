import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import ChatScreen from "./ChatScreen";

function App() {
    return (
        <div className="app">
            <Sidebar/>
            <ChatScreen/>
        </div>
    );
}

export default App;
