// import React from 'react';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import Home from './Home';
// import Products from './Products';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="page">
//         <BrowserRouter>
//           <ul className="navigation">
//             <li className="navigation__item">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="navigation__item">
//               <Link to="/products">Products</Link>
//             </li>
//           </ul>
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/products" component={Products} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products} />
      </BrowserRouter>
    </div>
  );
};

export default App;
