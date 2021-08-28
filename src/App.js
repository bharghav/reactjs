import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductList from './containers/ProductList';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route >404 Not Found</Route>
        </Switch>        
      </Router>
       
    </div>
  );
}

export default App;
