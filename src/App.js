import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ComponentClick from './component/ComponentClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import NameList from './component/NameList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
         {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Hello World
        </a> */}
        <Greet name = 'Karthik' heroName = 'Karthi'>
          <button>FirstName</button>
        </Greet>
        <Welcome courseName = 'React' courseLvl = 'Easy'>
          <button>Welcome</button>
        </Welcome>
        <Hello/>
      {/* </header> */}
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ComponentClick/>
      <EventBind/>
      <ParentComponent/>
      <NameList/>
      
    </div>
    
  );
}

export default App;
