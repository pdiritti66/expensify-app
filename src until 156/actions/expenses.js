import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});
//in origine avevamo:
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });
//l'azione era quella richiamata da AddExpensePage.js nei component
// che viene dispatchata allo store che risolve il riduttore
// di default è impostato ad oggetto vuoto (riga 16) e inizializzato (righe 9...15)
//al tipo d'azione consenguente ADD_EXPENSE si 'ciuccia' i valori passati


//l'alternativa ad inviare oggetti è qulla di inviare funzioni
//ma per poterlo fare occorre installare un modulo (middleware redux)
//che consente di farlo.
//Ora questa funzione viene chiamata internamente da Redux e viene chiamata con Return.
//ed è il dispatch. E' possibile farlo con il middleware.
//tutto quello seguirà dopo => sarà dispatchato (riga 42)
//per cui AddExpensePage.js importerà startAddExpense e la richiamerà al dispatch
//startAddExpense richimerà a sua volta addExpense dandogli expense con i nuovi valori (..diffuso)
//il reducer conseguente aggiorna l'elenco e passa l'oggetto tramite action (action.expense)
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }; //li ricevo qui al posto delle
    //righe 20-25

    database.ref('expenses').push(expense).then((ref) => { //scrivo sul db
      //se la push funziona inviamo a Redux richiamando addExpense a riga 5 sopra
      //gli passo l'id da ref come ritorno da push
      //e gli passo l'expense. L'impostazione dei valori predefiniti
      // viene fatta a riga 41
      //dopo aver ereditato expenseData anziché un oggetto vuoto {}
      //, il quale normalmente è vuoto all'inizio
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
  console.log("expense.js action");
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
