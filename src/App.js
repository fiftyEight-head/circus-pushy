import logo from "./logo.svg";
import "./App.css";
import * as Tone from "tone";

function App() {
  return (
    <div className="board">
      <Board name="Push1" />
    </div>
  );
}

let rowList = [];
for (let i = 0; i < 8; i++) {
    rowList.push(<Row name={i+1}></Row>)
}

function Board(props) {
  return (
    //TODO poner un for para crear 8 rows
    <div className="buttonBoard">
      {rowList}
    </div>
  );
}


let buttonList = [];

for (let i = 0; i < 8; i++) {
    buttonList.push(<Button name={i+1}></Button>)
};



function Row(props) {
  return (
    //TODO poner un for para crear 8 botons
    <div className="pushRow">{buttonList}</div>
  );
}

function Button(props) {
  const handleClick = (e) => {
    e.preventDefault();

    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");

    console.log("The button was clicked.");
  };

  return (
    <>
      <p className="pushButton" onClick={handleClick}>
        {" "}
        I am {props.name}
      </p>
    </>
  );
}

export default App;
