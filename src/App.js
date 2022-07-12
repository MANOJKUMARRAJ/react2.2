import './App.css';
const CurrentDate=(props)=>{
  return(
    <div>
      <p>The Current date is :{props.date}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h3>What date is it? </h3>
      <CurrentDate date={Date()}/>
      
    </div>
  );
}
