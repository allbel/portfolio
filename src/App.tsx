import React from 'react';
import './App.css';
import Header from "./blocks/Header/Header";
import Main from "./blocks/Main/Main";
import Skills from "./blocks/Skills/Skills";
import Projects from "./blocks/Projects/Projects";
import Distant from "./blocks/Distant/Distant";
import Contacts from "./blocks/Contacts/Contacts";
import Footer from "./blocks/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Distant/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
