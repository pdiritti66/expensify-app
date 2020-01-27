import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
//la tecnica è sempre quella:
//crei il gestore: ExpenseListItem che importi 
//cicli all'interno dalla lista ogni expense tramite lo spread ...
// ExpenseList viene poi esportato e reso disponibile per la ExpenseDashboardPage
// che è all'interno del ns. approuter che viene referenziato in app.js con il provide dello store
//schema:
//in app.js richiamo i produttori (action) e i selettori combinati  (lo store)
//fornisco attraverso react-redux il provider
//la connessione effettiva fra redux e react è fatto qui. Questo mi consente di ricevere lo state
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {
            console.log("ExpenseList.js call ExpenseListItem " + { ...expense });
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  console.log("ExpenseList.js call selectors/expenses" + state.expenses);
  //si passa direttamente la lista delle spese tramite filtro
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
