
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import ProductList from './Components/ProductList';


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
         <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/product/:productId' component={ProductDetails}/>
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
