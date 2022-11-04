import '../stylesheets/datatable.css';

const TransactionRow = ({ transaction }) => {
    return (
        <tr>
            <td> {transaction.date} </td>
            <td> {transaction.description} </td>
            <td> {transaction.category} </td>
            <td> {transaction.amount.toFixed(2)} </td>
        </tr>
    );
};

const Table = ({ transactions }) => {
  const headers = ["Date", "Description", "Category", "Amount ($)"];
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, index) => (
          <TransactionRow id = {index} transaction = {t}/>
        ))}
        {/* {transactions.map((transaction) => <p>transaction</p>)} */}
      </tbody>
    </table>
  );
};


export default Table;

// import '../stylesheets/datatable.css';

// function App() {

//   // const myFunction = () => {
//   //   var table = document.getElementById("myTable");
//   //   var row = table.insertRow(1);
//   //   var cell1 = row.insertCell(0);
//   //   var cell2 = row.insertCell(1);
//   //   var cell3 = row.insertCell(2);
//   //   var cell4 = row.insertCell(3);
//   //   cell1.innerHTML = "DATE";
//   //   cell2.innerHTML = "DESC";
//   //   cell3.innerHTML = "CAT";
//   //   cell4.innerHTML = "$";
//   // }

//   return (
//     <>
//       <table id="myTable">
//         <tr>
//           <th>Date</th>
//           <th>Description</th>
//           <th>Category</th>
//           <th>Amount</th>
//         </tr>
//         <tr>
//           <td contenteditable='true'>9/8/20</td>
//           <td contenteditable='true'>Dog treats</td>
//           <td contenteditable='true'>Shopping</td>
//           <td contenteditable='true'>$17.38</td>
//         </tr>
//         <tr>
//           <td contenteditable='true'>9/20/20</td>
//           <td contenteditable='true'>whole fooods</td>
//           <td contenteditable='true'>Groceries</td>
//           <td contenteditable='true'>$20.48</td>
//         </tr>
//       </table>

//       {/* <button type="button" onclick={ myFunction() }>
//         Add
//       </button> */}
//     </>
//   )
// }

// export default App;
