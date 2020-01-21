export default (expenses) => {
  // console.log("expenses-total.js selector" + startDateMatch + " " + endDateMatch + " " + textMatch);
  return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};
