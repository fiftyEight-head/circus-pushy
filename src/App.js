import "./App.css";
import * as Tone from "tone";

function App() {
  return (
    <div className="board">
      <Board name="Push1" />
    </div>
  );
}

let buttonsMatrix = [];
for (let i = 0; i < 8; i++) {
    buttonsMatrix.push(<Row rowId={i+1}></Row>)
}

function Board(props) {
  return (
    //TODO poner un for para crear 8 rows
    <div className="buttonBoard">
      {buttonsMatrix}
    </div>
  );
}




function Row(props) {

  let buttonList = [];

  for (let i = 0; i < 8; i++) {
      buttonList.push(<Button rowId={props.rowId} name={i+1}></Button>)
    };
  
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
        I am Button {props.name} in row {props.rowId}
      </p>
    </>
  );
}

export default App;
