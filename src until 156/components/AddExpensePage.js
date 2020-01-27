import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log("AddExpensePage.js" + expense );
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  //al posto di:
  // addExpense: (expense) => dispatch(addExpense(expense)) ho:
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
  //il dispatch quindi di addExpense allo store viene fatto dentro l'action. Se lo prende
  //in carico startAddExpense.
  // l'istruzione dispatch(startAddExpense(expense)) in riga 27
  // fa:
  //dispatch azione firebase push
  //dispatch addExpense,che, indirettamente viene gestito dallo store da qui
  //in avanti attraverso il suo reducer 
});
//attraverso questa direttiva si trasmette al componente 
// 'sopra' (il router), importato a sua volta da app.js,
//la quale avvolge i componenti con il <provider/> garantendo la possibilità di connect qua dentro
//passandogli il dispatch
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
