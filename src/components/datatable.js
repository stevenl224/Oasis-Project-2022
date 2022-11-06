import '../stylesheets/datatable.css';


function TransactionRow({ transaction }) {
    return (
        <tr>
            <td> {transaction.date} </td>
            <td> {transaction.description} </td>
            <td> {transaction.category} </td>
            <td> {transaction.amount.toFixed(2)} </td>
        </tr>
    );
};

function Table({ transactions }){
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
      </tbody>
    </table>
  );
};


export default Table;