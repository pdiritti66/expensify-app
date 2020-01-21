import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk'; // il none thunk è a piacere
//quello che conta è importare la libreria da redux-thunk e fornirla ad applyMiddleware

//qui vengono gestiti i riduttori, ossia vengono prese in carico le azioni
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // al posto di applyMiddleware(thunk), come seconda riga 
    // al posto di window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //che mi priverebbe delle funzionalità 
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //imposto composeEnhancers per 'accodare' la funzione applyMiddleware(thunk)
    //attraverso 'compose'
  );
  console.log("configureStore.js " + store);
  return store;
};
