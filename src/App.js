import './App.css';
import NewComp from './NewComp';
import NavigationBar from './NavigationBar';
import Carusel from './Carusel';
import GridLayout from './GridLayout';
import Parent from './Parent';
import FormReact from './FormReact';  
import UseEffectFirst from './UseEffectFirst';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Carusel/>
      <GridLayout/>
      <NewComp/> 
      <Parent/> 
      <FormReact/>
      <UseEffectFirst/>

      
    </div>
  );
}

export default App;
