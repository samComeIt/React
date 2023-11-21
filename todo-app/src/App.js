//import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
    {/* <PlayingWithProps property1="value1" property2="value2" /> */}
    <Counter by="1"/>
    <Counter by="2"/>
    <Counter by="3"/>
    </div>
  );
}

function PlayingWithProps({property1, property2})
{
  console.log(property1)
  console.log(property2)
  return (
    <div>Props</div>
  )
}

export default App;
