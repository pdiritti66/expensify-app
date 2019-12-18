import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {moment(createdAt).toString("YYYY-MM-DD")} - {note}</p>
  </div>
);

// class ExpenseListItem extends React.Component
// {
//   constructor(props) {
//     super(props);
// console.log(props);
//     this.state = {
//       id:  props.id ,
//       description:  props.description,
//       note: props.note,
//       amount: (props.amount / 100).toString() ,
//       createdAt:  moment(props.createdAt).toString("YYYY-MM-DD") 
//      };
//   }
  
//   render()
//   {
//     return (

//       <div>
//         <Link to={`/edit/${this.state.id}`}>
//           <h3>{this.state.description}</h3>
//         </Link>
//         <p>{this.state.amount} - {this.state.createdAt} - {this.state.note}</p>
//       </div>
//     );
//   }
// };

export default ExpenseListItem;
