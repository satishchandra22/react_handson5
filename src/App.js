import Purecomp from './purecomp';
import './App.css';
import Hoccomp from './hoccomp';

function App() {
  return (
    <div className="App">
     <h1>React Pure Components</h1>
     <p>React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn't implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.</p>
     <p>Here is an example of react pure component</p>
     <Purecomp/>
     <br/>
     <br/>
     <h1>React Higher order component(HOC)</h1>
     <p>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</p>
     <p>Here is the example of Higher order component</p>
     <Hoccomp/>
     <p>Whenever the above counter is multiple of 5, a Higher order component is called which returns 
      a statememt "This is multiple of 5"
     </p>
    </div>
    
  );
}

export default App;
