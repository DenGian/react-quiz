import './App.css';
import Header from "./components/Header";
import Fetch from "./components/Fetch";
import AnswerOptions from "./components/ChooseAnswerTitle";
import Square1 from "./components/Square1";
import Square2 from "./components/square2";
import Square3 from "./components/Square3";
import Square4 from "./components/square4";

function App() {
    return (
        <div className="App">
            <Header/>
            <Fetch/>
            <AnswerOptions/>
            <Square1/>
            <Square2/>
            <Square3/>
            <Square4/>
        </div>
    );
}

export default App;