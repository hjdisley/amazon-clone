import './styling/index.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { elements, Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HtVqaIhvvofoJrivj5oQXEHS5lfYT0NLNTXKHFfqomfH34f3Ka28217XfjpgwkHECM8iU7aF3d437gmMEJCZ04Z00kRIFIWHH'
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user -> ', authUser);
      if (authUser) {
        //user is logged in send it to dataLayer
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user is logged out -> change dataLayer as such
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
