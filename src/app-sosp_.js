import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import AppRouter from './routers/AppRouter';
// allego come valore la history
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'));
// });

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('log in');
//   } else {
//     console.log('log out');
//   }
// });
let hasRendered = false;
//se la pagina non è stata resa al browser render e imposta che sia resa
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //solo se l'utente è autenticato recuoero le spese
    store.dispatch(startSetExpenses()).then(() => {
      renderApp(); //rendo la pagina se non ancora fatto, sennò non faccio nulla
      //sono già lì
      if (history.location.pathname === '/') {
        //se sono alla pagina di login vado alla dashboard
        history.push('/dashboard');
      }
    });
  } else {
    renderApp();  //rendo la pagina se non ancora fatto, sennò non faccio nulla
      //sono già lì (normalmente la pagina è stata già resa, ma può capitare stia ancora lavorando)
//vado alla pagina di login
      history.push('/');
  }
});