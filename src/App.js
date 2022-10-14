import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

function App() {
  return (
    <div className="App">
          <Board name="Push1"/>
      </div>
  );
}

function Board(props){
    return (
        //TODO poner un for para crear 8 rows
            <div>
            <Row name="Row1"/>
            </div>
    );
}


<Button name="1" color="red" note="a"/>
let buttons=['Item 1','Item 2','Item 3','Item 4','Item 5'];
let buttonList=[];
buttons.forEach((item,index)=>{
  buttonList.push( <Button name={item}></Button>)
})

function Row(props){
    return (    
        //TODO poner un for para crear 8 botons
<div className="pushRow">
            <div id="button1">
                {buttonList}
            </div>
            
          
</div>
    );
}

function Button(props){

    const handleClick = (e) => {
        e.preventDefault();

        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");

        console.log('The button was clicked.');
    };


    return (
           <div>
            <p className="pushButton" onClick={handleClick}> I am {props.name}</p>
            </div>
);
}

export default App;
