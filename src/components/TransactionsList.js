import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions, handleSort }) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3
              onClick={() => {
                handleSort("posted_at");
              }}
              className="ui center aligned header"
            >
              Posted At
            </h3>
          </th>
          <th>
            <h3
              onClick={() => {
                handleSort("description");
              }}
              className="ui center aligned header"
            >
              Description
            </h3>
          </th>
          <th>
            <h3
              onClick={() => {
                handleSort("category");
              }}
              className="ui center aligned header"
            >
              Category
            </h3>
          </th>
          <th>
            <h3
              onClick={() => {
                handleSort("amount");
              }}
              className="ui center aligned header"
            >
              Amount
            </h3>
          </th>
        </tr>

        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsList;
