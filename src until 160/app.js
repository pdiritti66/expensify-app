import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { addExpense } from './actions/expenses';
//al posto di AddExpense che, avvolto in redux, consente l'aggiunta di dati ora provvisto
//di funzione per firebase
//includo:
import { startSetExpenses } from './actions/expenses';
//l'import in riga 10 consente di: leggere i dati da firebase,
//restituirli in array e visualizzarli a video
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

//l'esecuzione di startSetExpenses restituisce una 
//promessa firebase che scatena react-redux
//quindi in pratica c'è un richiamo ad action preliminare con startSetExpenses.
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
