import "./App.css";
import * as Tone from "tone";

function App() {
  return (
    <div className="board">
      <Board name="Push1" />
    </div>
  );
}


let buttonsRow = [];
for (let i = 0; i < 8; i++) {
    buttonsRow.push(<Row rowId={i+1}></Row>)
}

function Board(props) {
  return (
    //TODO poner un for para crear 8 rows
    <div className="buttonBoard">
      {buttonsRow}
    </div>
  );
}




function Row(props) {

  let buttonList = [];

  for (let i = 0; i < 8; i++) {
      buttonList.push(<Button rowId={props.rowId} name={i+1} note={calculateNote(props.rowId, i+1)}></Button>)
    };
  
  return (
    //TODO poner un for para crear 8 botons
    <div className="pushRow">{buttonList}</div>
  );
}

function calculateAbsoluteButtonNumber(rowId, buttonId){
  return rowId * buttonId;
}

function calculateNote(rowId, buttonId){

  let finalNote = ""
  switch (rowId) {
    case 1: finalNote += "A";
      
      break;

      case 2: finalNote += "B";
      
      break;
      
      case 3: finalNote += "C";
      
      break;
      
      case 4: finalNote += "D";
      
      break;
      
      case 5: finalNote += "E";
      
      break;
      
      case 6: finalNote += "F";
      
      break;
      
      case 7: finalNote += "G";
      
      break;
      
      case 8: finalNote += "H";
      
      break;
      
  
    default: finalNote += "A";
      break;

  }

  switch (buttonId) {
    case 1: finalNote += "1";
      
      break;

      case 2: finalNote += "2";
      
      break;
      
      case 3: finalNote += "3";
      
      break;
      
      case 4: finalNote += "4";
      
      break;
      
      case 5: finalNote += "5";
      
      break;
      
      case 6: finalNote += "6";
      
      break;
      
      case 7: finalNote += "7";
      
      break;
      
      case 8: finalNote += "8";
      
      break;
      
    default: finalNote += "1";
      break;

  }

  console.log("CREANDO NOTA:" + finalNote);

  return finalNote;
}

function calculateColor(absoluteButtonNumber){
  return 0;
}


function Button(props) {

  const handleClick = (e) => {
    e.preventDefault();
    //FIXME enviar synth via props o state.
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(props.note, "8n");

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
