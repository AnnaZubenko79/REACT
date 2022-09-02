import React from 'react';
import Expand from './Expand.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Expand title="Recommendation">
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}
export default App;
