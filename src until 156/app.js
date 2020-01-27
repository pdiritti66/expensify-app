import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//l'importazione del Provider di react-redux consente di agganciare i nostri componenti
//a <Provider /> rende il Redux store disponibile per eventuali 
//componenti nidificati che sono stati avvolti in connect()funzione.
//NOTARE:
//1) state è un oggetto a cui associ 1 o più oggetti in modo completo 
//o destrutturato (vedi lez. sulla destrutt)
//2) action è un oggetto che viene popolato 
//con le azioni del dispatcher (comprende parole chiave, variabili o proprietà dell'oggetto) 
//comprende anche funzioni che passano valori o chiavi:valori di oggetti 
//(stessi nomi chiavi e stessi nomi valori)
//come i produttori definiti:
//addExpense ecc.. 
//tutto questo è possibile perchè richiamo i produttori implicitamente
//attraverso il router (che ha una sua mappa con pagina di default )
// e i riduttori implicitamente attraverso lo store configurestore
const store = configureStore();
console.log("app.js " + store);
const jsx = (
   //attraverso questa sintassi rendo accessibili i componenti del router react a redux
  //passandogli lo store creato sopra
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
