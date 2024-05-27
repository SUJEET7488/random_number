import { useState } from 'react';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import generate from '../js/Generate.js';
import '../css/App.css';
function App() {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    return <>
        <div className="main">
            <h1>Random Number Generator</h1>
            <Input classValue="input"
                inputId='startRange' inputValue={start} placeName="Start"
                stateFunction={setStart} />
            <Input classValue="input"
                inputId='endRange' inputValue={end}
                placeName="End" stateFunction={setEnd} />

            {
                randomNumber != "Invalid Input" ? <div id="randomNumber">
                    {randomNumber}</div> : <div id="error"> {randomNumber}</div>
            }
            <Button id="generate"
                classValue='btn'
                handleClick={() => generate(start, end, setRandomNumber)}
                btnName="Genrate Random Number" />
        </div>
    </>
}
export default App;
