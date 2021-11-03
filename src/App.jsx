import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/product' component ={Product}/>
        <Route path='/cart' component={Cart} />
        <Route path='/productlist' component ={ProductList}/>
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
