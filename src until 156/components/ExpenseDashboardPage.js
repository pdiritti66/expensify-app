import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
//sono in grado di vedere le spese e i filtri perchè li ho esportati con connect 
// da ExpenseList
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
console.log("ExpenseDashboardPage.js");
export default ExpenseDashboardPage;
